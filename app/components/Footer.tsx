const Footer = () => {
  return (
    <footer className="absolute w-full bg-techGrey py-4 pt-16 text-center text-white">
      <p className="text-sm">
        © {new Date().getFullYear()} Matthieu Mordrel. All rights reserved.
      </p>
      {/* <p className="mt-2 text-xs">
        Discover us on:
        <a
          href="https://twitter.com"
          className="mx-2 text-techBlue hover:text-white"
        >
          Twitter
        </a>
        |
        <a
          href="https://facebook.com"
          className="mx-2 text-techBlue hover:text-white"
        >
          Facebook
        </a>
      </p> */}
    </footer>
  )
}

export default Footer
