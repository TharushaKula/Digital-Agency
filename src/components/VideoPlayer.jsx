import Video from "../assets/video.mp4"

export default function VideoPlayer() {
  return (
    <div className="box flex justify-center pt-10">
      <video width="1400" controls autoplay loop muted>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
