import { useEffect, useRef } from "react";


export default function VideoPlayer(){
    const cloudinaryRef = useRef();
    const videoRef = useRef();
    useEffect(() => {
        if (cloudinaryRef.current) return;
        window.cloudinary = window.cloudinary;
        cloudinaryRef.current.VideoPlayer(videoRef.current, {
            cloud_name: 'colbycloud-examples'
        })
    }, []);

    return(
        <video
        ref={videoRef}
        data-cld-public-id="videos/waterfall"
        />
    );

}