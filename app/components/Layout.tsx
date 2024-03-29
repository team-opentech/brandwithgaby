import type {
  CartApiQueryFragment,
  FooterQuery,
  HeaderQuery,
} from 'storefrontapi.generated';
import {Aside} from '~/components/Aside';
import {Footer} from '../../stories/components/Footer';
import {Navbar} from '../../stories/components/Navbar';

export type LayoutProps = {
  cart: Promise<CartApiQueryFragment | null>;
  children?: React.ReactNode;
  footer: Promise<FooterQuery>;
  header: HeaderQuery;
  isLoggedIn: Promise<boolean>;
};

export function Layout({children = null, footer, header}: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="w-[100%]">{children}</main>
      <Footer />
    </>
  );
}

// function CartAside({cart}: {cart: LayoutProps['cart']}) {
//   return (
//     <Aside id="cart-aside" heading="CART">
//       <Suspense fallback={<p>Loading cart ...</p>}>
//         <Await resolve={cart}>
//           {(cart) => {
//             return <CartMain cart={cart} layout="aside" />;
//           }}
//         </Await>
//       </Suspense>
//     </Aside>
//   );
// }
