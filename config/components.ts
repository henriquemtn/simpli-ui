export interface ComponentCategory {
    slug: string;
    name: string;
    components: { name: string }[];
}

export const categories: ComponentCategory[] = [
    {
        slug: "accordion",
        name: "Accordion",
        components: [
            { name: "accordion-01" },
            { name: "accordion-02" },
            { name: "accordion-03" },
        ],
    },
    {
        slug: "alert",
        name: "Alert",
        components: [
            { name: "alert-01" },
            { name: "alert-02" },
            { name: "alert-03" },
        ],
    }
];

export function getCategory(slug: string): ComponentCategory | undefined {
    return categories.find((category) => category.slug === slug);
}