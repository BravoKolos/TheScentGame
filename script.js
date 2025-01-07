class Perfume {
    constructor(name, brand, scent, headNote, heartNote, baseNote, price, volume, description, category, imageUrl) {
        this.name = name;
        this.brand = brand;
        this.scent = scent;
        this.headNote = headNote;
        this.heartNote = heartNote;
        this.baseNote = baseNote;
        this.price = price;
        this.volume = volume;
        this.description = description;
        this.category = category;
        this.imageUrl = imageUrl || './assets/placeholder.png';
    }

    getFormattedDetails() {
        return `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Brand:</strong> ${this.brand}<br>
            <strong>Category:</strong> ${this.category}<br>
            <strong>Price:</strong> $${this.price.toFixed(2)}<br>
            <strong>Scent:</strong> ${this.scent}<br>
            <strong>Volume:</strong> ${this.volume}<br>
            <strong>Description:</strong> ${this.description}
        `;
    }
}

function renderPerfumes() {
    const menContainer = document.getElementById('menPerfumesContainer');
    const womenContainer = document.getElementById('womenPerfumesContainer');

    perfumeCatalog.forEach((perfume) => {
        const perfumeCard = document.createElement('div');
        perfumeCard.classList.add('col');

        perfumeCard.innerHTML = `
            <div class="wrapper">
                <img 
                    src="${perfume.imageUrl}" 
                    alt="${perfume.name}" 
                    onerror="this.src='./assets/placeholder.png';" 
                    title="${perfume.getFormattedDetails()}">
                <div class="content">
                    <h1>${perfume.name}</h1>
                    <p>${perfume.description}</p>
                </div>
            </div>
        `;

        if (perfume.category === "Men's Perfume") {
            menContainer.appendChild(perfumeCard);
        } else if (perfume.category === "Women's Perfume") {
            womenContainer.appendChild(perfumeCard);
        }
    });
}

document.addEventListener('DOMContentLoaded', renderPerfumes);
