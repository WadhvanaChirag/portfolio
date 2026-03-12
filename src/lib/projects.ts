import fs from 'fs';
import path from 'path';

export interface ProjectAssetConfig {
  mobile: string[];
  tablet: string[];
  laptop: string[];
}

export interface ProjectAssetConfig {
  mobile: string[];
  tablet: string[];
  laptop: string[];
}

export interface ProjectDetailSection {
  title?: string;
  items: string[];
}

export interface Project {
  name: string;
  folderName?: string;
  desc: string;
  details?: ProjectDetailSection[];
  tags: string[];
  logoUrl: string | null;
  assets: ProjectAssetConfig;
  hasViewableAssets: boolean;
}

const rawProjects = [
  {
    name: "iPrinter App",
    folderName: "iPrinter",
    desc: "A handy cross-platform app for iOS and macOS that lets users scan documents and print files easily.",
    details: [
      {
        title: "iOS Version Features",
        items: [
          "Built-in scanner that automatically crops and fixes the perspective of documents.",
          "Prints PDFs, Word files, and photos directly from the app.",
          "Easy connection to any AirPrint-enabled printer."
        ]
      },
      {
        title: "macOS Version Features",
        items: [
          "Desktop version designed for dragging and dropping files to print quickly.",
          "Works smoothly with both local and network-attached office printers.",
          "Handles large, multi-page documents without slowing down."
        ]
      },
      {
        title: "Premium Features & Subscriptions",
        items: [
          "Added auto-renewing subscriptions to unlock pro features.",
          "Ensured purchases stay synced and secure across both iPhone and Mac."
        ]
      },
      {
        title: "Technical Setup",
        items: [
          "Used a single Flutter codebase to share the same logic across mobile and desktop.",
          "Used platform-specific code to talk directly to the native iOS and macOS printing tools."
        ]
      }
    ],
    tags: ["Flutter", "iOS", "macOS"]
  },
  {
    name: "Dorm Hub",
    desc: "Refined the iOS experience and managed the full App Store launch for a Flutter-based community housing app.",
    details: [
      {
        title: "iOS Setup & Stability",
        items: [
          "Set up and optimized iOS dependencies to make sure the app builds smoothly without errors.",
          "Fixed compatibility issues between different Flutter packages for the iOS version."
        ]
      },
      {
        title: "Push Notifications",
        items: [
          "Set up Firebase and Apple Push Notification (APNs) certificates to enable real-time alerts.",
          "Ensured notifications work correctly within the iOS environment."
        ]
      },
      {
        title: "App Store Publishing",
        items: [
          "Handled the entire publishing process from start to finish using App Store Connect.",
          "Updated app info and build settings to pass Apple’s strict review guidelines on the first try."
        ]
      }
    ],
    tags: ["Flutter", "iOS"]
  },
  {
    name: "Dairy Management System",
    desc: "A dual-app system where customers manage milk subscriptions and delivery staff track orders, powered by a custom API and Firebase.",
    details: [
      {
        title: "Customer App Features",
        items: [
          "Developed the interface for users to manage daily milk subscriptions and one-time orders.",
          "Built a dashboard to track delivery status, invoice history, and pending payments.",
          "Created a digital log to keep track of milk bottle returns."
        ]
      },
      {
        title: "Delivery App Features",
        items: [
          "Built a real-time list for drivers showing assigned deliveries, customer locations, and subscription details.",
          "Added tools for drivers to update order status and manage inventory while on the road."
        ]
      },
      {
        title: "Technical Integration",
        items: [
          "Implemented Firebase Cloud Messaging (FCM) to send instant alerts to drivers when a customer changes their order.",
          "Integrated the Flutter frontend with external REST APIs."
        ]
      }
    ],
    tags: ["Flutter"]
  },
  {
    name: "Cosmetic E-commerce Ecosystem",
    desc: "A complex multi-app system with five user roles, managing everything from bulk wholesale orders to retail sales.",
    details: [
      {
        title: "Multi-App Architecture",
        items: [
          "Developed four separate applications tailored for Admins, Salesmen, Distributors, Retailers, and Wholesalers.",
          "Customized the user experience for each role to handle specific tasks like order approval or stock requests.",
          "Ensured the ecosystem works perfectly on both Android and iOS devices."
        ]
      },
      {
        title: "Order & Inventory Logic",
        items: [
          "Built a full cycle for Order and Purchase Management across all user levels.",
          "Implemented a manual Order Tracker where users can update and follow the status of their shipments.",
          "Integrated Firebase Cloud Messaging for real-time order updates and business alerts."
        ]
      },
      {
        title: "Financial Tracking",
        items: [
          "Developed a 'Passbook-style' Credit and Debit management system to track transaction history and balances.",
          "Created a secure way for wholesalers and retailers to monitor their account standing without needing external banking tools."
        ]
      }, {
        title: "Technical Integration",
        items: [
          "Implemented Firebase Cloud Messaging (FCM) to send instant alerts to drivers when a customer changes their order.",
          "Integrated the Flutter frontend with external REST APIs."
        ]
      }
    ],
    tags: ["Flutter", "Multi-App Systems"]
  },
  {
    name: "Lead Management System",
    folderName: "Lead",
    desc: "A mobile app for professionals working in the medical and hospital field to manage their leads and daily work activities.",
    details: [
      {
        title: "Lead & Activity Management",
        items: [
          "Developed a daily call management system to track and organize professional interactions.",
          "Built a customer management module to store and track lead details and critical information.",
          "Created a 'Tour Plan' feature to help users organize and manage their hospital visit schedules."
        ]
      },
      {
        title: "App Authentication Flow",
        items: [
          "Developed the complete user security flow, including the Login and Change Password features.",
          "Built the 'Forgot Password' functionality to ensure users can always recover their accounts."
        ]
      },
      {
        title: "Application Development",
        items: [
          "Built the mobile frontend using Flutter to ensure a smooth experience on both Android and iOS.",
          "Focused on creating a clean UI that handles detailed medical lead data in a simple, mobile-friendly format."
        ]
      }
    ],
    tags: ["Flutter"]
  },
  {
    name: "Points & Rewards System",
    desc: "A loyalty program app where users earn points and have rewards delivered directly to their doorstep.",
    details: [
      {
        title: "Reward Redemption & Delivery",
        items: [
          "Developed a full address management system so users can save and manage their delivery locations.",
          "Built the logic for reward fulfillment, ensuring items are sent to the user's doorstep.",
          "Integrated a pricing gallery where users can view rewards and their corresponding point values."
        ]
      },
      {
        title: "Scanning & Engagement",
        items: [
          "Built a QR and Barcode scanner into the app to help users easily register products and earn points.",
          "Integrated Firebase Cloud Messaging (FCM) to send real-time updates on delivery status and new rewards."
        ]
      },
      {
        title: "App-Side Development",
        items: [
          "Built the Flutter interface for both Android and iOS, focusing on a clean and easy-to-use reward catalog.",
          "Updated and customized the existing codebase to meet the specific requirements of a new client."
        ]
      }
    ],
    tags: ["Flutter", "Firebase", "QR/Barcode"]
  },
  {
    name: "School Gate Pass",
    desc: "A visitor management app for schools to handle secure check-in and check-out processes for parents and guests.",
    details: [
      {
        title: "Check-in Management",
        items: [
          "Developed different check-in flows for friends, guardians, and parents visiting school staff.",
          "Built a specific feature allowing parents to check in specifically to visit their children."
        ]
      },
      {
        title: "Secure Check-out System",
        items: [
          "Integrated a QR code scanner to allow visitors to check out instantly.",
          "Added an alternative check-out method using a unique check-in number for flexibility."
        ]
      },
      {
        title: "Reporting & History",
        items: [
          "Created a report view where school staff can see all check-in and check-out logs.",
          "Added date filters so users can easily find visitor history for specific days."
        ]
      }
    ],
    tags: ["Flutter", "QR Scanner"]
  },
  {
    name: "Sampark Setu",
    desc: "A school directory app for Ahmedabad that helps users find and filter schools based on their specific needs.",
    details: [
      {
        title: "Advanced Search & Filtering",
        items: [
          "Developed a multi-filter system to browse schools by type (Government or Self-financed) and board (GSEB, CBSE).",
          "Added category filters for Primary, Secondary, and Higher Secondary sections.",
          "Implemented filtering by 'Medium of Instruction' to help parents find the right language for their children."
        ]
      },
      {
        title: "Data & Local Storage",
        items: [
          "Integrated the app with external APIs to fetch and display up-to-date school information.",
          "Built a local storage feature that allows users to save and manage their 'Favorite' schools directly on their device."
        ]
      },
      {
        title: "App Performance",
        items: [
          "Focused on creating a fast, searchable interface to handle a large directory of local school data.",
          "Ensured smooth navigation between school lists and detailed information pages."
        ]
      }
    ],
    tags: ["Flutter", "API Integration", "Local Storage"]
  },
  {
    name: "School TV App",
    folderName: "school",
    desc: "A touch-screen application built for school smart displays to showcase student achievements and campus information.",
    details: [
      {
        title: "Visual Gallery & Results",
        items: [
          "Designed a high-resolution display for school event photos and videos.",
          "Built a clear, readable section to showcase academic results from the last two years."
        ]
      },
      {
        title: "School Identity & Team",
        items: [
          "Created dedicated screens for the school's 'Pillars' (Management Team) and contact details.",
          "Designed a professional layout for the school motto, vision, and mission statements."
        ]
      },
      {
        title: "Touch-Screen Optimization",
        items: [
          "Developed the UI specifically for large-screen TV displays, ensuring buttons and menus are easy to use via touch.",
          "Built a static, high-performance Flutter interface that runs smoothly on smart TV hardware."
        ]
      }
    ],
    tags: ["Flutter", "Large-Screen UI", "Interactive Display"]
  },
  {
    name: "Photo Upload App",
    desc: "An internal tool for school staff to easily upload and manage student and parent photos by class and section.",
    details: [
      {
        title: "Organized Photo Management",
        items: [
          "Built a system to update photos specifically categorized by class and section for students and parents.",
          "Simplified the process for the management department to keep student and staff records up to date."
        ]
      },
      {
        title: "Role-Based Access",
        items: [
          "Implemented secure, role-based login to ensure only authorized management users can upload or change photos.",
          "Ensured the app handles sensitive school data privately and securely."
        ]
      },
      {
        title: "App Functionality",
        items: [
          "Developed a smooth camera and gallery integration for quick photo capturing and uploading.",
          "Built a clean, mobile-friendly interface so staff can manage updates quickly while on campus."
        ]
      }
    ],
    tags: ["Flutter", "Internal Tools", "Security"]
  },
  {
    name: "Tiles & Quartz Catalog",
    desc: "A portfolio app for browsing tiles and quartz products, allowing users to save favorites and request physical samples.",
    details: [
      {
        title: "Product Catalog",
        items: [
          "Developed a visual directory for users to browse high-quality tiles, quartz, and link lock products.",
          "Built a 'Request Sample' feature that allows users to ask for physical product samples directly through the app."
        ]
      },
      {
        title: "User Experience",
        items: [
          "Implemented a Favorites system so users can save and organize products they like for later viewing.",
          "Created a simple User Management system for profile and account handling."
        ]
      }
    ],
    tags: ["Flutter"]
  },
  {
    name: "School Management System",
    desc: "Maintained and updated a large-scale school management app, focusing on performance fixes and adding new modules.",
    details: [
      {
        title: "Maintenance & Optimization",
        items: [
          "Took over an existing codebase to improve the app's overall speed and responsiveness.",
          "Fixed bugs and optimized performance to ensure the app runs smoothly for daily school operations."
        ]
      },
      {
        title: "Feature Development",
        items: [
          "Developed and integrated new features, contributing approximately 10% of the total app functionality.",
          "Enhanced existing modules to make them more user-friendly for staff and parents."
        ]
      },
      {
        title: "Codebase Management",
        items: [
          "Managed complex existing code, ensuring new updates didn't break old features.",
          "Worked on scaling the app to handle a growing number of school users and data."
        ]
      }
    ],
    tags: ["Flutter", "App Maintenance", "Performance"]
  },
  {
    name: "Points & Reward Management",
    desc: "A native Android app that allows users to earn points by scanning products and managing their rewards.",
    details: [
      {
        title: "Scanning & Points Management",
        items: [
          "Developed a built-in QR and Barcode scanner to help users quickly register items and earn points.",
          "Built a clear system for users to track their point balance and view their rewards history."
        ]
      },
      {
        title: "User & Reward Logic",
        items: [
          "Created a user management module to handle profiles and account security.",
          "Developed the reward management section where users can browse and claim available prizes."
        ]
      },
      {
        title: "Native Android Integration",
        items: [
          "Implemented Firebase Push Notifications to send real-time alerts about new rewards or point updates.",
          "Focused on building a responsive native UI that feels fast and smooth on Android devices."
        ]
      }
    ],
    tags: ["Android", "Java", "Firebase"]
  },
  {
    name: "CCTV Shop Management",
    desc: "A native Android app with three distinct interfaces to manage staff tasks, attendance, and client complaints.",
    details: [
      {
        title: "Admin Control Center",
        items: [
          "Developed modules to manage both employees and clients within a single system.",
          "Built a task assignment system to distribute work to staff and an attendance tracker to monitor daily logs.",
          "Created a management dashboard to view and respond to client complaints."
        ]
      },
      {
        title: "Employee Features",
        items: [
          "Built a photo-based attendance system where staff submit a picture to clock in.",
          "Developed a task-viewing interface that allows employees to upload 'success photos' once a job is finished."
        ]
      },
      {
        title: "Client Portal",
        items: [
          "Created a simple interface for clients to submit new service complaints.",
          "Developed a real-time status tracker so clients can check the progress of their service requests."
        ]
      }
    ],
    tags: ["Android", "Java", "Business Tools"]
  },
  {
    name: "Food Package Shop Management",
    desc: "A private B2B system for shops and distributors to manage wholesale food package orders and credit history.",
    details: [
      {
        title: "Closed Ordering System",
        items: [
          "Developed a private ordering workflow specifically for wholesalers and distributors within the company network.",
          "Built a secure system where only authorized shops can place and manage bulk food package orders."
        ]
      },
      {
        title: "Financial Tracking",
        items: [
          "Implemented a 'passbook' style Credit and Debit management system to track transaction history.",
          "Created a simple way for distributors to monitor their account balances and payment records without external banking."
        ]
      },
      {
        title: "User Control",
        items: [
          "Built a user management module to handle specific access levels for shop owners and distributors.",
          "Ensured the app remains a closed environment where account creation is managed internally."
        ]
      }
    ],
    tags: ["Android", "B2B", "Inventory Management"]
  },
  {
    name: "Arch V Money",
    desc: "A specialized B2B recharge platform that allows users to top up SIM cards across any telecom network from a single app.",
    details: [
      {
        title: "All-in-One Recharge System",
        items: [
          "Developed a unified interface to handle SIM card recharges for all major telecommunication companies.",
          "Built a system that eliminates the need for multiple SIM cards or separate apps for different networks.",
          "Focused on creating a reliable transaction flow for high-volume daily recharges."
        ]
      },
      {
        title: "Closed Business Model",
        items: [
          "Designed the app for a closed group of users within a single company to manage their recharge business.",
          "Optimized the app for speed and stability, catering to a professional environment before the rise of modern UPI payments."
        ]
      },
      {
        title: "Android Utility",
        items: [
          "Built a lightweight and fast native Android UI to ensure quick processing of recharge requests.",
          "Integrated secure logging to track recharge history and account balances for every user."
        ]
      }
    ],
    tags: ["Android", "B2B", "Telecom"]
  },
  {
    name: "Android Learner",
    folderName: "androidss",
    desc: "A hands-on educational app that helps beginners learn Android development through real Java and Kotlin examples.",
    details: [
      {
        title: "Learning Content",
        items: [
          "Developed a library of coding examples in both Java and Kotlin with real-time output previews.",
          "Built a structured navigation system to help users find topics like UI design, storage, and networking.",
          "Integrated Firebase Cloud Messaging to send study tips and update alerts to students."
        ]
      },
      {
        title: "Monetization & Store History",
        items: [
          "Successfully managed and maintained the app on the Google Play Store from July 2021 to July 2024.",
          "Integrated Google AdMob to monetize the application through banner and interstitial ads.",
          "Handled regular app updates and store listing optimizations over a three-year period."
        ]
      },
      {
        title: "App-Side Tech",
        items: [
          "Focused on building a fast, native Android UI that makes reading and copying code snippets easy on mobile.",
          "Ensured the app remained compatible with multiple Android versions during its time on the store."
        ]
      }
    ],
    tags: ["Android", "Java/Kotlin", "Education"]
  },
  {
    name: "Let's Learn iOS",
    folderName: "lets learn",
    desc: "An award-winning educational app that teaches the fundamentals of iOS development, recognized for its quality at Tech Expo 2K19.",
    details: [
      {
        title: "Achievement & Recognition",
        items: [
          "Secured 2nd Prize at a University-level Tech Expo (2K19) for app design and functionality.",
          "Presented the application to a panel of judges, highlighting its educational value for new developers."
        ]
      },
      {
        title: "Educational Content",
        items: [
          "Developed a structured learning path for beginners to understand core iOS development concepts.",
          "Built a clean, native iOS interface to provide a smooth reading and learning experience on Apple devices."
        ]
      },
      {
        title: "Native Development",
        items: [
          "Focused on using native iOS tools to ensure high performance and a standard Apple-style UI.",
          "Designed the app to be a lightweight and offline-friendly resource for students."
        ]
      }
    ],
    tags: ["iOS", "Native Dev", "Award Winning"]
  }
];

function getFilesFromDir(dirPath: string): string[] {
  try {
    if (!fs.existsSync(dirPath)) return [];

    // We only want images and videos
    const validExtensions = /\.(png|jpe?g|gif|webp|mp4|webm|mov)$/i;
    return fs.readdirSync(dirPath)
      .filter(file => validExtensions.test(file))
      .sort((a, b) => {
        // Simple numeric sort if files are named 1.png, 2.png, etc.
        const numA = parseInt(a.replace(/\D/g, ''));
        const numB = parseInt(b.replace(/\D/g, ''));
        if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
        return a.localeCompare(b);
      });
  } catch (error) {
    console.warn(`Could not read directory: ${dirPath}`, error);
    return [];
  }
}

export function getProjectsData(): Project[] {
  const publicDir = path.join(process.cwd(), 'public');
  const assetsDir = path.join(publicDir, 'assets');

  return rawProjects.map(project => {
    // If a specific folderName is provided, use it, otherwise fallback to exact project name or normalized.
    // For safety, we allow overriding via the `folderName` property.
    const targetFolder = project.folderName || project.name;
    const projectPath = path.join(assetsDir, targetFolder);

    let logoUrl: string | null = null;
    let mobileAssets: string[] = [];
    let tabletAssets: string[] = [];
    let laptopAssets: string[] = [];

    if (fs.existsSync(projectPath)) {
      // Check for logo
      const potentialLogo = Object.keys(fs.readdirSync(projectPath)
        .reduce((acc, file) => ({ ...acc, [file.toLowerCase()]: file }), {} as Record<string, string>))
        .find(key => key.includes('logo'));

      if (potentialLogo) {
        // Reconstruct exact case
        const exactFileName = fs.readdirSync(projectPath).find(f => f.toLowerCase() === potentialLogo);
        logoUrl = `/assets/${targetFolder}/${exactFileName}`;
      }

      // Check subdirectories
      const getDeviceAssets = (device: string) => {
        const devicePath = path.join(projectPath, device);
        const files = getFilesFromDir(devicePath);
        return files.map(file => `/assets/${targetFolder}/${device}/${file}`);
      };

      mobileAssets = getDeviceAssets('mobile');
      tabletAssets = getDeviceAssets('tablet');
      laptopAssets = getDeviceAssets('laptop');
    }

    const hasAssets = mobileAssets.length > 0 || tabletAssets.length > 0 || laptopAssets.length > 0;
    const hasDetails = !!project.details && project.details.length > 0;

    return {
      name: project.name,
      folderName: targetFolder,
      desc: project.desc,
      details: project.details,
      tags: project.tags,
      logoUrl,
      assets: {
        mobile: mobileAssets,
        tablet: tabletAssets,
        laptop: laptopAssets,
      },
      hasViewableAssets: hasAssets || hasDetails
    };
  });
}
