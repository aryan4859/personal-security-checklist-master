import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const ghLink = '';
  const licenseLink = ' ';
  const authorLink = 'https://aryan4.com.np';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p>Licensed under <a href={licenseLink} class="link link-primary">MIT</a> -
      © <a href={authorLink} class="link link-primary">PGSCYBSEC</a> 2024 - 
      View source on <a href={ghLink} class="link link-primary">GitHub</a></p>
    </aside>
  </footer>
  );
});
