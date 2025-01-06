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

const perfumeCatalog = [
    new Perfume(
        "Versace Dylan Blue",
        "Versace",
        "Woody, aromatic",
        "Grapefruit, Bergamot, Aquatic Notes, Figs",
        "Pepper, Violet, Patchouli, Papyrus, Amber, Ambroxan",
        "Tonka Bean, Saffron, Musk, Incense",
        100,
        "50ml",
        "Fragrance full of character and individuality, an expression of masculine strength and charisma.",
        "Men's Perfume",
        "/assets/men/versace-dylan-blue-pour-homme-woda-toaletowa-dla-mezczyzn.webp"
    ),
    new Perfume(
        "Stronger With You",
        "Emporio Armani",
        "Woody, aromatic",
        "Pepper, Cardamom, Violet, Spices",
        "Sage",
        "Cedar, Vanilla, Chestnuts",
        100,
        "Spray",
        "A male answer to a secret equation that you will fully solve only with Her by your side.",
        "Men's Perfume",
        "./assets/men/armani-emporio-stronger-with-you-woda-toaletowa-dla-mezczyzn.webp"
    ),
    new Perfume(
        "Jean Paul Gaultier Le Beau Le Parfum",
        "Jean Paul Gaultier",
        "Woody, aromatic, oriental",
        "Coconut",
        "Tonka beans",
        "Sandalwood",
        100,
        "70ml",
        "The forbidden fruit of an extremely addictive, woody amber that tempts the senses to disobey.",
        "Men's Perfume",
        "/assets/men/jean-paul-gaultier-le-beau-le-parfum-intense-woda-perfumowana-dla-mezczyzn.webp"
    ),
    new Perfume(
        "Lattafa Khamrah",
        "Lattafa",
        "Sweet, spicy",
        "Bergamot, Cinnamon, Nutmeg",
        "Lilies of the Valley, Praline, Tuberose",
        "Tonka Bean, Benzoin, Myrrh, Wood, Vanilla, Amber Wood",
        100,
        "50ml",
        "Base notes of vanilla, tonka bean, amberwood, myrrh, benzoin, and akigala wood.",
        "Men's Perfume",
        "/assets/men/lattafa-khamrah-woda-perfumowana-unisex.webp"
    ),
    new Perfume(
        "Carolina Herrera Bad Boy",
        "Carolina Herrera",
        "Oriental, spice",
        "grapefruit, white pepper",
        "vetiver, sage",
        "tonka bean, cacao",
        100,
        "50ml",
        "Deep, sweet and spicy aroma slowly comes to the fore, giving the composition a charismatic character.",
        "Men's Perfume",
        "/assets/men/carolina-herrera-bad-boy-woda-toaletowa-dla-mezczyzn.webp"
    ),
    new Perfume(
        "Boss The Scent Elixir",
        "Hugo Boss",
        "Spicy, powdery, woody",
        "Allspice, Pimento pepper",
        "Lavender",
        "Sandalwood",
        100,
        "50ml",
        "Highly concentrated, amber and leather composition exudes pure charm.",
        "Men's Perfume",
        "/assets/men/hugo-boss-boss-the-scent-elixir-woda-perfumowana-dla-mezczyzn.webp"
    ),
    new Perfume(
        "Carolina Herrera Good Girl",
        "Carolina Herrera",
        "Floral, oriental",
        "Almond",
        "Tuberose, Jasmine",
        "Cacao, Tonka Bean",
        120,
        "80ml",
        "A bold blend of dark and light elements for the modern woman.",
        "Women's Perfume",
        "/assets/women/carolina-herrera-good-girl-woda-perfumowana-dla-kobiet.webp"
    )
];

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
