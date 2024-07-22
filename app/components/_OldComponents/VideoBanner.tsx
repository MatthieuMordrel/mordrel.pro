export default function Aboutvideo() {
  return (
    <video autoPlay loop muted disablePictureInPicture className="h-40 w-full object-cover">
      <source src="/About.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
