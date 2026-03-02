let resources = [];

fetch("data/resources.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("JSON nu a fost gasit!");
        }
        return response.json();
    })
    .then(data => {
        resources = data;
        displayResources(resources);
    })
    .catch(error => {
        document.getElementById("resourceList").innerHTML =
            "<p style='color:red;'>Eroare la incarcare JSON!</p>";
        console.error(error);
    });

function displayResources(data) {
    const container = document.getElementById("resourceList");
    container.innerHTML = "";

    data.forEach(resource => {
        container.innerHTML += `
            <div>
                <h3>${resource.name}</h3>
                <p><strong>Tip:</strong> ${resource.type}</p>
                <p><strong>Locatie:</strong> ${resource.location}</p>
                <p><strong>Program:</strong> ${resource.program}</p>
                <p><strong>Tags:</strong> ${resource.tags.join(", ")}</p>
                <hr>
            </div>
        `;
    });
}

function filterStudy() {
    const filtered = resources.filter(r => r.type === "study");

    const container = document.getElementById("filteredList");
    container.innerHTML = "";

    if (filtered.length === 0) {
        container.innerHTML = "<p>Nu exista resurse pentru studiu.</p>";
        return;
    }

    filtered.forEach(resource => {
        container.innerHTML += `
            <div>
                <h3>${resource.name}</h3>
                <p>Locatie: ${resource.location}</p>
            </div>
        `;
    });
}