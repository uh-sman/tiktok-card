import React from 'react'

const VideoComponent = () => {
    const data = [
        {
              "id": "1",
          "title": "Big Buck Bunny",
          "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
          "duration": "8:18",
          "uploadTime": "May 9, 2011",
          "views": "24,969,123",
          "author": "Vlc Media Player",
          "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
          "subscriber": "25254545 Subscribers",
          "isLive": true
      },
      {
            "id": "2",
          "title": "The first Blender Open Movie from 2006",
          "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
          "duration": "12:18",
          "uploadTime": "May 9, 2011",
          "views": "24,969,123",
          "author": "Blender Inc.",
          "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
          "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
          "subscriber": "25254545 Subscribers",
          "isLive": true
      },
      {
            "id": "3",
            "title": "For Bigger Blazes",
            "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "T-Series Regional",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
          "subscriber": "25254545 Subscribers",
          "isLive": true
      },
      {
            "id": "4",
            "title": "For Bigger Escape",
            "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "T-Series Regional",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
            "subscriber": "25254545 Subscribers",
            "isLive": false
        },
        {
              "id": "5",
              "title": "Big Buck Bunny",
              "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
              "duration": "8:18",
              "uploadTime": "May 9, 2011",
              "views": "24,969,123",
              "author": "Vlc Media Player",
              "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
              "subscriber": "25254545 Subscribers",
              "isLive": true
          },
          {
          "id": "6",
          "title": "For Bigger Blazes",
          "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
          "duration": "8:18",
          "uploadTime": "May 9, 2011",
          "views": "24,969,123",
          "author": "T-Series Regional",
          "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
          "subscriber": "25254545 Subscribers",
          "isLive": false
      },
      {
            "id": "7",
            "title": "For Bigger Escape",
            "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
            "duration": "8:18",
            "uploadTime": "May 9, 2011",
            "views": "24,969,123",
            "author": "T-Series Regional",
            "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
            "subscriber": "25254545 Subscribers",
            "isLive": true
        },
        {
              "id": "8",
              "title": "The first Blender Open Movie from 2006",
              "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
              "duration": "12:18",
              "uploadTime": "May 9, 2011",
              "views": "24,969,123",
              "author": "Blender Inc.",
              "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
              "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
              "subscriber": "25254545 Subscribers",
              "isLive":false
      }
      ]
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
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Custom play button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 lg:h-16 w-12 lg:w-16 text-white opacity-75"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 18a1 1 0 0 1-.61-.21l-7-5A1 1 0 0 1 2 11V9a1 1 0 0 1 .39-.79l7-5A1 1 0 0 1 11 4v2.11l5.7-4.07A1 1 0 0 1 18 3v14a1 1 0 0 1-1.7.7L11 13.89V16a1 1 0 0 1-.4.8A1 1 0 0 1 10 18zM4 10.14v-.28L10 6v8l-6-4.14z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-2">
          <div>
            <p className="text-xs lg:text-sm text-gray-500">{item.uploadTime}</p>
            <p className="text-xs lg:text-sm text-gray-500">{item.views} views</p>
          </div>
          <p className="text-xs lg:text-sm text-gray-600 mt-2 lg:mt-0">{item.author}</p>
        </div>
        <p className="text-xs lg:text-sm text-gray-700 mt-2">{item.description}</p>
      </div>
    ))}
  </div>
</div>
  )
}

export default VideoComponent
