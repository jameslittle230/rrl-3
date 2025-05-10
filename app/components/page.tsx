"use client";
import { Link, LinkConfig } from "@/components/Link";
import Alert from "@/components/Alert";
import Address from "../../components/Address";
import Resource from "../../components/Resource";
import { buttonStyles } from "@/components/Button";

export default function Page() {
  return (
    <>
      <Link href="#">This is a link</Link>
      <LinkConfig uses={[buttonStyles()]}>
        <Link href="#">This is a button</Link>
      </LinkConfig>
      <Link href="#" className={buttonStyles()}>This is a button</Link>
      <Alert
        type="success"
        actions={<Link href="#">Contact us today!</Link>}
      >
        <p>Cillum excepteur nisi laborum voluptate cillum.</p>
      </Alert>
      <Alert
        type="warning"
        actions={
          <>
            <Link href="#">Contact us today!</Link>
            <Link href="#">Contact us today!</Link>
          </>
        }
      >
        <p>
          Occaecat voluptate et aute deserunt qui est voluptate esse sunt non
          aliquip. Ipsum Lorem ut fugiat ipsum excepteur eiusmod laborum
          pariatur officia <Link href="#">laborum enim ex aliqua laborum</Link>
          {" "}
          proident. Nisi ex voluptate aliqua nulla ex elit tempor. Aliquip
          labore dolor anim est irure elit dolor sint cillum velit nulla quis id
          cillum. Veniam velit consequat ullamco laborum enim velit sint aliqua
          irure laborum reprehenderit laborum veniam deserunt labore.
        </p>
        <p>
          Do esse ex pariatur amet minim ullamco Lorem incididunt officia do.
        </p>
      </Alert>
      <Address />
      <Address dataset="covering" />
      <Resource
        url="#"
        name="Foo Resource"
        subtitle="Exercitation qui incididunt duis nulla nisi enim id."
      >
      </Resource>
    </>
  );
}
