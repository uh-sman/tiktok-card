import React from "react";

const VideoComponent = () => {
  const data = [
    {
      id: "1",
      title: "Big Buck Bunny",
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "Vlc Media Player",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "2",
      title: "The first Blender Open Movie from 2006",
      thumbnailUrl:
        "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
      duration: "12:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "Blender Inc.",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description:
        "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "3",
      title: "For Bigger Blazes",
      thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description:
        "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "4",
      title: "For Bigger Escape",
      thumbnailUrl:
        "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      description:
        " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      subscriber: "25254545 Subscribers",
      isLive: false,
    },
    {
      id: "5",
      title: "Big Buck Bunny",
      thumbnailUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "Vlc Media Player",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "6",
      title: "For Bigger Blazes",
      thumbnailUrl: "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description:
        "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      subscriber: "25254545 Subscribers",
      isLive: false,
    },
    {
      id: "7",
      title: "For Bigger Escape",
      thumbnailUrl:
        "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
      duration: "8:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "T-Series Regional",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      description:
        " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      subscriber: "25254545 Subscribers",
      isLive: true,
    },
    {
      id: "8",
      title: "The first Blender Open Movie from 2006",
      thumbnailUrl:
        "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
      duration: "12:18",
      uploadTime: "May 9, 2011",
      views: "24,969,123",
      author: "Blender Inc.",
      videoUrl:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      description:
        "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
      subscriber: "25254545 Subscribers",
      isLive: false,
    },
  ];

  const handleTrim = (value: string): string => {
    if (value.length > 1000) {
      return value.slice(0, 3) + "k";
    } else {
      return value;
    }
  };
  
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-lg">
        {data.map((item) => (
          <div key={item.id} className="p-4">
            <h2 className="text-lg lg:text-xl font-bold mb-2">{item.title}</h2>
            <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <video
                src={item?.videoUrl}
                autoPlay
                loop
                muted
                className="w-full h-svh object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-end pr-2">
                {/* Custom play button */}
                <div className="flex flex-col items-center gap-4">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.89346 2.35248C3.49195 2.35248 2.35248 3.49359 2.35248 4.90532C2.35248 6.38164 3.20954 7.9168 4.37255 9.33522C5.39396 10.581 6.59464 11.6702 7.50002 12.4778C8.4054 11.6702 9.60608 10.581 10.6275 9.33522C11.7905 7.9168 12.6476 6.38164 12.6476 4.90532C12.6476 3.49359 11.5081 2.35248 10.1066 2.35248C9.27059 2.35248 8.81894 2.64323 8.5397 2.95843C8.27877 3.25295 8.14623 3.58566 8.02501 3.88993C8.00391 3.9429 7.98315 3.99501 7.96211 4.04591C7.88482 4.23294 7.7024 4.35494 7.50002 4.35494C7.29765 4.35494 7.11523 4.23295 7.03793 4.04592C7.01689 3.99501 6.99612 3.94289 6.97502 3.8899C6.8538 3.58564 6.72126 3.25294 6.46034 2.95843C6.18109 2.64323 5.72945 2.35248 4.89346 2.35248ZM1.35248 4.90532C1.35248 2.94498 2.936 1.35248 4.89346 1.35248C6.0084 1.35248 6.73504 1.76049 7.20884 2.2953C7.32062 2.42147 7.41686 2.55382 7.50002 2.68545C7.58318 2.55382 7.67941 2.42147 7.79119 2.2953C8.265 1.76049 8.99164 1.35248 10.1066 1.35248C12.064 1.35248 13.6476 2.94498 13.6476 4.90532C13.6476 6.74041 12.6013 8.50508 11.4008 9.96927C10.2636 11.3562 8.92194 12.5508 8.00601 13.3664C7.94645 13.4194 7.88869 13.4709 7.83291 13.5206C7.64324 13.6899 7.3568 13.6899 7.16713 13.5206C7.11135 13.4709 7.05359 13.4194 6.99403 13.3664C6.0781 12.5508 4.73641 11.3562 3.59926 9.96927C2.39872 8.50508 1.35248 6.74041 1.35248 4.90532Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                    />
                  </svg>

                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    className="h-6 w-6 -rotate-45"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>{handleTrim(item.views)}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-2">
              <div>
                <p className="text-xs lg:text-sm text-gray-500">
                  {item.uploadTime}
                </p>
                <p className="text-xs lg:text-sm text-gray-500">
                  {item.views} views
                </p>
              </div>
              <p className="text-xs lg:text-sm text-gray-600 mt-2 lg:mt-0">
                {item.author}
              </p>
            </div>
            <p className="text-xs lg:text-sm text-gray-700 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoComponent;
