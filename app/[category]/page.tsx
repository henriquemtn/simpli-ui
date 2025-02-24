import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/page-header";
import { categories, getCategory } from "@/config/components";
import Link from "next/link";

type Props = {
  params: { category: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory(params.category);

  if (!category) {
    return {};
  }

  return {
    title: `${category.name} components built with React and Tailwind CSS - Origin UI`,
    description: `A collection of beautiful and accessible ${category.name.toLowerCase()} components built with React and Tailwind CSS.`,
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default function Page({ params }: Props) {
  const category = getCategory(params.category);

  if (!category) {
    notFound();
  }

  const components = category.components.map((component) => ({
    name: component.name,
    category: category.slug,
  }));

  return (
    <>
      <PageHeader title={category.name}>
        A growing collection of {components.length} {category.name.toLowerCase()} components built
        with React and Tailwind CSS.
      </PageHeader>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Link
            key={component.name}
            href={`/components/${category.slug}/${component.name}`}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{component.name}</h2>
            <p className="text-gray-600">
              View the {component.name} {category.name.toLowerCase()} component
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}