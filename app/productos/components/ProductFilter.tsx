import { ProductFilterProps } from "../types/types";
import React, { ChangeEvent, useState } from "react";
import { useProductContext } from "../hooks/useProductContext";
import { Icon } from "@/components/ui/icon";
import clsx from "clsx";

const ProductFilter: React.FC<ProductFilterProps> = () => {
  // Traemos la data del context
  const {
    categories,
    subcategories,
    collections,
    selectedCategories,
    setSelectedCategories,
    selectedSubcategories,
    setSelectedSubcategories,
    selectedCollections,
    setSelectedCollections,
  } = useProductContext();

  const [categoryOpen, setCategoryOpen] = useState(true);
  const [subcategoryOpen, setSubcategoryOpen] = useState(true);
  const [collectionOpen, setCollectionOpen] = useState(true);

  // Cambio de categoria
  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const category = categories?.find((cat) => cat.name === e.target.value);

    if (category) {
      setSelectedCategories((prevCategories) => {
        if (prevCategories) {
          return prevCategories.includes(category)
            ? prevCategories.filter((prevCategory) => prevCategory !== category)
            : [...prevCategories, category];
        } else {
          return [category];
        }
      });
    }
  };

  // Cambio de subcategoria
  const handleSubcategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const subcategory = subcategories?.find(
      (sub) => sub.name === e.target.value
    );

    if (subcategory) {
      setSelectedSubcategories((prevSubcategories) => {
        if (prevSubcategories) {
          return prevSubcategories.includes(subcategory)
            ? prevSubcategories.filter((prevSub) => prevSub !== subcategory)
            : [...prevSubcategories, subcategory];
        } else {
          return [subcategory];
        }
      });
    }
  };

  // Cambio de colección
  const handleCollectionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const collection = collections?.find((sub) => sub.name === e.target.value);

    if (collection) {
      setSelectedCollections((prevCollection) => {
        if (prevCollection) {
          return prevCollection.includes(collection)
            ? prevCollection.filter((prevCol) => prevCol !== collection)
            : [...prevCollection, collection];
        } else {
          return [collection];
        }
      });
    }
  };

  // Resets

  const handleReset = (entity: "category" | "subcategory" | "collection") => {
    switch (entity) {
      case "subcategory":
        setSelectedSubcategories([]);
        break;
      case "collection":
        setSelectedCollections([]);
        break;
      default:
        setSelectedCategories([]);
        setSelectedSubcategories([]);
        setSelectedCollections([]);

        break;
    }
  };

  return (
    <div className="space-y-2 w-full">
      {/* CATEGORIAS */}
      <div className="overflow-hidden rounded-sm border border-surface-light">
        <button
          className="flex text-white cursor-pointer items-center w-full justify-between p-4 bg-surface-dark"
          onClick={() => {
            setCategoryOpen(!categoryOpen);
          }}
        >
          <span className="text-sm font-medium"> Categorías </span>

          <Icon
            className={clsx("transition-all", categoryOpen && "rotate-180")}
            name={"ChevronDown"}
          />
        </button>
        {categoryOpen && (
          <div className="border-t border-surface-light bg-surface-dark">
            {selectedCategories?.length && selectedCategories.length > 0 ? (
              <div className="flex items-center justify-end pt-2 px-4">
                <button
                  type="button"
                  className="text-sm underline underline-offset-4 text-white"
                  onClick={() => handleReset("category")}
                >
                  Reiniciar
                </button>
              </div>
            ) : null}
            <ul className="space-y-1 p-4">
              {categories?.map((category) => {
                return (
                  <li key={category.name}>
                    <label
                      htmlFor={category.slug}
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id={category.slug}
                        className="size-5 rounded-sm border-gray-300 dark:border-gray-600 dark:bg-surface-dark dark:focus:ring-offset-gray-900"
                        onChange={handleCategoryChange}
                        value={category.name}
                        checked={selectedCategories?.some(
                          (e) => e.name === category.name
                        )}
                      />

                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {category.name}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {/* SUBCATEGORIAS */}
      <div className="overflow-hidden rounded-sm border border-surface-light">
        <button
          className="flex text-white cursor-pointer items-center w-full justify-between p-4 bg-surface-dark"
          onClick={() => {
            setSubcategoryOpen(!subcategoryOpen);
          }}
        >
          <span className="text-sm font-medium"> Subcategorías </span>
          <Icon
            className={clsx("transition-all", subcategoryOpen && "rotate-180")}
            name={"ChevronDown"}
          />
        </button>

        {subcategoryOpen && (
          <div className="border-t border-surface-light bg-surface-dark">
            {selectedSubcategories?.length &&
            selectedSubcategories.length > 0 ? (
              <header className="flex items-center justify-end pt-2 px-4 p-2">
                <button
                  type="button"
                  className="text-sm underline underline-offset-4 text-white"
                  onClick={() => handleReset("subcategory")}
                >
                  Reiniciar
                </button>
              </header>
            ) : null}

            <ul className="space-y-1 p-4">
              {selectedCategories?.map((category) => {
                return category.subcategories.map((subcategory) => {
                  return (
                    <li key={subcategory.name}>
                      <label
                        htmlFor={subcategory.slug}
                        className="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id={subcategory.slug}
                          onChange={handleSubcategoryChange}
                          value={subcategory.name}
                          checked={selectedSubcategories?.some(
                            (e) => e.name === subcategory.name
                          )}
                          className="size-5 rounded-sm border-gray-300 dark:border-gray-600 dark:bg-surface-dark dark:focus:ring-offset-gray-900"
                        />

                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          {subcategory.name}
                        </span>
                      </label>
                    </li>
                  );
                });
              })}
            </ul>
          </div>
        )}
      </div>
      {/* LINEA */}
      <div className="overflow-hidden rounded-sm border border-surface-light">
        <button
          className="flex text-white cursor-pointer items-center w-full justify-between p-4 bg-surface-dark"
          onClick={() => {
            setCollectionOpen(!collectionOpen);
          }}
        >
          <span className="text-sm font-medium"> Líneas </span>

          <Icon
            className={clsx("transition-all", collectionOpen && "rotate-180")}
            name={"ChevronDown"}
          />
        </button>

        {collectionOpen && (
          <div className="border-t border-surface-light bg-surface-dark">
            {selectedCollections?.length && selectedCollections.length > 0 ? (
              <header className="flex items-center justify-end pt-2 px-4">
                <button
                  type="button"
                  className="text-sm underline underline-offset-4 text-white"
                  onClick={() => handleReset("collection")}
                >
                  Reiniciar
                </button>
              </header>
            ) : null}

            <ul className="space-y-1 p-4">
              {selectedCategories?.map((category) => {
                return category.subcategories.map((subcategory) => {
                  if (selectedSubcategories?.includes(subcategory)) {
                    return subcategory.collections.map((collection) => {
                      return (
                        <li key={collection.name}>
                          <label
                            htmlFor={collection.slug}
                            className="inline-flex items-center gap-2"
                          >
                            <input
                              onChange={handleCollectionChange}
                              type="checkbox"
                              id={collection.slug}
                              value={collection.name}
                              checked={selectedCollections?.some(
                                (e) => e.name === collection.name
                              )}
                              className="size-5 rounded-sm border-gray-300 dark:border-gray-600 dark:bg-surface-dark dark:focus:ring-offset-gray-900"
                            />

                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                              {collection.name}
                            </span>
                          </label>
                        </li>
                      );
                    });
                  }
                });
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
