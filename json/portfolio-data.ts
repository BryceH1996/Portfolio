export const portfolioData = [
  {
    project: "Hupu",
    slug: "hupu",
    websiteURL: 'https://hupu.co.za/',
    techStack: ['Vue.JS', 'C#', 'HomeBrew CMS'],
    favourited: true,
    shortDescription: "Hupu, developed by Nologo, delivers groceries directly from farms to consumers. When I joined Nologo, Hupu was finishing its testing phase and quickly became a key project.\n\nThe platform's growth accelerated during the COVID-19 pandemic, which heightened demand for direct-to-consumer grocery delivery due to lockdowns and limited shopping options.",
    longDescription: "From 2020 to 2021, onTap partnered with our agency to elevate its digital presence. We modernized their platform with Vue Storefront and integrated it with Nologo's 'Advance' backend system in C#.\n\nOur aim was to boost user engagement and streamline backend operations to align with onTap's business goals.",
    mainImage: '/hupu-squared.jpg',
    mainImageAlt: 'Hupu banner image',
    topBanner: '/hupu/hupu-banner.jpg',
    roleOnProject: 'Frontend Developer',
    problemContent: [
      "In the initial phase of the Hupu project, we aimed to integrate the system with our in-house 'Advance' platform, which managed the frontend data and content delivery. This integration was essential for synchronizing updates and ensuring efficient data handling. We focused on developing custom APIs and aligning data schemas to ensure compatibility between Hupu and Advance.\n\nBy leveraging Advance's robust capabilities, we sought to enhance Hupu's performance and deliver a cohesive user experience, aligning with our project goals and ensuring a successful platform launch.",
      "As the site continued to grow, we identified the need to introduce a recipe booklet to showcase our favorite recipes. This feature was not part of the original specifications for the 'Advance' system.\n\nTo address this, I worked in close collaboration with the backend developers to enhance Advance's functionality. This involved extending its capabilities to support the new requirements, including integrating additional data management features and adjusting the system's architecture. By working together, we ensured that Advance could effectively handle the new recipe booklet and provide a seamless user experience. This expansion was crucial for aligning the system with the evolving needs of the website.",
      "As the site expanded, we needed to implement functionality for users to sign up and log in using their Google or Facebook accounts. This necessitated significant modifications to the original system while preserving existing user data.\n\nIntegrating Google and Facebook login features proved to be more complex than anticipated, involving extensive testing and iterative hotfixes to achieve full functionality. The process required careful adjustments to ensure seamless integration and a smooth user experience across all authentication methods."
    ],
    problemImage: [
      '/hupu/hupu-problem1.png', 
      '/hupu/hupu-problem2.png',
      '/hupu/hupu-problem3.png',
    ],
  },
  {
    project: "onTap",
    slug: "ontap",
    websiteURL: 'https://www.ontap.co.za/',
    techStack: ['Vue.JS', 'C# backend', 'Vue Storefront'],
    favourited: true,
    shortDescription: "From 2020 to 2021, onTap partnered with our agency to elevate its digital presence. We modernized their platform with Vue Storefront and integrated it with Nologo's 'Advance' backend system in C#.\n\nOur aim was to boost user engagement and streamline backend operations to align with onTap's business goals.",
    longDescription: "From 2020 to 2021, our agency partnered with onTap to revamp their digital platform. We modernized the frontend using Vue Storefront, which provided a sleek, responsive design that enhanced user engagement. This upgrade ensured a more intuitive and visually appealing interface for onTap's customers.\n\nSimultaneously, we integrated Nologo's 'Advance' backend system, built in C#, to optimize and streamline backend operations. This integration offered a scalable, efficient infrastructure, improving data management and system performance.\n\nThe combined frontend and backend enhancements aimed to align with onTap's business goals by boosting user interaction and operational efficiency, resulting in a more effective digital experience.",
    mainImage: '/ontap-squared.jpg',
    mainImageAlt: 'onTap banner image',
    topBanner: '/ontap/ontap-top-banner.png',
    roleOnProject: 'Frontend Developer',
    problemContent: [
      'Implemented a custom filtering mechanism for a Vue Storefront application to enhance data management and presentation. This solution facilitates the handling of data received from the Advance endpoint API, ensuring that all relevant data is processed on the frontend.\n\nThe filter allows for dynamic adjustment of data visibility, enabling precise control over which information is displayed to users. This approach not only optimizes the user experience by presenting relevant content but also improves the efficiency of data handling and display within the application.',
      "At the outset, Vue Storefront's default setup supported only a single layer of navigation. When onTap proposed a requirement for multi-level navigation to enhance their user interface, I undertook the challenge of customizing the platform.\n\nI achieved this by overriding core components and extending the navigation capabilities to accommodate multiple hierarchical levels. This modification allowed onTap to implement a more complex and user-friendly navigation structure, tailored to their specific needs.\n\nBy extending the default navigation functionality, I ensured that the application could handle intricate navigation schemes, thereby improving the overall user experience and meeting onTap's requirements for a more sophisticated and flexible navigation system.",
    ],
    problemImage: [
      '/ontap/ontap-first-task.png', 
      '/ontap/ontap-navigation.mp4',
    ],
  },
  {
    project: "Mobile Hollywood Bets",
    slug: "hollywood-bets",
    websiteURL: 'https://m.hollywoodbets.net/',
    techStack: ['Angular', 'C# backend'],
    favourited: false,
    shortDescription: "Hollywoodbets SA delivers top-tier sports and horse racing betting in South Africa. We offer a diverse range of options, including local and international horse racing, extensive sports markets, and the Lucky Numbers international lottery.\n\nOur platform features live betting through Live In-Play and Betgames Africa. Established as Winning Form in 1986, we expanded to include over 80 branches across six provinces and various online and mobile platforms. Enjoy exceptional service and convenience with Hollywoodbets.",
    longDescription: "Hollywoodbets SA provides a top-tier sports and horse racing betting experience in South Africa. We offer a wide range of betting options, including local and international horse racing, diverse sports markets, and the Lucky Numbers international lottery. Our platform features live betting with Live In-Play and Betgames Africa.\n\nStarting as Winning Form in 1986, we evolved from a publishing company to a major betting operator, opening our first Durban branch in 2000 and launching our online platform in 2006. Now, with over 80 branches across six provinces and multiple betting platforms, including mobile and feature phone apps, Hollywoodbets is committed to delivering excellent service and convenience.",
    mainImage: '/h-bets-squared.png',
    mainImageAlt: 'Hollywood banner image',
    topBanner: '/h-bets/h-bets-banner.jpg',
    roleOnProject: 'Frontend Developer',
    problemContent: [
      "Working as a frontend developer on the mobile version of Hollywoodbets SA was both challenging and rewarding. My goal was to help create a seamless mobile betting experience for our users to better improve the existing mobile betting platform, reflecting the excellence that Hollywoodbets is known for in the sports and horse racing betting scene.\n\nThe project began with a deep dive into our existing desktop platform. I teamed up with UX/UI designers to reimagine the website's features for mobile screens, ensuring that everything from horse racing to sports markets and the Lucky Numbers lottery looked great and worked smoothly on smartphones.",
      "One of the big challenges was adapting all the features. It meant I had to focus on making the interface easy to use, with touch-friendly controls and quick load times.\n\nTesting was a crucial part of the process. We gathered feedback from real users and made adjustments to fix bugs and improve usability. I worked closely with backend developers to ensure that our mobile platform synced perfectly with our existing systems, keeping everything running smoothly.",
    ],
    problemImage: [

    ],
  }
]