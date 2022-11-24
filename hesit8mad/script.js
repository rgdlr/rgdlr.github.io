// [TODO] Apply discount code
function applyDiscount(budget, discount) {
  return `
    <div>
        <p style="color: grey; transform: scale(.5); margin: 0;">
            <small><del>${budget.toFixed(2)} EUR</del></small>
        </p>
        <p style="margin: 0; padding: 0;">
            ${discountedBudget.toFixed(2)} EUR
        </p>
    </div>`;
}

// Calculate budget
function calculateBudget() {
  let recording = document.getElementById("recording").value;
  let location = document.getElementById("location").value;
  let displacement = document.getElementById("displacement").innerText;
  let duration = document.getElementById("duration").value;
  let edition = document.getElementById("edition").value;

  let illumination = document.getElementById("illumination").checked;
  let drone = document.getElementById("drone").checked;
  let script = document.getElementById("script").checked;
  let coverYoutube = document.getElementById("cover-youtube").checked;
  let coverSpotify = document.getElementById("cover-spotify").checked;
  let photography = document.getElementById("photography").checked;
  let teaser = document.getElementById("teaser").checked;
  let makingOf = document.getElementById("making-of").checked;

  let discount = document.getElementById("discount").value;

  if (!location) {
    displacement = 0;
  } else if (displacement != 0) {
    displacement = displacement.split(" ");
    displacement = displacement[1]
      ? parseInt(displacement[0]) * 60 + parseInt(displacement[1])
      : parseInt(displacement[0]);
  }

  duration = duration.split(":");
  duration = parseInt(duration[0]) + parseInt(duration[1]) / 60;

  let budget =
    recording * 90 +
    displacement * 0.5 +
    duration * 20 +
    edition * 20 +
    illumination * 15 +
    drone * 50 +
    script * 25 +
    coverYoutube * 15 +
    coverSpotify * 15 +
    photography * 25 +
    teaser * 20 +
    makingOf * 25;

  if (discount == "") {
    document.getElementById("budget").innerHTML = `${budget.toFixed(2)} EUR`;
    document.getElementById("discount").style.color = "black";
  } else if (discount == "15OFF") {
    document.getElementById("budget").innerHTML = `
        <div>
            <p style="color: grey; transform: scale(.5); margin: 0;">
                <small><del>${budget.toFixed(2)} EUR</del></small>
            </p>
            <p style="margin: 0; padding: 0;">
                ${(budget * 0.85).toFixed(2)} EUR
            </p>
        </div>`;
    document.getElementById("discount").style.color = "darkgreen";
  } else if (discount == "4FREE") {
    document.getElementById("budget").innerHTML = `
        <div>
            <p style="color: grey; transform: scale(.5); margin: 0;">
                <small><del>${budget.toFixed(2)} EUR</del></small>
            </p>
            <p style="margin: 0; padding: 0;">
                ${(0).toFixed(2)} EUR
            </p>
        </div>`;
    document.getElementById("discount").style.color = "darkgreen";
  } else {
    document.getElementById("budget").innerHTML = `${budget.toFixed(2)} EUR`;
    document.getElementById("discount").style.color = "darkred";
  }
}

// Autocomplete location
function initMap() {
  let options = { componentRestrictions: { country: "es" } };

  let input = document.getElementById("location");
  let autocomplete = new google.maps.places.Autocomplete(input, options);

  google.maps.event.addListener(autocomplete, "place_changed", function () {
    const originLatLng = { lat: 40.394291, lng: -3.71244 };
    let destination = autocomplete.getPlace().geometry.location;
    let destinationLatLng = { lat: destination.lat(), lng: destination.lng() };

    let request = {
      origins: [originLatLng],
      destinations: [destinationLatLng],
      travelMode: google.maps.TravelMode.DRIVING,
    };

    const distanceMatrixService = new google.maps.DistanceMatrixService();
    distanceMatrixService.getDistanceMatrix(request).then((response) => {
      // document.getElementById("request").innerText = JSON.stringify(request, null, 2);
      document.getElementById("displacement").innerText = response.rows[0].elements[0].duration.text
        .replace(/[^0-9\s]/g, "")
        .replace(/\s{2,}/g, " ");
      calculateBudget();
    });
  });
}

// Apply discount when pressing enter key
let input = document.getElementById("discount");

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("apply-discount").click();
  }
});

// Send email
let submitButton = document.getElementById("submit_form");
let form = document.getElementById("email_form");

form.addEventListener("submit", () => {
  setTimeout(() => {
    submitButton.value = "Enviando...";
    submitButton.disabled = true;
  }, 1);
});

// Dropbox upload file
function uploadFile() {
  const UPLOAD_FILE_SIZE_LIMIT = 150 * 1024 * 1024;
  var dbx = new Dropbox.Dropbox({
    accessToken: "wDcMa-Jc35IAAAAAAAAAAadab0gWZ5w1rfNTzZsmGS-b9BsVlvwayJE_UuBGJQvX",
  });
  var fileInput = document.getElementById("file-upload");
  var file = fileInput.files[0];

  if (file) {
    document.getElementById("file-upload").style.color = "black";

    setTimeout(() => {
      document.getElementById("file-spinner").removeAttribute("hidden");
      document.getElementById("file-check").setAttribute("hidden", true);
    }, 1);

    if (file.size < UPLOAD_FILE_SIZE_LIMIT) {
      // File is smaller than 150 Mb - use filesUpload API
      dbx
        .filesUpload({ path: "/" + file.name, contents: file })
        .then(function (response) {
          document.getElementById("file-spinner").setAttribute("hidden", true);
          document.getElementById("file-check").removeAttribute("hidden");
          console.log(response);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      // File is bigger than 150 Mb - use filesUploadSession* API

      const maxBlob = 8 * 1000 * 1000; // 8Mb - Dropbox JavaScript API suggested max file / chunk size
      var workItems = [];
      var offset = 0;

      while (offset < file.size) {
        var chunkSize = Math.min(maxBlob, file.size - offset);
        workItems.push(file.slice(offset, offset + chunkSize));
        offset += chunkSize;
      }

      const task = workItems.reduce((acc, blob, idx, items) => {
        if (idx == 0) {
          // Starting multipart upload of file
          return acc.then(function () {
            return dbx
              .filesUploadSessionStart({ close: false, contents: blob })
              .then((response) => response.session_id);
          });
        } else if (idx < items.length - 1) {
          // Append part to the upload session
          return acc.then(function (sessionId) {
            var cursor = { session_id: sessionId, offset: idx * maxBlob };
            return dbx
              .filesUploadSessionAppendV2({ cursor: cursor, close: false, contents: blob })
              .then(() => sessionId);
          });
        } else {
          // Last chunk of data, close session
          return acc.then(function (sessionId) {
            var cursor = { session_id: sessionId, offset: file.size - blob.size };
            var commit = { path: "/" + file.name, mode: "add", autorename: true, mute: false };
            return dbx.filesUploadSessionFinish({ cursor: cursor, commit: commit, contents: blob });
          });
        }
      }, Promise.resolve());

      task
        .then(function () {
          document.getElementById("file-spinner").setAttribute("hidden", true);
          document.getElementById("file-check").removeAttribute("hidden");
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  } else document.getElementById("file-upload").style.color = "darkred";

  return false;
}

let lastPosition = 0;

window.addEventListener("scroll", (_event) => {
  const budget = document.getElementById("budget-container");
  const { bottom } = budget.getBoundingClientRect();

  if (window.scrollY > 150) {
    budget.classList.remove("invisible");
  } else {
    budget.classList.add("invisible");
  }

  if (lastPosition === bottom) {
    budget.classList.add("shadow-lg");
  } else {
    budget.classList.remove("shadow-lg");
  }

  lastPosition = bottom;
});


document.getElementById("footer-year").textContent = new Date().getFullYear();
