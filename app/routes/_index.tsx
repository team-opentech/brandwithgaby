import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {Suspense, useState} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import type {
  FeaturedCollectionFragment,
  RecommendedProductsQuery,
  ProductQuery,
} from 'storefrontapi.generated';
import {BannerSlider} from '../../stories/components/BannerSlider';
import {Marquesina} from '../../stories/components/Marquesina';
import {ServiceCard} from '../../stories/components/ServiceCard';
import {InfoCard} from '../../stories/components/InfoCard';
import {ProyectSlider} from '../../stories/components/ProyectSlider';
import {Button} from '../../stories/components/button';
import Text from '../../src/texts/landing.json';

export const meta: MetaFunction = () => {
  return [{title: 'Brand with Gaby'}];
};

export async function loader({context}: LoaderFunctionArgs) {
  const {storefront} = context;
  const {products} = await storefront.query(PRODUCT_QUERY);
  // const featuredCollection = collections.nodes[0];
  // const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  // return defer({featuredCollection, recommendedProducts});
  return defer({products});
}

export default function Homepage() {
  const [show, setShow] = useState(false);
  const data = useLoaderData<typeof loader>();
  const [projectID, setProjectID] = useState(data.products.nodes[0].id);

  return (
    <div className="w-screen h-full p-0 overscroll-x-none overflow-hidden">
      <BannerSlider
        images={[
          '/banner02.webp',
          '/banner07.webp',
          '/banner03.webp',
          '/banner04.webp',
          '/banner05.webp',
          '/banner06.webp',
          '/banner01.webp',
        ]}
      />
      <div className="flex h-[63px] w-full lg:w-[100svw] bg-black overflow-hidden flex-nowrap">
        <div className="flex flex-row w-full items-center justify-center space-x-[30px] lg:space-x-[80px]">
          <img src="/STAR-v1.svg" alt="no-source" />
          <h6 className={`flex uppercase text-white tracking-[1rem]`}>
            the brand of your dreams
          </h6>
          <img src="/STAR-v1.svg" alt="no-source" />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <img
          src={'/ImagesLanding2.webp'}
          className="object-cover w-full lg:w-[50%]"
          alt="no source"
        />
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-start py-[80px] lg:py-[2vw] px-[6vw]">
          <h1 className="text-black mb-[14vh]">
            Hola,
            <br /> soy Gaby!
          </h1>
          <Button
            styles="bg-black text-white font-normal text-[18px] text-center px-4 py-2 rounded rounded-full h-[42px] max-w-[203px] border border-solid border-black mb-[12vh] lowercase"
            label="@brandwithgaby"
          />
          <h4 className="text-black max-w-[331px] lg:max-w-[510px]">
            Todos sabemos que empezar un nuevo proyecto no es fácil. No solo
            significa tener un dream de emprender con algo, sino también
            ejecutarlo. A veces, la procrastinación nos gana, pero otras, es
            nuestro budget el que nos frena.
            <br /> <br />
            Por eso, he creado estos dos packages que son ideales para ti, para
            darte ese boost y empezar a darle vida a tu sueño.
          </h4>
        </div>
      </div>
      <div className="flex bg-[#EBECE7] w-full h-[1650px] space-y-[80px] flex-col justify-center items-center">
        <div className="flex flex-col space-y-[30px] justify-center items-center">
          <h2 className="max-w-[342px] lg:max-w-none text-center mt-[50px]">
            Create your dream brand with me!
          </h2>
          <p className="max-w-[342px] lg:max-w-none leading-[20px] lg:leading-[1.5svw] text-center">
            Si estás listx para dejar atrás las excusas y comenzar con tu marca,
            esto te va a interesar.
          </p>
        </div>
        <div className="lg:hidden w-full flex flex-row justify-center items-center space-x-[40px] py-[30px]">
          {data.products.nodes.map((p: any) => {
            return (
              <Button
                key={p.id}
                styles={`${
                  p.id === projectID
                    ? 'bg-black text-white'
                    : 'bg-none text-black'
                } p-2 rounded rounded-full h-10 w-full max-w-[173px] lg:max-w-[203px] border border-solid border-black`}
                label={p.handle}
                onClick={() => {
                  setShow(true);
                  setProjectID(p.id);
                }}
              />
            );
          })}
          {/* <Button
            styles={`${
              !show ? 'bg-none text-black' : 'bg-black text-white'
            } p-2 rounded rounded-full h-10 w-full max-w-[173px] lg:max-w-[203px] border border-solid border-black`}
            label="Kickstar"
            onClick={() => setShow(true)}
          />
          <Button
            styles={`${
              show ? 'bg-none text-black' : 'bg-black text-white'
            } p-2 rounded rounded-full h-10 w-full max-w-[173px] lg:max-w-[203px] border border-solid border-black`}
            label="Launchboost"
            onClick={() => setShow(false)}
          /> */}
        </div>
        <div className="h-full flex lg:hidden flex-row justify-center">
          {data.products.nodes.map((p: any) => {
            const descriptionHtml = p.descriptionHtml;
            const parts = descriptionHtml.split('---split---');
            const servicesList = parts[0];
            const includes = parts[1];
            return (
              <div
                key={p.id}
                className={`${p.id === projectID ? 'flex' : 'hidden'}`}
              >
                <ServiceCard
                  key={p.id}
                  title={p.handle}
                  subtitle={p.subtitle.value}
                  price={p.priceRange.maxVariantPrice.amount}
                  time={p.date_delivery.value}
                  servicesList={servicesList}
                  dues={p.price_text.value}
                  include={includes}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-[90px] max-h-[1298px] h-full hidden lg:flex flex-row space-x-[80px] justify-center items-center">
          {data.products.nodes.map((p: any) => {
            const descriptionHtml = p.descriptionHtml;
            const parts = descriptionHtml.split('---split---');
            const servicesList = parts[0];
            const includes = parts[1];
            return (
              <ServiceCard
                key={p.id}
                title={p.handle}
                subtitle={p.subtitle.value}
                price={p.priceRange.maxVariantPrice.amount}
                time={p.date_delivery.value}
                servicesList={servicesList}
                dues={p.price_text.value}
                include={includes}
              />
            );
          })}
        </div>
      </div>
      <Marquesina text={Text.marquee.titles} />
      <div className="flex bg-white w-full h-full lg:h-[950px] space-y-[80px] flex-col justify-center items-center px-[5%] lg:px-0">
        <div className="flex flex-col space-y-[30px] mt-[90px] lg:mt-[140px] justify-center items-center">
          <h1 className="max-w-[276px] lg:max-w-none text-center">
            Cómo saber si es para tí.
          </h1>
          <h4 className="max-w-[359px] lg:max-w-none leading-[20px] lg:leading-[1.5svw] text-center">
            No es para todos, lo entendemos. La idea es que empieces tu marca
            con una base sólida y hagas crecer esos sueños.
            <br />
            Te dejo una lista de los sí y de los no para saber si estos
            productos son para tí
          </h4>
        </div>
        <div className="h-full flex flex-col lg:flex-row lg:space-x-[80px] justify-center items-center">
          <InfoCard
            title="Este paquete SI es para ti, sí: "
            description={[
              'Si sueñas con una marca que refleje tu grandeza y brille con autenticidad.',
              'Perfecto para quienes comienzan su marca personal o para small brands que quieren establecer una identidad sólida desde el principio, creando la base para un crecimiento continuo.',
              'Si estás en la búsqueda de un precio accesible sin sacrificar la calidad del diseño, este paquete ofrece un equilibrio perfecto entre asequibilidad y excelencia creativa.',
            ]}
          />
          <InfoCard
            title="Este paquete NO es para ti, si: "
            left={false}
            description={[
              'Te gusta vivir en la procrastinación y no te importa la imagen que proyecta tu marca y cómo te ven tus clientes.',
              'Si no estás dispuesto a invertir en el desarrollo y fortalecimiento de tu marca.',
              'Si tu proyecto es más grande y necesita estrategias de branding más avanzadas y personalizadas. Te sugerimos explorar nuestras soluciones especializadas con nuestro Big Boss en arquetipo.us',
            ]}
          />
        </div>
      </div>
      <div className="flex bg-white w-full h-full py-[70px] space-y-[10px] lg:space-y-[15px] flex-col justify-center items-center">
        <img src="/Q&A-logo.svg" alt="no-source" />
        <a href="/faq/">
          <p className="underline cursor-pointer text-center text-[26px] leading-[25px] tracking-wider font-normal font-BricolageGrotesque">
            Preguntas frecuentes
          </p>
        </a>
      </div>
      <div className="flex h-[63px] w-full lg:w-[100svw] bg-black overflow-hidden flex-nowrap">
        <div className="flex flex-row w-full items-center justify-center space-x-[30px] lg:space-x-[80px]">
          <img src="/STAR-v1.svg" alt="no-source" />
          <p
            className={`flex text-[12px] lg:text-[16px]   uppercase text-white`}
          >
            the brand of your dreams
          </p>
          <img src="/STAR-v1.svg" alt="no-source" />
        </div>
      </div>
      <div className="flex bg-[#EBECE7] w-full min-h-[560px] lg:min-h-[810px] space-y-[120px] flex-col justify-center items-center">
        <h2 className="hidden lg:flex">
          They said yes to doing their brands with me!
        </h2>
        <ProyectSlider
          images={[
            '/portfolio01.webp',
            '/portfolio02.webp',
            '/portfolio03.webp',
            '/portfolio04.webp',
          ]}
        />
      </div>
    </div>
  );
}

function FeaturedCollection({
  collection,
}: {
  collection: FeaturedCollectionFragment;
}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}

function RecommendedProducts({
  products,
}: {
  products: Promise<RecommendedProductsQuery>;
}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="recommended-products-grid">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="recommended-product"
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    sizes="(min-width: 45em) 20vw, 50vw"
                  />
                  <h4>{product.title}</h4>
                  <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;

const PRODUCT_QUERY = `#graphql
query PRODUCT_QUERY {
  products(first: 10) {
    nodes {
      id
      handle
      description
      descriptionHtml
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      price_text:metafield(key: "price_text", namespace: "custom") {
        id
        value
        namespace
        key
      }
      
			date_delivery:metafield(key: "date_delivery", namespace: "custom") {
        id
        value
        namespace
        key
      }
      subtitle:metafield(key: "subtitle", namespace: "custom") {
        id
        value
        namespace
        key
      }
    }
  }
}
` as const;
