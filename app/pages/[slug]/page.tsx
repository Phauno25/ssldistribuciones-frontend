import ComponentLoader from "@/components/ComponentLoader";
import { HeroPage } from "@/components/layout";
import { getPageBySlug } from "@/modules/pages/services/getPageBySlug";
import { PageProps } from "@/types/types";

const Page = async ({ params }: PageProps) => {
  const pageContent = await getPageBySlug(params.slug);
  return (
    pageContent && (
      <>
        <HeroPage
          title={pageContent[0].name}
          description={pageContent[0].description}
        />
        <div className="lg:p-20 md:p-12 p-6 ">
          <ComponentLoader data={pageContent[0].body} />
        </div>
      </>
    )
  );
};

export default Page;
