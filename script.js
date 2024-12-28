// Your Perfume class
class Perfume {
    constructor(name, brand, scent, headNote, heartNote, baseNote, price, volume, description, category) {
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
    }

    // Get a formatted string of details to show on hover
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

// Perfume Catalog
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
        "Men's Perfume"
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
        "Nothing can exist without love. When you wake up in the morning and you know that there is Someone who thinks about you. Stronger With You is a male answer to a secret equation that you will fully solve only with Her by your side.",
        "Men's Perfume"
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
        "Its power of attraction? The forbidden fruit of an extremely addictive, woody amber that tempts the senses to disobey.",
        "Men's Perfume"
    ),
    new Perfume(
        "Khamrah",
        "Lattafa",
        "Sweet, spicy",
        "Bergamot, Cinnamon, Nutmeg",
        "Lilies of the Valley, Praline, Tuberose",
        "Tonka Bean, Benzoin, Myrrh, Wood, Vanilla, Amber Wood",
        "Akigala wood",
        100,
        "50ml",
        "The fragrance settles on base notes of vanilla, tonka bean, amberwood, myrrh, benzoin and akigala wood.",
        "Men's Perfume"
    ),
    new Perfume(
        
    ),
    new Perfume(
        "Boss The Scent Elixir",
        "Hugo Boss",
        "Spicy, powdery, woody",
        "Allspice, Pimento pepper",
        "Lavender, Lavender",
        "Sandalwood",
        100,
        "50ml",
        "Highly concentrated, amber and leather composition exudes pure charm.",
        "Men's Perfume"
    ),
];
