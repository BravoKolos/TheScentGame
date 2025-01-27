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
            Name: ${this.name}<br>
            Brand: ${this.brand}<br>
            Category: ${this.category}<br>
            Price:${this.price.toFixed(2)}<br>
            Scent: ${this.scent}<br>
            Volume: ${this.volume}<br>
            Description:${this.description}
        `;
    }
}

function renderPerfumes() {
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
                    <h1 class="perfumeName">${perfume.name}</h1>
                    <p>${perfume.description}</p>
                </div>
            </div>
        `;

        if (perfume.category === "Women's Perfume") {
            womenContainer.appendChild(perfumeCard);
        }
    });

}

document.addEventListener('DOMContentLoaded', renderPerfumes);

