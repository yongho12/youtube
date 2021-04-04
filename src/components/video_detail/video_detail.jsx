import React from 'react';

const VideoDetail = ({video}) => (
        <section className={StyleSheet.detial}>
            <iframe 
                className={StyleSheet.video}
                type="text/html" 
                width="100%" 
                height="500px"
                src={ `https://www.youtube.com/embed/${video.id}`}
                frameborder="0" 
                allowfullscreen>
            </iframe>
        </section>
    );

export default VideoDetail; 