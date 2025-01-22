const slides = document.querySelectorAll(".slide");
const sliderNav = document.querySelector(".slider-nav");
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;
let slideCount = slides.length;
let intervalId = null;

slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("nav-dot");

    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        goToSlide(index);
    });

    sliderNav.appendChild(dot);
});

const dots = document.querySelectorAll(".nav-dot");

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = (index + slideCount) % slideCount;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    resetAnimation(slides[currentSlide]);
    updateDots();
}

function resetAnimation(slide) {
    const content = slide.querySelector(".slide-content");
    if (content) {
        const clone = content.cloneNode(true);
        content.parentNode.replaceChild(clone, content);
    }
}

function startAutoAdvance() {
    if (!intervalId) {
        intervalId = setInterval(handleNextSlide, 5000);
    }
}

function stopAutoAdvance() {
    clearInterval(intervalId);
    intervalId = null;
}

startAutoAdvance();

slider.addEventListener("mouseenter", stopAutoAdvance);
slider.addEventListener("mouseleave", startAutoAdvance);

function handleNextSlide() {
    stopAutoAdvance();
    goToSlide(currentSlide + 1);
    startAutoAdvance();
}

function handlePrevSlide() {
    stopAutoAdvance();
    goToSlide(currentSlide - 1);
    startAutoAdvance();
}

prevBtn.addEventListener("click", handlePrevSlide);
nextBtn.addEventListener("click", handleNextSlide);

// Select necessary elements
const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu-items');
const closeIcon = document.querySelector('.mobile-menu-items .close-icon');

// Open Mobile Menu
menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
});

// Close Mobile Menu
closeIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
});

// Smooth Scrolling for Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const coursesPerPage = 30; // Number of courses per page
    const coursesContainer = document.getElementById("coursesContainer");
    const paginationContainer = document.getElementById("paginationContainer");

    const languageFilter = document.getElementById("languageFilter");
    const categoryFilter = document.getElementById("categoryFilter");
    const platformFilter = document.getElementById("platformFilter");

    const searchBar = document.getElementById("searchBar");
    const suggestionsList = document.getElementById("suggestions");

    const courses = [
        // Start Oracle Cloud Infrastructure
        {
            title: "Introduction to Oracle Cloud Essentials",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "/course.img/Effective_Communication_(2).png",
            description: "This Learning Path introduces you to Cloud Computing and Oracle's Cloud Solutions which include Oracle Cloud Infrastructure and Oracle Cloud Applications. Quick product tours help you experience the capabilities of our OCI and SaaS Platforms.",
            url: "https://mylearn.oracle.com/ou/learning-path/introduction-to-oracle-cloud-essentials/115954"
        },

        {
            title: "Become An OCI Foundations Associate",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Skills you will learn:Fundamentals of Oracle Cloud Infrastructure (OCI), Networking in OCI, Compute Services, Storage Solutions, Database Services, Security in OCI, Cost Management.This Learning Path also prepares you for the Oracle Cloud Infrastructure 2024 Foundations Associate certification.",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-foundations-associate-2024/139374"
        },

        {
            title: "Become an Oracle Cloud Infrastructure Data Foundations Associate (2024)",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: " Understand how Autonomous Databases handle diverse tasks and data types, and get introduced to modern data architectures like data lakehouse and data mesh. Finally, acquire skills to effectively manage your data environment, focusing on security, availability, and upgrades.",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-cloud-infrastructure-data-foundations-associate-2024/140339"
        },

        {
            title: "Become an OCI AI Foundations Associate",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Learning Path prepares you for the OCI 2024 AI Foundations Associate Certification available to you for free. The certification exam consists of 40 questions to be answered in 60 minutes. The pass percentage is 65%. Oracle University Certification exam page has more details.",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-ai-foundations-associate-2024/140164"
        },

        {
            title: "Cloud Adoption Framework and Essentials",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Do you want to learn about the Cloud Adoption Framework (CAF) and OCI CAF's approach to adopting OCI? The Cloud Adoption Framework and Essentials course is the right place to start. This course is targeted at new OCI users, Business leaders, IT admins, Cloud Architects,  Operations Engineers, and Administrators who are looking to gain a solid foundation for successfully adopting OCI.",
            url: "https://mylearn.oracle.com/ou/learning-path/cloud-adoption-framework-and-essentials/122491"
        },

        {
            title: "Oracle Cloud Infrastructure Generative AI Professional",
            language: "english",
            category: "cloud infrastructure",
            category: "ai",
            // duplicate category
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            duration: "6h.20m",
            description: "course caters to Software Developers, Machine Learning/AI Engineers, and Gen AI Professionals. It offers an in-depth technical introduction to Large Language Models (LLMs), covering various aspects such as LLM architecture, fine-tuning techniques, code models, multimodal LLMs, and language agents...",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-generative-ai-professional/136035/"
        },

        {
            title: "Integration of LLM with ODA",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            duration: "3h.15m",
            description: "Learn about generative AI capabilities built for business across OCI services.",
            url: "https://mylearn.oracle.com/ou/course/integration-of-llm-with-oda/139486/"
        },

        {
            title: "Using OCI Generative AI with APEX",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about generative AI capabilities built for business across OCI services. Data Management in OCI, Machine Learning Solutions with OCI Data Science.",
            duration: "17m",
            url: "https://mylearn.oracle.com/ou/course/using-oci-generative-ai-with-apex/139477/"
        },

        {
            title: "OCI Generative AI Service: Getting Started",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course aims to introduce the fundamentals of Generative AI and large language models (LLMs) in modern computing. Learn about OCI Generative AI Services and Oracle 23ai Vector Database using a structured approach that is both effective and engaging.",
            duration: "1h.31m",
            url: "https://mylearn.oracle.com/ou/course/oci-generative-ai-service-getting-started/141097/"
        },

        {
            title: "Bring AI to Your Database with Oracle Autonomous Database",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course explores Oracle Autonomous Database's AI and machine learning features, such as natural language queries, spatial analytics, no-code model monitoring, and the Graph Studio interface. It focuses on how to use these tools to simplify AI adoption and gain actionable insights from data",
            duration: "39m",
            url: "https://mylearn.oracle.com/ou/course/bring-ai-to-your-database-with-oracle-autonomous-database/141117/"
        },

        {
            title: "Become an OCI Architect Associate",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Discuss OCI Identity and Access Management services, Become proficient in OCI Networking services, Explain OCI Compute service offerings, Implement OCI Block Storage, Object Storage and File Storage services",
            duration: "22h.13m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-architect-associate-2024/137550"
        },

        {
            title: "Become an Oracle Cloud Infrastructure Multicloud Architect Professional (2025)",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Basics of OCI Identity and Access Management, OCI Networking and OCI Database services, Oracle Interconnect for Azure Deep- Dive, Oracle Interconnect for Google Cloud Deep - Dive, Multicloud Network Connectivity solutions, How to implement Oracle Database @Azure?, How to implement Oracle Database @Google Cloud ? This Learning Path also prepares you for the Oracle Cloud Infrastructure 2025 Multicloud Architect Professional certification.",
            duration: "7h.44m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-cloud-infrastructure-multicloud-architect-professional-2025/144472"
        },

        {
            title: "Become an Oracle Cloud Infrastructure Multicloud Architect Associate",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Skills you will learn: High Availability and Disaster Recovery,Cloud-Native Solutions, Infrastructure as Code, Security services, Databases, Migration, Multicloud and Hybrid, Observability: Monitoring, Logging",
            duration: "29h.43m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-architect-professional-2024/139688"
        },
        
        {
            title: "Become an Oracle Cloud Infrastructure Migration Architect Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Learning Path provides advanced knowledge in architecting migration workflows for migrating workloads to Oracle Cloud Infrastructure.",
            duration: "11h.2m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-cloud-infrastructure-migration-architect-professional/134155"
        },
        
        {
            title: "Become An OCI Networking Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Attain Oracle Cloud Infrastructure's Networking Certification and Set Yourself Apart in a Competitive Environment. Gain insights into the essential services in OCI Virtual Cloud Network (VCN). Ideal for architects, this training equips you with skills to build a strong and secure network infrastructure using OCI Networking and Connectivity solutions. ",
            duration: "16h.13m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-networking-professional-2024/133541"
        },
        
        {
            title: "OCI for AWS Architects",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Develop understanding of Oracle Cloud Infrastructure (OCI) concepts and quickly ramp up to OCI by building on things you already know. Identify how the OCI's service offerings compare to that of Amazon Web Services (AWS).",
            duration: "3h.8m",
            url: "https://mylearn.oracle.com/ou/course/oci-for-aws-architects/104530/"
        },
        
        {
            title: "OCI for Azure Architects",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Develop understanding of Oracle Cloud Infrastructure (OCI) concepts and quickly ramp up to OCI by building on things you already know. Identify how the OCI's service offerings compare to that of Microsoft Azure.",
            duration: "3h.13m",
            url: "https://mylearn.oracle.com/ou/course/oci-for-azure-architects/104336/"
        },
        
        {
            title: "Become an OCI DevOps Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure (OCI) DevOps service is an end-to-end, continuous integration and continuous delivery (CI/CD) platform where developers can build, test, and deploy their applications. This Learning Path also prepares you for the Oracle Cloud Infrastructure  DevOps Professional certification.",
            duration: "33h.16m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-devops-professional-2024/138161"
        },
        
        {
            title: "Become An OCI Developer Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "the OCI Developer Professional Certification course! The Oracle Cloud Infrastructure (OCI) Developer Professional course is designed for cloud developers and architects, offering in-depth knowledge and hands-on skills to harness the power of OCI Developer services for cutting-edge cloud-native application development and seamless deployment.",
            duration: "26h.15m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-developer-professional-2024/139082"
        },
        
        {
            title: "Become a Digital Assistant Developer",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Build Skills and Digital Assistants, Employ Conversational AI best practices, Create robust training models for your Skills, Create conversation Flows using Digital Assistant’s Visual Flow Designer, Integrate Flows with backend systems, Create and manage Channels through which your users can access Digital Assistants, Create multi-lingual Digital Assistants, Enhance your knowledge with hands-on lab included in the course.",
            duration: "4h.11m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-a-digital-assistant-developer-2024/136829"
        },
        
        {
            title: "Become An OCI Kubernetes Engine Specialist",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Ready to explore the potential of OCI Kubernetes Engine (OKE) and elevate your container orchestration skills? You're in the perfect place to begin. This course is designed for Cloud Native Developers, DevOps Engineers, Kubernetes Administrators/Developers, and Site Reliability Engineers aiming to fully understand OKE and become skilled at using it.",
            duration: "19h.4m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-kubernetes-engine-specialist/134984"
        },

        {
            
            title: "Become an Oracle Cloud Database Services Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "learning: path equips you with the critical skills needed to efficiently manage and operate Oracle Cloud Database Services. This training covers essential areas such as provisioning and managing cloud databases, including Base Database Service, Exadata, MySQL, and NoSQL. You’ll also learn how to scale for performance, ensure data security, and optimize database performance, making you well-prepared for real-world challenges and certification.",
            duration: "8h.29m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-cloud-database-services-professional-2024/140770"
        },


        
        {   
            title: "Become An Oracle APEX Developer Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "With this Oracle APEX Training, you prepare yourself to use a low-code development platform that enables you to build scalable, secure enterprise apps, with world-class features, that can be deployed anywhere. Build modern, responsive web applications using only a browser and without the need to become specialized experts. This Learning Path also prepares you for the Oracle APEX Cloud Developer Professional certification.",
            duration: "13h.48m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-apex-developer-professional-2023/121230"
        },

        {
            title: "Become an Oracle Autonomous Database Cloud Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This training covers essential concepts such as provisioning, managing, and scaling Oracle Autonomous Databases, alongside ensuring data security and implementing performance tuning. Participants will gain a comprehensive understanding, preparing them for real-world applications and certification.",
            duration: "5h.51m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-autonomous-database-cloud-professional-2024/140240"
        },

        {
            title: "Become an Oracle Cloud Database Migration Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Cloud Database Migration Professional learning path provides a comprehensive training pathway designed to equip learners with the skills necessary for migrating databases to Oracle Cloud. This course is ideal for IT professionals, database administrators, and system architects who are involved in planning and executing database migrations.",
            duration: "3h.4m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-cloud-database-migration-professional-2024/138919"
        },

        {
            title: "Become an Oracle Machine Learning Associate (Using Autonomous Database)",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This training offers learners the opportunity to gain hands-on experience with Oracle's machine learning tools. Participants will learn to build and deploy machine learning models, integrate these models with Oracle Autonomous Database, and use SQL for machine learning tasks. This training helps address business challenges such as data-driven decision-making, automation of predictive analytics, and improved data management. It's valuable for professionals looking to enhance their skills in  machine learning within the Oracle ecosystem.",
            duration: "2h.32m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-machine-learning-associate-using-autonomous-database-2024/138903"
        },

        {
            title: "Become an Oracle Database@Azure Specialist",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "OCI and Microsoft Azure have partnered together to make it easier for customers to apply the power of Oracle Database services in Azure with Oracle Database@Azure. Azure customers can now procure, deploy, and use Oracle database services running on OCI within the native Azure portal and APIs, giving them an OCI-in-Azure-like experience. ",
            duration: "2h.27m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-databaseazure-specialist/135857"
        },

        {
            title: "Become a HeatWave MySQL Implementation Associate",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "You will learn to: Create and Manage HeatWave MySQL Service Instances, Migrate an On-Premise Database to the Cloud, Monitor Instances and Adjust Use of Resources, Configure MySQL DB Systems, Manage MySQL DB Systems, Back Up MySQL DB Systems, Migrate Your Data to HeatWave MySQL, HeatWave MySQL High Availability, Implement HeatWave MySQL for Query Acceleration",
            duration: "10h.52m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-a-heatwave-mysql-implementation-associate/128102"
        },

        {
            title: "Become an OCI AI Foundations Associate",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The OCI AI Foundations learning path is designed to introduce you to the fundamental concepts of AI, Machine Learning, Deep Learning and Generative AI with a specific focus on the practical application of these technologies within Oracle Cloud Infrastructure. This Learning Path is ideal for beginners looking to enhance their understanding of AI technologies without any prior experience.",
            duration: "4h.53m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-ai-foundations-associate-2024/140164"
        },

        {
            title: "Become an OCI Generative AI Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Upon completion of this Learning Path, you will be able to: Understand Large Language Models (LLMs), Become proficient in OCI Generative AI Service, Build a Retrieval-Augmented Generation (RAG) based chatbot using OCI Generative AI service",
            duration: "6h.58m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-generative-ai-professional/136227"
        },

        {
            title: "Become a Digital Assistant Developer",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "You will learn to: Build Skills and Digital Assistants, Employ Conversational AI best practice, Create robust training models for your Skills, Create conversation Flows using Digital Assistant’s Visual Flow Designer, Integrate Flows with backend systems, Create and manage Channels through which your users can access Digital Assistants, Create multi-lingual Digital Assistants",
            duration: "4h.11m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-a-digital-assistant-developer-2024/136829"
        },

        {
            title: "Become an OCI Data Science Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Skills You Will Learn: OCI Data Science Environments: Machine Learning Lifecycle: MLOps Practices: OCI Service Integration: Integration with Vault, Object Storage, Generative AI, Data Flow, and Data Labeling. ML and Cloud Best Practices: ML Solutions for Business: Identification and use of OCI services for business-specific machine learning solutions.",
            duration: "8h.31m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-data-science-professional-2024/137742"
        },

        {
            title: "Become a Cloud Security Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: " Understand the core concepts of Identity and Access Management (IAM) to ensure secure access control, Learn how to implement network security measures, such as setting up Firewalls, Certificates, and Load Balancers, Manage OS and Workload Protection to safeguard your data and applications, Secure data and manage encryption keys with OCI Key Management Services, Detect, remediate, and monitor your OCI environment to maintain a strong security posture",
            duration: "22h.47m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-a-cloud-security-professional-2024/137773"
        },

        {
            title: "Discover and Train in CyberSecurity",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Be Cybersmart, Be a part of the CyberSecurity Awareness Month by taking this free training!, Take this training to get an overview of CyberSecurity and Earn a Badge!",
            duration: "2h.57m",
            url: "https://mylearn.oracle.com/ou/learning-path/discover-and-train-in-cybersecurity/100307"
        },

        {
            title: "Managing OCI Identity and Access Management",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course provides a complete understanding of Oracle Cloud Infrastructure (OCI) Identity and Access Management (IAM). Master identity domains, user management, policies, and security best practices to secure your cloud environment and ensure robust access control. You'll gain the skills to effectively manage identities, groups, and permissions within OCI.",
            duration: "4h.4m",
            url: "https://mylearn.oracle.com/ou/course/managing-oci-identity-and-access-management/135706/"
        },

        {
            title: "Become An OCI Cloud Operations Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Embark on a comprehensive learning journey tailored for Oracle Cloud Infrastructure (OCI) Cloud Operations. This path is designed to equip you with essential skills and knowledge necessary to manage day-to-day operational activities within the OCI ecosystem.",
            duration: "17h.2m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oci-cloud-operations-professional-2024/139622"
        },

        {
            title: "Become An Oracle Analytics Expert",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In This Learning Path Create analyses and dashboards, load and model data, and configure Business Intelligence Cloud Service on mobile. Collect, Merge, and Visualize data using Oracle Analytics Cloud, Use Machine Learning and Augmented Analytics to gain faster and better prescriptive solutions and actionable business intelligence.Create a highly formatted document for analysis using Pixel Perfect Report",
            duration: "33h.31m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-analytics-expert-2024/140084"
        },

        {
            title: "Become An Oracle Cloud Infrastructure Observability Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Skills you will learn: OCI Monitoring: Actively and passively monitor cloud environments using metrics, define alarms for notifications. OCI Events: Create rules to run automated actions based on state changes of OCI resources. OCI Logging: Centrally manage all types of logs (Service Logs, Custom Logs, Audit Logs) through a single pane of glass. OCI Logging Analytics: Log ingestion methods, identifying data patterns with enrichments, aggregations, correlations and create meaningful visualizations. OCI Application Performance Monitoring: Monitor application stacks with distributed tracing, real-user monitoring and synthetic monitoring providing deep visibility into end-user experience.",
            duration: "9h.10m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-cloud-infrastructure-observability-professional-2024/139312"
        },

        {
            title: "Deploying Oracle Identity and Access Management in OCI",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In this course, you will gain an understanding of running on-premises Oracle IAM software in the Oracle Public Cloud. This course will teach you how to migrate existing on-prem Oracle IAM environments into OCI as well as fresh brand new installations. Additionally, managing these technologies within OCI will be explored.",
            duration: "1h.37m",
            url: "https://mylearn.oracle.com/ou/course/deploying-oracle-identity-and-access-management-in-oci/133671/"
        },

        {
            title: "Deploying Containerized Oracle Identity and Access Management on OCI",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In this course, you will learn how to use Oracle IAM container images to quickly spin up Oracle Identity Governance (OIG), Oracle Access Management (OAM), and Oracle Unified Directory (OUD) 12c to run in Kubernetes environments. Oracle IAM containers allow customers to move complex workloads to any public or private cloud vendor - significantly reducing operational cost and modernizing security infrastructure, enabling customers to continue their DevSecOps journey with maximized velocity.",
            duration: "1h.33m",
            url: "https://mylearn.oracle.com/ou/course/deploying-containerized-oracle-identity-and-access-management-on-oci/133783/"
        },

        {
            title: "Microservices for Oracle Identity and Access Management",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course covers the evolution of microservices in the Oracle IAM platform, and how it is central to the modernization journey of customers. It then explains the Oracle IAM microservices, such as Oracle Advanced Authentication (OAA), Oracle Adaptive Risk Management (OARM), Oracle RADIUS Authentication (ORA), and Oracle Identity Role Intelligence (OIRI) and how to implement them.",
            duration: "2h.35m",
            url: "https://mylearn.oracle.com/ou/course/microservices-for-oracle-identity-and-access-management/141536/"
        },

        {
            title: "Introduction to Oracle Access Governance",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course will help you understand what Identity Governance and Administration (IGA) is and how Oracle Access Governance can be used for IGA. This course will be helpful for anyone who is concerned about enterprise security and ensuring compliance to regulatory requirements. Ungoverned identities and uncontrolled access to systems may cause millions in damages and Oracle Access Governance provides the solution to address this challenge.",
            duration: "3h.11m",
            url: "https://mylearn.oracle.com/ou/course/introduction-to-oracle-access-governance/133528/"
        },

        {
            title: "Become Oracle Cloud Infrastructure for Sunbird ED Specialty Certified",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "You will learn: The core concepts of OCI. The key features and functionalities of Sunbird ED platform. About the technology stack libraries used to build the front end of the Sunbird ED platform. To configure OCI capabilities to manage and optimize the Sunbird ED platform.",
            duration: "5h.18m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-oracle-cloud-infrastructure-for-sunbird-ed-specialty-certified/127531"
        },

        {
            title: "OCI Landing Zone",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Landing Zones are a secure cloud environment, designed with best practices to simplify the onboarding and continuous operations of cloud resources. Learn about the components and benefits of CIS Landing Zone.",
            duration: "38m",
            url: "https://mylearn.oracle.com/ou/course/oci-landing-zone/123962/"
        },

        {
            title: "Deploying Kubernetes on OCI",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course provides a complete understanding of Oracle Cloud Infrastructure (OCI) Identity and Access Management (IAM). Master identity domains, user management, policies, and security best practices to secure your cloud environment and ensure robust access control. You'll gain the skills to effectively manage identities, groups, and permissions within OCI.",
            duration: "12m",
            url: "https://mylearn.oracle.com/ou/course/managing-oci-identity-and-access-management/135706/"
        },

        {
            title: "Working with Oracle Cloud VMware Solution",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Take this journey to move or extend VMware-based workloads to the cloud and controlling them using familiar VMware tools.",
            duration: "1h.13m",
            url: "https://mylearn.oracle.com/ou/course/working-with-oracle-cloud-vmware-solution/123362/"
        },

        {
            title: "Compute",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn to provision and manage compute hosts as it serves as a foundation for other OCI Services.",
            duration: "2h.22m",
            url: "https://mylearn.oracle.com/ou/course/compute/124961/"
        },


        {
            title: "Storage",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Dive deeper into various storage services available within OCI with high-performance computing and low-cost cloud storage options",
            duration: "6h.14m",
            url: "https://mylearn.oracle.com/ou/course/storage/124936/"
        },

        
        {
            title: "Networking",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn to provision and manage key virtual networking components within OCI",
            duration: "26m",
            url: "https://mylearn.oracle.com/ou/course/networking/124947/"
        },

        {
            title: "Identity & Security",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn to protect your most valuable data in the cloud and on-premises with Oracle’s security-first approach.",
            duration: "9h.9m",
            url: "https://mylearn.oracle.com/ou/course/identity-security/124944/"
        },

        {
            title: "Oracle Database",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn to quickly create and manage full-featured Oracle Database systems on OCI",
            duration: "5h.8m",
            url: "https://mylearn.oracle.com/ou/course/oracle-database/124924/"
        },

        {
            title: "Developer Services",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Gain knowledge on core fundamentals of Cloud-native and prepares you for the Oracle Cloud Infrastructure.",
            duration: "4h.58m",
            url: "https://mylearn.oracle.com/ou/course/developer-services/124942/"
        },

        {
            title: "Analytics and AI",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure (OCI) Data Science, a service that supports the full machine learning life cycle, enabling data scientists to rapidly build, train, deploy, and manage machine learning models using Python and open source libraries.",
            duration: "1h.55m",
            url: "https://mylearn.oracle.com/ou/course/analytics-and-ai/124938/"
        },

        {
            title: "Observability and Management",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course covers Oracle Cloud Infrastructure (OCI) Observability and Management, a group of services that aggregates all observability data for holistic analysis and applies operations-optimized Machine Learning algorithms that can identify anomalous system behavior, rapidly isolate and remediate performance problems, and prevent outages by providing accurate forecasting of impending issues.",
            duration: "5h.17m",
            url: "https://mylearn.oracle.com/ou/course/observability-and-management/124919/"
        },

        {
            title: "Hybrid",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn how to move or extend VMware-based workloads to the cloud and controlling them using familiar VMware tools.",
            duration: "1h.35m",
            url: "https://mylearn.oracle.com/ou/course/hybrid/124916/"
        },

        {
            title: "Migration and Disaster Recovery",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn to migrate your on-premises Oracle Database to Oracle Cloud Infrastructure and setup DR.",
            duration: "1h.28m",
            url: "https://mylearn.oracle.com/ou/course/migration-and-disaster-recovery/124915/"
        },

        {
            title: "Oracle Database 23ai: Vector Search Fundamentals",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Leverage the key capability of Oracle Database 23ai to design and manage Artificial Intelligence (AI) workloads using the new Oracle AI Vector Search feature. Learn how to create tables with vector data type, load data, and the query them based on semantics, rather than keywords. You will learn to perform semantic search on unstructured data by combining it with your relational data in one single system. With hands-on practices, you'll be be able to reinforce the learning of the new AI Vector Search feature and its capabilities.",
            duration: "3h.53m",
            url: "https://mylearn.oracle.com/ou/course/oracle-database-23ai-vector-search-fundamentals/140188/"
        },

        {
            title: "Oracle Cloud Infrastructure Foundations  (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "このコースは、Oracle Cloud Infrastructure (OCI)のコアコンセプトと機能に関する基礎知識を身につけるために役立ちます。以下の内容を紹介しています。 OCIの主要な機能とコンポーネントを理解する OCIの中核的なサービス内容を理解する OCIセキュリティモデルを理解する OCIの価格、サポートモデル、オペレーションを理解する",
            duration: "6h.12m",
            url: "https://mylearn.oracle.com/ou/course/solution-development-using-oci-go-and-typescript-sdk/84140/"
        },

        {
            title: "Oracle Cloud Infrastructure Networking Professional (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "このコースでは、OCI ネットワーキングと接続ソリューションを使用して、強力で安全なネットワーク・インフラストラクチャを構築する方法を学びます。このコースでは、OCI仮想クラウド・ネットワーク（VCN）の重要なサービスについての理解を深め、OCIネットワーキング・サービスの経験を積むことができます。さらに、このコースの内容はOracle Cloud Infrastructure Networking Professional認定試験の出題トピックをカバーしております。",
            duration: "21h.15m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-networking-professional-jp/139442/"
        },

        {
            title: "Oracle Cloud Infrastructure Architect Professional (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure Architect Professionalコースは、OCIの習熟度の向上を目指す、経験豊富なクラウド・アーキテクトおよびITプロフェッショナルのために綿密に設計されています。このコースでは、洗練されたOCIアーキテクチャ、戦略的な設計の原則、導入と管理のベスト・プラクティスを網羅した詳細なカリキュラムが提供されます。",
            duration: "34h.40m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-architect-professional-2024-jp/141764/"
        },

        {
            title: "Oracle Cloud Infrastructure Architect Associate (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure（OCI）の主要なコンセプトと機能について理解します。OCIの基本概念を理解することで、様々なドキュメントを読解したり、サービスを活用するための基礎を身につけます。",
            duration: "15h.9m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-architect-associate-2024-jp/141028/"
        },


        {
            title: "Oracle Cloud Infrastructure Architect Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The OCI 2024 Architect Professional Course is meticulously designed for seasoned cloud architects and IT professionals aiming to elevate their proficiency in Oracle Cloud Infrastructure (OCI). This advanced course offers an in-depth curriculum encompassing sophisticated OCI architecture, strategic design principles, and best practices for deployment and management.",
            duration: "28h.28m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-architect-professional/139695/"
        },

        {
            title: "Oracle Cloud Infrastructure Observability Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle research shows that over 70% of IT issues go undetected, resulting in unhappy customers and firefighting for IT staff. The Oracle Cloud Infrastructure Observability Professional course describes how to get a unified view of your entire software stack. You would learn how to aggregate all observability data for holistic analysis. Next, you learn to apply operations-optimized machine learning algorithms to identify anomalous system behavior, rapidly isolate and remediate performance problems, and prevent outages.",
            duration: "8h.50m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-observability-professional/139263/"
        },

        {
            title: "Oracle Cloud Infrastructure Security Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Discover how Oracle Cloud Infrastructure (OCI) Security Services can ensure the protection of your cloud workloads, data, and applications. With hands-on practices, enhance your knowledge on resource configuration, activity monitoring, secure compartment design, and security automations. By the end of this course, you will be prepared to effectively protect your organization's critical assets in the OCI environment.",
            duration: "20h.56m",
            url: "https://mylearn.oracle.com/ou/course/oracle-database-23ai-vector-search-fundamentals/140188/"
        },

        {
            title: "Building AI-Powered Assistants with Oracle Digital Assistant",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course introduces you to the world of conversational AI and how to build production-quality digital assistants using the Oracle Digital Assistant platform. You will learn how to develop individual chatbots (called skills) that use NLP (Natural Language Processing) to understand natural human language and interact with users conversationally to answer their questions and assist with their tasks. You will then learn how to assemble skills into a digital assistant, customize that digital assistant, and expose it to users through popular messenger clients, mobile apps, and Web pages.",
            duration: "3h.46m",
            url: "https://mylearn.oracle.com/ou/course/building-ai-powered-assistants-with-oracle-digital-assistant/136802/"
        },

        {
            title: "Oracle Cloud Infrastructure Observability Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle research shows that over 70% of IT issues go undetected, resulting in unhappy customers and firefighting for IT staff. The Oracle Cloud Infrastructure Observability Professional course describes how to get a unified view of your entire software stack. You would learn how to aggregate all observability data for holistic analysis. Next, you learn to apply operations-optimized machine learning algorithms to identify anomalous system behavior, rapidly isolate and remediate performance problems, and prevent outages.",
            duration: "15h.41m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-observability-professional/139263/"
        },

        {
            title: "Oracle Cloud Infrastructure Developer Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Want to build resilient, manageable, and dynamically scalable applications faster? You're in the right place! Learn the fundamentals of Cloud Native technologies and their implementation. Gain essential knowledge and hands-on skills to harness the power of OCI Developer services. By the end of this course, you'll be able to develop and seamlessly deploy cutting-edge cloud-native applications with Oracle Cloud.",
            duration: "17h.28m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-developer-professional/139083/"
        },

        {
            title: "Oracle Cloud Infrastructure DevOps Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Cloud Infrastructure DevOps Professional course is designed to equip DevOps Engineers and Developers with the skills and knowledge to effectively utilize (OCI) DevOps service: an end-to-end, continuous integration and continuous delivery (CI/CD) platform to build, test, and deploy their applications.",
            duration: "32h.11m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-devops-professional/138162/"
        },

        {
            title: "Oracle Cloud Infrastructure Operations Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Benefits to You: Efficiently manage OCI resources using CLI and shell scripts Optimize provisioning with Oracle Resource Manager and Ansible Enhance security with VCN, Load Balancer, and DNS Maintain comprehensive operational control through custom image management, scaling options, billing, and troubleshooting ",
            duration: "16h.33m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-operations-professional/139674/"
        },

        {
            title: "Oracle Cloud Infrastructure Data Science Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Benefits to you: By completing this course, you will be prepared to take the Oracle Cloud Infrastructure Data Science Professional certification exam",
            duration: "8h.5m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-data-science-professional/137735/"
        },

        {
            title: "Using Oracle Machine Learning with Autonomous Database",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about the Oracle Machine Learning components and tools available in Oracle Autonomous Database Shared to support the data science team, from data scientists and engineers to non-expert ML users and developers. This course will also prepare you to take the  Oracle Machine Learning using Autonomous Database Associate Certification.",
            duration: "2h.14m",
            url: "https://mylearn.oracle.com/ou/course/using-oracle-machine-learning-with-autonomous-database/138894/"
        },

        {
            title: "Create Pixel Perfect Reports using Analytics Cloud",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Benefits to you: After completing this course you will learn how to: Configure system setting, Set up data sources, Configure connections to delivery servers, Configure the scheduler, Diagnose and monitor system processes, Fetch and structure the data to use in reports, Create report definitions and design layouts",
            duration: "10h.35m",
            url: "https://mylearn.oracle.com/ou/course/create-pixel-perfect-reports-using-analytics-cloud/135674/"
        },

        {
            title: "Oracle Linux: System Administration on Oracle Cloud Infrastructure",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Benefits to you: Create Oracle Linux instances on OCI, Review Linux command line tools, Perform tasks, such editing files, changing file permissions, and creating scripts, Perform System Administration tasks, such as discovering and applying patches and updates, verifying security compliance, and working with iSCSI disk storage, Set up and manage Oracle Linux Storage Appliance in OCI",
            duration: "15h.37m",
            url: "https://mylearn.oracle.com/ou/course/oracle-linux-system-administration-on-oracle-cloud-infrastructure/135804/"
        },

        {
            title: "Oracle Cloud Infrastructure Foundations",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Skills you will learn: Fundamentals of Oracle Cloud Infrastructure (OCI), Networking in OCI, Compute Services, Storage Solutions, Database Services, Security in OCI, Cost Management, Additional Information: Cloud Family : OCI Hands-On Labs ",
            duration: "4h.36m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-foundations/139383/"
        },


        {
            title: "Oracle Cloud Infrastructure Generative AI Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Skills you will learn: Fundamentals of Large Language Models (LLMs), OCI Generative AI Deep-Dive, Build a Conversational Chatbot with OCI Generative AI",
            duration: "6h.20m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-generative-ai-professional/136035/"
        },


        {
            title: "Oracle Cloud Infrastructure Architect Associate",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Develop key insights on core constructs of Oracle Cloud Infrastructure (OCI) and discover how its globally distributed infrastructure components can transform your enterprise operations. Gain practical experience and confidence in using OCI to meet various business and technical requirements.",
            duration: "22h.13m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-architect-associate/133911/"
        },


        {
            title: "Oracle APEX Developer Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course is designed for Beginners, SQL or PLSQL Developers, Database Developers, or anyone interested in building low-code applications. This course helps you to rapidly build and deploy modern, secure, and scalable applications with Oracle APEX..",
            duration: "13h.7m",
            url: "https://mylearn.oracle.com/ou/course/oracle-apex-developer-professional/121250/"
        },


        {
            title: "Usecase : Move Oracle Apps to OCI / Lift & Shift Oracle Apps",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Moving Tier 1 Oracle Apps to OCI will help customers drive business agility and innovation with lower cost. Enterprises can lift-and-shift on-premises apps to a modern cloud platform purpose-built for enterprises.",
            duration: "1h.9m",
            url: "https://mylearn.oracle.com/ou/learning-path/usecase-move-oracle-apps-to-oci-lift-shift-oracle-apps/77182"
        },

        {
            title: "Lift & Shift VMware Virtual Machine to Oracle Cloud VMware Solution",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In this demonstration series, you will review the tasks involved in provision an Oracle Cloud VMWare solution and other necessary resources on Oracle Cloud Infrastructure (OCI).",
            duration: "51m",
            url: "https://mylearn.oracle.com/ou/course/lift-shift-vmware-virtual-machine-to-oracle-cloud-vmware-solution/82784/"
        },


        {
            title: "Oracle Database 23ai: Vector Search Fundamentals",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Leverage the key capability of Oracle Database 23ai to design and manage Artificial Intelligence (AI) workloads using the new Oracle AI Vector Search feature. Learn how to create tables with vector data type, load data, and the query them based on semantics, rather than keywords. You will learn to perform semantic search on unstructured data by combining it with your relational data in one single system. With hands-on practices, you'll be be able to reinforce the learning of the new AI Vector Search feature and its capabilities.",
            duration: "3h.53m",
            url: "https://mylearn.oracle.com/ou/course/oracle-database-23ai-vector-search-fundamentals/140188/"
        },


        {
            title: "Oracle Linux: System Administration on OCI",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get started with Oracle Linux operating system on Oracle Cloud Infrastructure, and venture into the world of its administration, take an assessment, and earn a badge!",
            duration: "15h.37m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-linux-system-administration-on-oci/110062"
        },

        {
            title: "Become a Exadata Database Service Cloud Administrator",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In this Learning Path you will learn how to provision and administer an oracle Database on Oracle Exadata Database Service on dedicated Infrastructure in the Oracle Public Cloud and on Exadata Cloud@Customer. ",
            duration: "6h.51m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-a-exadata-database-service-cloud-administrator/121071"
        },

        {
            title: "Autonomous Database on Exadata Cloud@Customer Gen 2",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get an introduction to Autonomous Database on Exadata Cloud@Customer Learn about managing Autonomous Exadata VM Clusters and Autonomous Container Databases Identify the tasks involved in creating and administering Autonomous Databases on ExaCC Gen2 ",
            duration: "46m",
            url: "https://mylearn.oracle.com/ou/course/autonomous-database-on-exadata-cloudcustomer-gen-2/82797/"
        },


        {
            title: "Exadata Database Service Deep Dive Workshop",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn how to provision and administer the Oracle Database on Exadata Cloud Service and Exadata Cloud@Customer. This course covers advanced techniques for performance tuning, workload optimization, and high availability. ",
            duration: "6h.51m",
            url: "https://mylearn.oracle.com/ou/course/exadata-database-service-deep-dive-workshop/121072/"
        },

        {
            title: "Perform Hands-on Labs on Your Own Tenancy",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Perform Hands-on Labs on Your Own Tenancy.",
            duration: "67h.5m",
            url: "https://mylearn.oracle.com/ou/course/perform-hands-on-labs-on-your-own-tenancy/127329/"
        },



        {
            title: "Oracle Cloud Overview (CN)",
            language: "chinese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Fundamental of OCI OCI Architecture, Core OCI services",
            duration: "43m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-overview-cn/101369/"
        },

        {
            title: "Oracle Cloud Infrastructure Foundations (CN) ",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure Foundations (CN) ",
            duration: "7h.6m",
            url: "https://mylearn.oracle.com/ou/course/oracle-cloud-infrastructure-foundations-cn/101341/"
        },


        {
            title: "クラウドコンピューティング概要 (公共セクター向け) [JP]",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "このラーニングパスでは、公共セクターのシステムに関わる方と対象としてクラウドコンピューティングおよびガバメントクラウドの概要と Oracle Cloud Infrastructure (OCI) の概要を学習できます。クラウド・コンピューティングの特徴や民間・公共セクターでのクラウドの利用シーン、およびクラウドの導入・運用の概要を学習します",
            duration: "5h.9m",
            url: "https://mylearn.oracle.com/ou/learning-path/-jp/118286"
        },

        {
            title: "Japanese: Become an OCI Foundations Associate 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "このラーニング・パスを完了すると、次のことができるようになります。Oracle Cloud Infrastructure (OCI)のコア概念とアーキテクチャの理, OCI内でのアイデンティティとアクセスの管理, コンピュート、ストレージ、データベースなどのOCIサービスの導入と管理, OCIでセキュリティ対策を実施し、コストを管理",
            duration: "7h.26m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oci-foundations-associate-2024-/140074"
        },

        {
            title: "Japanese: Become an OCI Architect Associate 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "このラーニング・パスでは、Oracle Cloud Infrastructureサービスを使用したインフラストラクチャの設計に関する強力な基礎知識を提供し、Oracle Cloud Infrastructure Architect Associate認定の準備を整えます。コンテンツを最新の状態に保つために、最新のアップデートと新機能が継続的に含まれています。",
            duration: "17h.28m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oci-architect-associate-2024-/140905"
        },
        {
            title: "Japanese: Become an OCI Architect Professional 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "学習するスキル:, 高可用性とディザスタ・リカバリ: フル・スタック・ディザスタ・リカバリ・サービス, クラウドネイティブ・ソリューション: Oracle Cloud Infrastructure Registry、コンテナ・インスタンス、Oracle Cloud, Infrastructure Kubernetes Engine (OKE)、FunctionsおよびAPI Gateway, Infrastructure as Code: Terraform、リソース・マネージャ, セキュリティ・サービス: OCI Bastion、Network Firewall、証明書、Web Application Firewall、KMS, データベース: ベース・データベース・サービス、Autonomous Databases, 移行: Oracle Cloud Migrations、データとデータベースをOCIに移行, マルチクラウドとハイブリッド: OCI-Azure Interconnect、Oracle Database@Azure、Oracle Cloud VMWareソリューション, 可観測性: 監視、ロギン",
            duration: "38h.42m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oci-architect-professional-2024-/141191"
        },

        {
            title: "Japanese: Become An OCI Networking Professional 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "OCI Virtual Cloud Network(VCN)の重要なサービスに関するインサイトを取得します。アーキテクトに最適なこのトレーニングは、OCI NetworkingおよびConnectivityソリューションを使用して強力で安全なネットワーク・インフラストラクチャを構築するスキルを身につけることができます。",
            duration: "23h.2m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oci-networking-professional-2024-/138882"
        },
        {
            title: "Japanese: Become An OCI AI Foundations Associate 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "OCI AI Foundationsのラーニング・パスは、Oracle Cloud Infrastructure内のこれらのテクノロジの実際的な適用に特に重点を置いて、AI、機械学習、ディープ・ラーニングおよび生成AIの基本概念を紹介するように設計されています。このラーニング・パスは、事前の経験がなくてもAIテクノロジの理解を深めることを希望する初心者に最適です。",
            duration: "5h.4m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oci-ai-foundations-associate-2024-/140906"
        },
        {
            title: "Japanese: Become an OCI Generative AI Professional 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "習得スキル: 大規模言語モデル(LLM)の基礎: LLMの基本、LLMアーキテクチャ、プロンプト・エンジニアリング、ファインチューニング コード・モデルの基礎、マルチモーダルLLMおよび言語エージェン OCI Generative AI のディープ・ダイブ: 事前トレーニング済みの基礎モデル(生成、要約、埋込み)、T-Few技術を含む ファインチューニング、モデル推論、専用AIクラスタ、生成AIセキュリティ・アーキテクチ OCI Generative AI による会話型チャットボットの構築: RAG、ベクター・データベース、セマンティック検索、LangChainフレームワーク(",
            duration: "7h.15m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oci-generative-ai-professional-2024-/142598"
        },

        {
            title: "Japanese: Become an Oracle Cloud Database Services Professional 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Database Services Professional 2024のラーニング・パスには、Oracle Cloud Database Servicesを効率的に管理および運用するために必要な重要なスキルが備わっています。このトレーニングでは、ベース・データベース・サービス、Exadata、MySQL、NoSQLなど、クラウド・データベースのプロビジョニングおよび管理などの重要な領域を扱います。また、パフォーマンスを追求し、データ・セキュリティを確保し、データベース・パフォーマンスを最適化する方法も学び、現実世界の課題と認定資格に備えることができます。",
            duration: "8h.46m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oracle-cloud-database-services-professional-2024-/142600"
        },

        {
            title: "Japanese: Become an Oracle Autonomous Database Cloud Professional 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Autonomous Database Cloud Professionalのラーニング・パスは、Oracle Autonomous Databasesの管理と運用に必要なスキルを提供します。このトレーニングでは、データ・セキュリティの確保とパフォーマンス・チューニングの実装に加え、Oracle Autonomous Databasesのプロビジョニング、管理およびスケーリングなどの重要な概念について説明します。学習者は、包括的な理解を得て、実際のアプリケーションや認定に備えます。",
            duration: "6h.7m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oracle-autonomous-database-cloud-professional-2024-/142599"
        },
        {
            title: "Japanese: Become a Cloud Security Professional 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "学習するスキル: OCI Identity and Access Management, ネットワーク・セキュリティ, OSとワークロードの保護, データ保護, セキュリティ体制の維持. また、このラーニング・パスによって、Oracle Cloud Infrastructure Security Professional認定資格を取得します。",
            duration: "24h.47m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-a-cloud-security-professional-2024-/142636"
        },
        {
            title: "Japanese: Become An OCI Cloud Operations Professional 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "学習するスキル: セキュリティ体制の強化, マスター請求およびアカウント管理, コマンドライン熟達度, データ保護, ネットワーク設計とディザスタ, 可観測性と監視, また、このラーニング・パスにより、Oracle Cloud Infrastructure Cloud Operations Professional認定資格を取得します。",
            duration: "18h.56m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oci-cloud-operations-professional-2024-/143133"
        },
        {
            title: "Japanese: Become an Oracle Cloud Database Migration Professional 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Database Migration Professionalラーニング・パスは、データベースをOracle Cloudに移行するために必要なスキルを学習者に提供するために設計された包括的なトレーニングを提供します。このコースは、データベース移行の計画と実行に関与するITプロフェッショナル、データベース管理者およびシステム・アーキテクトに最適です。",
            duration: "3h.21m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oracle-cloud-database-migration-professional-2024-/143546"
        },
        {
            title: "Japanese: Become An OCI Developer Professional 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure (OCI) Developer Professionalコースは、クラウド開発者およびアーキテクト向けに設計されており、最先端のクラウドネイティブ・アプリケーション開発およびシームレスなデプロイメントのためのOCI Developerサービスのパワーを活用するための詳細な知識と実践スキルを提供します。",
            duration: "27h.27m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oci-developer-professional-2024-/144261"
        },

        {
            title: "Japanese: Become a MySQL HeatWave Implementation Associate (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "このラーニング・パスでは、トランザクション用のMySQL HeatWaveのプロビジョニング、構成および管理に必要な知識を習得します。",
            duration: "11h.44m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-a-mysql-heatwave-implementation-associate-jp/133191"
        },

        {
            title: "Oracle Cloud Overview (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloudは、業界で最も広範かつ統合されたクラウド・プロバイダであり、パブリック・クラウドからお客様のデータ・センターまで幅広い導入オプションがあります。また、あらゆるコンピューティング・ニーズに対応する完全なクラウド・サービスも提供しています。このラーニングパスは、Oracle Cloudへの移行を検討しているすべての人に適用されます。クラウド・コンピューティング、サービス・モデル、およびさまざまなデプロイメント・モデルを紹介します。",
            duration: "3h.33m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-cloud-overview-jp/107141"
        },

        {
            title: "OCI for Azure Architects (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure のサービス提供を Microsoft Azure と比較して学習しましょう。",
            duration: "5h.6m",
            url: "https://mylearn.oracle.com/ou/learning-path/oci-for-azure-architects-jp/106870"
        },

        {
            title: "OCI for AWS Architects (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure のサービス提供を Amazon Web Service (AWS) と比較して学習しましょう。",
            duration: "5h.42m",
            url: "https://mylearn.oracle.com/ou/learning-path/oci-for-aws-architects-jp/106871"
        },
        
        {
            title: "Japanese: Oracle Linux Essentials on OCI: 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure (OCI) でLinuxを利用する管理者に必要とされるトピックについて学習することができます",
            duration: "14h.39m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-oracle-linux-essentials-on-oci-/59589"
        },
        {
            title: "クラウドコンピューティング概要（理論編）/Introduction to Cloud Computing I (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "クラウドコンピューティングを学習する上での、導入的な役割を果たします。クラウドにおける、以下のような項目について扱います。",
            duration: "1h.17m",
            url: "https://mylearn.oracle.com/ou/course/introduction-to-cloud-computing-i-jp/119633/"
        },
        {
            title: "Japanese: Oracle Linux Essentials on Oracle Cloud Infrastructure (日本語)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Linuxオペレーティングシステムを初めて操作される方に最適なコースです。Oracle Cloud InfrastructureにOracle Linux環境を作成し、アクセスする方法から学び、Linux上での基本的なファイル操作スキルを身に付けます。",
            duration: "12h.6m",
            url: "https://mylearn.oracle.com/ou/course/japanese-oracle-linux-essentials-on-oracle-cloud-infrastructure-/88563/"
        },
        {
            title: "Configuring Virtual Cloud Network Peering Workshop(JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "このワークショップでは、2つのコンピュート・インスタンスと2つの仮想クラウド・ネットワーク(VCN)を作成し、それらの間のローカルVCNピアリングを構成します。",
            duration: "1h.15m",
            url: "https://mylearn.oracle.com/ou/course/configuring-virtual-cloud-network-peering-workshopjp/99809/"
        },
        {
            title: "Introduction to Enterprise Performance Management Cloud",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Explore and implement microservices architecture and containerization.Deploy and manage containerized applications using OCI services. Utilize OCI's serverless offerings for streamlined application development and deployment. Apply effective testing strategies for cloud-native and microservice deployments. Enhance the security of your applications using OCI's robust security features. Use OCI's observability services to monitor application performance, analyze logs, and troubleshoot issue efficiently.",
            duration: "6h.21m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-ai-in-fusion-cloud-customer-experience-cx/137893"
        },
        {
            title: "Japanese: Become an OCI Generative AI Professional 日本語",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "習得スキル: 大規模言語モデル(LLM)の基礎: LLMの基本、LLMアーキテクチャ、プロンプト・エンジニアリング、ファインチューニング コード・モデルの基礎、マルチモーダルLLMおよび言語エージェン OCI Generative AI のディープ・ダイブ: 事前トレーニング済みの基礎モデル(生成、要約、埋込み)、T-Few技術を含む ファインチューニング、モデル推論、専用AIクラスタ、生成AIセキュリティ・アーキテクチ OCI Generative AI による会話型チャットボットの構築: RAG、ベクター・データベース、セマンティック検索、LangChainフレームワーク(",
            duration: "7h.15m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oci-generative-ai-professional-2024-/142598"
        },
        {
            title: "Developing Fusion Application using Visual Builder - Roadmap",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course will present in joint hosted format the resources, links, web pages, ROC, Slack and training resources available to beginners (Fusion Apps Visual Builder Developers) and also tips on how to get started and minimize friction to getting started.",
            duration: "9m",
            url: "https://mylearn.oracle.com/ou/course/developing-fusion-application-using-visual-builder-roadmap/106850/"
        },
        {
            title: "OCI Foundations Associate (BP)",
            language: "brazilian portuguese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Este curso irá ajudá-lo a desenvolver uma base sólida em computação em nuvem, conceitos básicos e recursos do Oracle Cloud Infrastructure (OCI).",
            duration: "3h.21m",
            url: "https://mylearn.oracle.com/ou/course/oci-foundations-associate-bp/127467/"
        },
        {
            title: "Prepare for OCI Architect Professional Certification (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure 2024 Architect Professional (1Z0-997-24) 認定試験の準備をされている方に最適なコースです。実技試験における注意点、実技試験を想定したサンプルのシナリオを紹介しており、効率的に試験の準備ができるようになっています。",
            duration: "3h.28m",
            url: "https://mylearn.oracle.com/ou/course/prepare-for-oci-2024-architect-professional-certification-jp/141510/"
        },
        {
            title: "OCI for Azure Architects - 2025",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Embark on a learning journey to understand key concepts of Oracle Cloud Infrastructure (OCI) and accelerate your transition by building on your existing Microsoft Azure knowledge. This course is designed to provide a clear comparison between OCI’s service offerings and those of Microsoft Azure, enabling a seamless learning experience.",
            duration: "3h.10m",
            url: "https://mylearn.oracle.com/ou/course/oci-for-azure-architects-2025/145374/"
        },
        {
            title: "Prepare for OCI DevOps Professional Certification",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Certification Prep course for Oracle Cloud Infrastructure DevOps Professional 2022 (1Z0-1109-22) certification.",
            duration: "52m",
            url: "https://mylearn.oracle.com/ou/course/prepare-for-oci-devops-professional-certification/106640/"
        },
        {
            title: "Prepare for OCI 2024 Networking Professional Certification (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure 2024 Networking Professional (1Z0-1124-24) 認定試験の準備をされている方に最適なコースです。 試験の概要や効果的な学習方法の紹介、模擬問題＆解説を通して、効率的な試験の準備に役立ちます。",
            duration: "1h.31m",
            url: "https://mylearn.oracle.com/ou/course/prepare-for-oci-2024-networking-professional-certification-jp/142043/"
        },
        {
            title: "Prepare for OCI 2024 Cloud Operations Professional Certification (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure 2024 Cloud Operations Professional (1Z0-1067-24) 認定試験の準備をされている方に最適なコースです。実技試験における注意点、実技試験を想定したサンプルのシナリオを紹介しており、効率的に試験の準備ができるようになっています。",
            duration: "1h.48m",
            url: "https://mylearn.oracle.com/ou/course/prepare-for-oci-2024-cloud-operations-professional-certification-jp/143189/"
        },
        {
            title: "OCI Foundation for Government Customers",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Find out everything you need to know about Oracle Government Cloud. Develop a strong foundation in the core concepts of cloud computing and features of Oracle Cloud Infrastructure (OCI).",
            duration: "5h.15m",
            url: "https://mylearn.oracle.com/ou/course/oci-foundation-for-government-customers/123376/"
        },
        {
            title: "OCI構成・見積例 / Introduction to OCI Cost Estimation (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "このコースでは、Oracle Cloud Infrastructure(OCI)の導入や移行を検討している方を対象として、以下のような構成・見積もりのポイントについて扱います。",
            duration: "1h.30m",
            url: "https://mylearn.oracle.com/ou/course/oci-introduction-to-oci-cost-estimation-jp/121712/"
        },
        {
            title: "Prepare for OCI Foundations Associate Certification (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Prepare for OCI 2024 Foundations Associate Certification (JP)",
            duration: "1h.3m",
            url: "https://mylearn.oracle.com/ou/course/prepare-for-oci-2024-foundations-associate-certification-jp/140514/"
        },

        {
            title: "Prepare for OCI Architect Associate Certification (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure 2024 Architect Associate (1Z0-1072-24-JPN) 認定試験の準備をされている方のために、試験対策セミナーの様子を収めた動画です。対策セミナーに参加できない場合や、セミナー後に振り返りたい際に御活用ください。試験を受ける際の注意点や、学習ポイントなどを紹介しています。模擬問題＆解説という構成で、事前に学習した知識の効率的なチェックを行うことができます。",
            duration: "1h.58m",
            url: "https://mylearn.oracle.com/ou/course/prepare-for-oci-2024-architect-associate-certification-jp/142144/"
        },
        {
            title: "Prepare for OCI Security Professional Certification (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure 2024 Security Professional (1Z0-1104-24) 認定試験の準備をされている方に最適なコースです。実技試験における注意点、実技試験を想定したサンプルのシナリオを紹介しており、効率的に試験の準備ができるようになっています。",
            duration: "2h.16m",
            url: "https://mylearn.oracle.com/ou/course/prepare-for-oci-2024-security-professional-certification-jp/143002/"
        },

        {
            title: "Application Integration on Oracle Cloud",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Understand OIC components, features, and capabilities, Create and configure connections (Adapter, Trigger, Invoke), Create Integrations (App Driven and Scheduled Orchestrations), Map data using Lookups and the Data Mapper, Leverage file handling options, features, and capabilities, Configure orchestration actions and fault handling lo, ",
            duration: "19h.24m",
            url: "https://mylearn.oracle.com/ou/course/application-integration-on-oracle-cloud/138118/"
        },
        {
            title: "Business Intelligence on Oracle Analytics Cloud",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Business Intelligence on Oracle Analytics Cloud training provides step-by-step instructions for creating analyses and dashboards using Oracle Analytics Cloud. You learn how to load data, model data, build and modify analyses and dashboards, and how to configure Oracle Analytics Cloud on mobile",
            duration: "10h.59m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oci-generative-ai-professional-2024-/142598"
        },
        {
            title: "Data Visualization on Oracle Analytics Cloud",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Enhance your business insights requirement with Data Visualization on Oracle Analytics Cloud. Learn to upload your own spreadsheets with an intuitive interface. Drag and drop to create your own visualizations. Interact with your data to discover insights. You will learn to manage data to customize Data Visualization.",
            duration: "7h.59m",
            url: "https://mylearn.oracle.com/ou/course/data-visualization-on-oracle-analytics-cloud/140139/"
        },

        {
            title: "Introduction to Oracle Cloud Essentials",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Learning Path introduces you to Cloud Computing and Oracle's Cloud Solutions which include Oracle Cloud Infrastructure and Oracle Cloud Applications. Quick product tours help you experience the capabilities of our OCI and SaaS Platforms. Take the assessment at the end of the Learning Path to earn a badge",
            duration: "2h.8m",
            url: "https://mylearn.oracle.com/ou/learning-path/introduction-to-oracle-cloud-essentials/115954"
        },

        {
            title: "Become an Oracle Cloud Infrastructure Data Foundations Associate",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This learning path will guide you through Oracle’s data management strategies. Begin by learning how to manage Oracle's Autonomous Database, and then explore various Oracle Database platforms like Exadata and Database Cloud Service. You'll also discover how to develop applications quickly with Oracle APEX. Understand how Autonomous Databases handle diverse tasks and data types, and get introduced to modern data architectures like data lakehouse and data mesh. Finally, acquire skills to effectively manage your data environment, focusing on security, availability, and upgrades.",
            duration: "6h.54m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-cloud-infrastructure-data-foundations-associate-2024/140339"
        },

        {
            title: "Oracle APEX: Foundations",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get started with low-code application development using Oracle APEX, and learn how to build scalable, secure enterprise apps with world-class features that can be deployed anywhere. ",
            duration: "3h.42m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-apex-foundations/112444"
        },

        {
            title: "Become an Oracle Autonomous Database Cloud Professional ",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Autonomous Database Cloud Professional learning path equips individuals with the necessary skills to manage and operate Oracle Autonomous Databases. This training covers essential concepts such as provisioning, managing, and scaling Oracle Autonomous Databases, alongside ensuring data security and implementing performance tuning. Participants will gain a comprehensive understanding, preparing them for real-world applications and certification.",
            duration: "5h.51m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-autonomous-database-cloud-professional-2024/140240"
        },

        {
            title: "Become an Oracle Machine Learning Associate (Using Autonomous Database)",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This training offers learners the opportunity to gain hands-on experience with Oracle's machine learning tools. Participants will learn to build and deploy machine learning models, integrate these models with Oracle Autonomous Database, and use SQL for machine learning tasks. This training helps address business challenges such as data-driven decision-making, automation of predictive analytics, and improved data management. It's valuable for professionals looking to enhance their skills in  machine learning within the Oracle ecosystem.",
            duration: "5h.51m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-machine-learning-associate-using-autonomous-database-2024/138903"
        },

        {
            title: "Become an Oracle Machine Learning Associate (Using Autonomous Database)",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This training offers learners the opportunity to gain hands-on experience with Oracle's machine learning tools. Participants will learn to build and deploy machine learning models, integrate these models with Oracle Autonomous Database, and use SQL for machine learning tasks. This training helps address business challenges such as data-driven decision-making, automation of predictive analytics, and improved data management. It's valuable for professionals looking to enhance their skills in  machine learning within the Oracle ecosystem.",
            duration: "2h.32m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-machine-learning-associate-using-autonomous-database-2024/138903"
        },

        {
            title: "Oracle Database 23ai: Vector Search Fundamentals",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Leverage the key capability of Oracle Database 23ai to design and manage Artificial Intelligence (AI) workloads using the new Oracle AI Vector Search feature. Learn how to create tables with vector data type, load data, and the query them based on semantics, rather than keywords. You will learn to perform semantic search on unstructured data by combining it with your relational data in one single system. With hands-on practices, you'll be be able to reinforce the learning of the new AI Vector Search feature and its capabilities.",
            duration: "3h.53m",
            url: "https://mylearn.oracle.com/ou/course/oracle-database-23ai-vector-search-fundamentals/140188/"
        },

        {
            title: "Oracle Machine Learning for R",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In this course, you will learn about Oracle Machine Learning for R, and learn how to use it to develop machine learning solutions.",
            duration: "6h.3m",
            url: "https://mylearn.oracle.com/ou/course/oracle-machine-learning-for-r/100384/"
        },

        {
            title: "Oracle Machine Learning on Oracle Cloud Using Python",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course is a deep dive into Oracle Machine technology which focuses on Oracle Machine Learning for Python. It shows how to use Machine learning algorithms and models, OML4Py datastores, and Automated Machine Learning.",
            duration: "4h.16m",
            url: "https://mylearn.oracle.com/ou/course/oracle-machine-learning-on-oracle-cloud-using-python/98724/"
        },

        {
            title: "Getting Started with Oracle NoSQL Cloud for Administration",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This NoSQL course provides essential knowledge for managing and optimizing NoSQL databases on Oracle Cloud Infrastructure (OCI). You'll learn about capacity management, and security best practices. The course also covers data migration strategies using the migrator utility and explores practical use cases. By completing the course, you'll be prepared to improve database performance, ensure security, and manage data migrations effectively, making you a valuable asset in your organization's cloud strategy.",
            duration: "2h.17m",
            url: "https://mylearn.oracle.com/ou/course/getting-started-with-oracle-nosql-cloud-for-administration/144013/"
        },

        {
            title: "Become an Oracle Cloud Database Services Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Cloud Database Services Professional 2024 learning path equips you with the critical skills needed to efficiently manage and operate Oracle Cloud Database Services. This training covers essential areas such as provisioning and managing cloud databases, including Base Database Service, Exadata, MySQL, and NoSQL. You’ll also learn how to scale for performance, ensure data security, and optimize database performance, making you well-prepared for real-world challenges and certification.v",
            duration: "8h.29m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-cloud-database-services-professional-2024/140770"
        },

        {
            title: "Oracle Database 23ai: New Features for Administrators",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course covers the latest additions and improvements in Oracle Database 23ai. It equips Oracle Database Administrators with knowledge about enhanced tools for better management, focusing on performance, architecture, security, and database sharding. The topics include updates to AI Vector Search, True Cache, Sharding, Blockchain Tables, Data Migration with RMAN, Wide Tables, and Lock-Free Reservations.",
            duration: "9h.37m",
            url: "https://mylearn.oracle.com/ou/course/oracle-database-23ai-new-features-for-administrators/140830/"
        },

        {
            title: "Exadata Database Service Deep Dive Workshop",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn how to provision and administer the Oracle Database on Exadata Cloud Service and Exadata Cloud@Customer. This course covers advanced techniques for performance tuning, workload optimization, and high availability. ",
            duration: "6h.51m",
            url: "https://mylearn.oracle.com/ou/course/exadata-database-service-deep-dive-workshop/121072/"
        },

        {
            title: "Become a HeatWave MySQL Implementation Associate",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Learning Path provides you with the knowledge required to Provision, Configure, and Manage HeatWave MySQL for Transactions. You will learn to:",
            duration: "10h.52m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-a-heatwave-mysql-implementation-associate/128102"
        },

        {
            title: "HeatWave MySQL: Cluster Architecture and Deployment",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course provides an overview of the MySQL HeatWave Database Service along with it architecture. It then covers how to deploy, connect, edit, and manage a MySQL DB System. Next, it covers how to use Auto Parallel Load to load data into HeatWave and determine whether a query is executed on the HeatWave cluster. Finally, the course covers the steps to view, stop, start, restart, resize, and delete a HeatWave Cluster.",
            duration: "1h.51m",
            url: "https://mylearn.oracle.com/ou/course/heatwave-mysql-cluster-architecture-and-deployment/133870/"
        },

        {
            title: "HeatWave MySQL: Accelerating Queries",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course explains the workings of HeatWave Query Accelerator and in the process, you learn how to use Auto Parallel Load to load data into HeatWave Cluster. You learn how to offload queries to HeatWave Cluster and to debug queries. Additionally, you learn how to optimize HeatWave workloads by using advisors, such as Auto Encoding Advisor, Auto Data Placement Advisor, Query Insights, Auto Unload Advisor.",
            duration: "1h.57m",
            url: "https://mylearn.oracle.com/ou/course/heatwave-mysql-accelerating-queries/134358/"
        },

        {
            title: "HeatWave AutoML: In-Database Machine Learning",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course helps you get introduced to HeatWave AutoML solution. You learn how to train a Classification Model and a Regression Model. You then learn to evaluate a Classification Model and a Regression Model and generate Predictions for Classification and Regression Model with HeatWave AutoML. Finally, you learn to generate Explanations for Classification and Regression with HeatWave AutoML.",
            duration: "3h.26m",
            url: "https://mylearn.oracle.com/ou/course/heatwave-automl-in-database-machine-learning/128794/"
        },

        {
            title: "HeatWave Lakehouse: Accessing External Data",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course explains the use of HeatWave Lakehouse solution that enables users to process and query hundreds of terabytes of data in the object store—in a variety of file formats, such as CSV, Parquet, and Aurora/Redshift export files. The data remains in the object store and customer can query it with standard SQL syntax. With this capability, HeatWave provides one service for transaction processing, analytics across data warehouses and data lakes, and machine learning—without ETL across cloud services. There is no additional cost for this capability except the cost of storing the data in object store.",
            duration: "1h.50m",
            url: "https://mylearn.oracle.com/ou/course/heatwave-lakehouse-accessing-external-data/134208/"
        },

        {
            title: "Become a Exadata Database Service Cloud Administrator",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In this Learning Path you will learn how to provision and administer an oracle Database on Oracle Exadata Database Service on dedicated Infrastructure in the Oracle Public Cloud and on Exadata Cloud@Customer. ",
            duration: "6h.51m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-a-exadata-database-service-cloud-administrator/121071"
        },

        {
            title: "Become an Oracle Cloud Database Migration Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Cloud Database Migration Professional learning path provides a comprehensive training pathway designed to equip learners with the skills necessary for migrating databases to Oracle Cloud. This course is ideal for IT professionals, database administrators, and system architects who are involved in planning and executing database migrations.",
            duration: "3h.4m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-cloud-database-migration-professional-2024/138919"
        },

        {
            title: "Oracle APEX: Empowering Low Code Apps with AI",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course covers the latest AI advancements in Oracle APEX. You'll learn how to speed up development with generative AI and AI-assisted features. This includes integrating AI chatbots with Open AI Assistant Dynamic Action, generating SQL queries with APEX Assistant, and creating apps with natural language prompts. You'll also learn to combine Oracle APEX with OCI AI services like Vision, ODA, Document Understanding, Generative AI, and Select AI, and integrate AI Vector Search in Oracle Database 23ai for RAG capabilities.",
            duration: "2h.51m",
            url: "https://mylearn.oracle.com/ou/course/oracle-apex-empowering-low-code-apps-with-ai/138174/"
        },

        {
            title: "Oracle APEX: Empowering Low Code Apps with AI",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "APEX introduces Gen AI to developers! Discover how APEX integrates with AI to offer AI-assisted development and utilize Generative AI services to create AI-powered applications.",
            duration: "2h.51m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-apex-empowering-low-code-apps-with-ai/138290"
        },

        {
            title: "Oracle APEX 23.2 New features",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Oracle APEX 23.2 New features Learning Path is targeted at APEX developers and provides them an overview of  the New Features that have been introduced in Oracle APEX 23.2. You can take an assessment at the end of the Learning Path to earn a badge.",
            duration: "41m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-apex-232-new-features/136469"
        },

        {
            title: "Oracle APEX: Foundations",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get started with low-code application development using Oracle APEX, and learn how to build scalable, secure enterprise apps with world-class features that can be deployed anywhere.",
            duration: "3h. 42m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-apex-foundations/112444"
        },

        {
            title: "Become An Oracle APEX Developer Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "With this Oracle APEX Training, you prepare yourself to use a low-code development platform that enables you to build scalable, secure enterprise apps, with world-class features, that can be deployed anywhere.",
            duration: "13h. 48m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-apex-developer-professional-2023/121230"
        },

        {
            title: "Oracle APEX Developer Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course is designed for Beginners, SQL or PLSQL Developers, Database Developers, or anyone interested in building low-code applications. This course helps you to rapidly build and deploy modern, secure, and scalable applications with Oracle APEX. When you complete this course, you will be equipped to solve real-time business problems using APEX. Lectures, Demos, Skill checks, and Hands-on labs help you gain practical knowledge and understanding of Oracle APEX.",
            duration: "13h. 7m",
            url: "https://mylearn.oracle.com/ou/course/oracle-apex-developer-professional/121250/"
        },

        {
            title: "Exadata Database Service Deep Dive Workshop",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn how to provision and administer the Oracle Database on Exadata Cloud Service and Exadata Cloud@Customer. This course covers advanced techniques for performance tuning, workload optimization, and high availability. ",
            duration: "6h. 51m",
            url: "https://mylearn.oracle.com/ou/course/exadata-database-service-deep-dive-workshop/121072/"
        },

        {
            title: "Become An Oracle Analytics Expert",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In this Learning Path, you will learn how to gain insight into your data with Oracle Analytics Cloud. You will learn four distinct skills that will equip you to perform strategic Business Analytics effectively:",
            duration: "33h. 31m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-analytics-expert-2024/140084"
        },

        {
            title: "Fusion Analytics Warehouse Business User Sessions",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course is an overview of the Fusion Analytics application for users. It provides beginning users with the information they need to start using ERP analytics, HCM Analytics, SCM Analytics or CX Analytics.  The course covers the base functionality of the FAW applications including navigation and using pre-packaged analytical objects. Users will also learn how to create and modify their own Analytic Objects like KPI’s and Decks.",
            duration: "1h. 31m",
            url: "https://mylearn.oracle.com/ou/course/fusion-analytics-warehouse-business-user-sessions/116208/"
        },

        {
            title: "Oracle Analytics Cloud Business User Sessions",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course is an overview of the Oracle Analytics Cloud for users. The course provides beginning users the skills and context they need to start using OAC. The course covers basic functionality and navigation as well as importing data and create new workbooks. Sharing and exporting analytics content is also part of this course. In addition, users will also learn how to apply useful augmented and advanced analytic features to extend their capabilities.",
            duration: "1h. 39m",
            url: "https://mylearn.oracle.com/ou/course/oracle-analytics-cloud-business-user-sessions/111677/"
        },

        {
            title: "Enhanced Visual Analysis with Data Visualization",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Enhance your business insights requirement with Data Visualization on Oracle Analytics Cloud. Learn to upload your own spreadsheets with an intuitive interface. Drag and drop to create your own visualizations. Interact with your data to discover insights. You will learn to manage data to customize Data Visualization.",
            duration: "7h. 53m",
            url: "https://mylearn.oracle.com/ou/course/enhanced-visual-analysis-with-data-visualization/92322/"
        },

        {
            title: "Best Practices for implementing Analytics Cloud",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course will guide you through the best practices that should be followed in for an effective Oracle Analytics Cloud Deployment.",
            duration: "27m",
            url: "https://mylearn.oracle.com/ou/course/best-practices-for-implementing-analytics-cloud/78341/"
        },

        {
            title: "Create Pixel Perfect Reports using Analytics Cloud",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Create Pixel Perfect Reports using Analytics Cloud course is targeted at Business Analysts and teaches how to use Oracle Analytics Publisher to create, manage, and deliver highly formatted documents. This course covers authoring various documents like operational reports, electronic funds transfer documents, and marketing letters. Discover advanced features, document management, integration, and deployment strategies to become an Oracle Analytics Publisher expert.",
            duration: "10h. 35m",
            url: "https://mylearn.oracle.com/ou/course/create-pixel-perfect-reports-using-analytics-cloud/135674/"
        },

        {
            title: "Oracle Big Data Service: Implementation and Administration",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get started with the fundamentals of big data, process flow in big data, and the big data technology stack and learn to implement and administer Oracle Big Data Service, a fully managed, automated cloud service that provides enterprises with a cost-effective Hadoop environment.",
            duration: "8h. 14m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-big-data-service-implementation-and-administration/144189"
        },

        {
            title: "Become a Big Data Administrator on OCI",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get ready to learn some of the amazing features that are unique to Oracle Big Data Service and see how powerful it is.",
            duration: "1h. 45m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-a-big-data-administrator-on-oci/82899"
        },

        {
            title: "Oracle Big Data Service: Implementation and Administration",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get started with the fundamentals of big data, process flow in big data, and the big data technology stack and learn to implement and administer Oracle Big Data Service, a fully managed, automated cloud service that provides enterprises with a cost-effective Hadoop environment.",
            duration: "8h. 14m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-big-data-service-implementation-and-administration/144189"
        },

        {
            title: "Getting Started with Oracle NoSQL Cloud for App Development",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Explore how NoSQL enhances application development by enabling secure database connections, flexible data models, and optimized query performance. Dive into tools and techniques that streamline the process of building, testing, and deploying NoSQL applications. With support for multiple programming languages, developers will be able to create scalable, high-performance solutions tailored to modern development needs. ",
            duration: "2h. 15m",
            url: "https://mylearn.oracle.com/ou/course/getting-started-with-oracle-nosql-cloud-for-app-development/143548/"
        },

        {
            title: "Use Case: Data Science/Machine Learning",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In this Learning Path learn about Machine Learning Platform, how to implement a collaborative Data Science Lab, and Streamline data science project and improve collaboration.",
            duration: "13h. 17m",
            url: "https://mylearn.oracle.com/ou/learning-path/use-case-data-sciencemachine-learning/102134"
        },

        {
            title: "Use Case: Cloud Data Warehouse/Analytics",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This learning path teaches you how to create a data warehouse environment using Oracle Autonomous Database service, migrate an existing on-premise database to cloud, and how to analyze data using Oracle Analytics Cloud to take business critical decisions.",
            duration: "7h. 53m",
            url: "https://mylearn.oracle.com/ou/learning-path/use-case-cloud-data-warehouseanalytics/102132"
        },

        {
            title: "Machine Learning : Use Cases",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Course contains Real life scenarios of using Machine Learning.",
            duration: "2h. 59m",
            url: "https://mylearn.oracle.com/ou/course/machine-learning-use-cases/65283/"
        },

        {
            title: "Use Case: Cloud Data Warehouse/Analytics",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This learning path teaches you how to create a data warehouse environment using Oracle Autonomous Database service, migrate an existing on-premise database to cloud, and how to analyze data using Oracle Analytics Cloud to take business critical decisions.",
            duration: "7h. 53m",
            url: "https://mylearn.oracle.com/ou/learning-path/use-case-cloud-data-warehouseanalytics/102132"
        },

        {
            title: "Become An Oracle Analytics Expert",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In this Learning Path, you will learn how to gain insight into your data with Oracle Analytics Cloud. You will learn four distinct skills that will equip you to perform strategic Business Analytics effectively:",
            duration: "33h. 51m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-analytics-expert-2024/140084"
        },

        {
            title: "Become an Oracle Cloud Database Services Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Cloud Database Services Professional 2024 learning path equips you with the critical skills needed to efficiently manage and operate Oracle Cloud Database Services. This training covers essential areas such as provisioning and managing cloud databases, including Base Database Service, Exadata, MySQL, and NoSQL. You’ll also learn how to scale for performance, ensure data security, and optimize database performance, making you well-prepared for real-world challenges and certification.",
            duration: "8h. 29m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-cloud-database-services-professional-2024/140770"
        },

        {
            title: "Become an Oracle Cloud Database Migration Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Cloud Database Migration Professional learning path provides a comprehensive training pathway designed to equip learners with the skills necessary for migrating databases to Oracle Cloud. This course is ideal for IT professionals, database administrators, and system architects who are involved in planning and executing database migrations.",
            duration: "3h. 4m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-cloud-database-migration-professional-2024/138919"
        },

        {
            title: "Become an Oracle Autonomous Database Cloud Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Autonomous Database Cloud Professional learning path equips individuals with the necessary skills to manage and operate Oracle Autonomous Databases. This training covers essential concepts such as provisioning, managing, and scaling Oracle Autonomous Databases, alongside ensuring data security and implementing performance tuning. Participants will gain a comprehensive understanding, preparing them for real-world applications and certification.",
            duration: "5h. 51m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-autonomous-database-cloud-professional-2024/140240"
        },

        {
            title: "Become an Oracle Machine Learning Associate (Using Autonomous Database)",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This training offers learners the opportunity to gain hands-on experience with Oracle's machine learning tools. Participants will learn to build and deploy machine learning models, integrate these models with Oracle Autonomous Database, and use SQL for machine learning tasks. This training helps address business challenges such as data-driven decision-making, automation of predictive analytics, and improved data management. It's valuable for professionals looking to enhance their skills in  machine learning within the Oracle ecosystem.",
            duration: "2h. 32m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-machine-learning-associate-using-autonomous-database-2024/138903"
        },

        {
            title: "Become a HeatWave MySQL Implementation Associate",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Learning Path provides you with the knowledge required to Provision, Configure, and Manage HeatWave MySQL for Transactions. You will learn to:",
            duration: "10h. 52m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-a-heatwave-mysql-implementation-associate/128102"
        },

        {
            title: "Oracle APEX: Foundations (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle APEXを使用してローコード・アプリケーション開発を開始し、どこにでもデプロイできるワールドクラスの機能を備えたスケーラブルで安全なエンタープライズ・アプリケーションを構築する方法を学びます。この学習パスでは、次のことを学習します。",
            duration: "3h. 51m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-apex-foundations-jp/134146"
        },

        {
            title: "Japanese: Become an Oracle Cloud Infrastructure 2024 Data Foundations Associate (JP) 日本語試験",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            price: "free",
            img: "https://via.placeholder.com/250x150",
            description: "このラーニング・パスでは、Oracle のデータ管理戦略を順を追って説明します。OracleのAutonomous Database の管理方法を学習してから、Exadata や Database Cloud Service などの様々な Oracle Database プラットフォームを確認します。また、Oracle APEX を使用してアプリケーションを迅速に開発する方法もご紹介します。Autonomous Database が多様なタスクやデータ型をどのように処理するかを理解し、データレイクハウスやデータメッシュなどの最新のデータ・アーキテクチャを紹介します。最後に、セキュリティ、可用性、アップグレードに焦点を当てて、データ環境を効果的に管理するスキルを身につけましょう。",
            duration: "7h. 5m",
            url: "https://mylearn.oracle.com/ou/learning-path/japanese-become-an-oracle-cloud-infrastructure-2024-data-foundations-associate-jp-/140908"
        },

        {
            title: "Oracle Autonomous Database Administration Workshop CN",
            language: "chinese",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Autonomous Database Cloud Professional learning path equips individuals with the necessary skills to manage and operate Oracle Autonomous Databases. This training covers essential concepts such as provisioning, managing, and scaling Oracle Autonomous Databases, alongside ensuring data security and implementing performance tuning. Participants will gain a comprehensive understanding, preparing them for real-world applications and certification.",
            duration: "4h. 30m",
            url: "https://mylearn.oracle.com/ou/course/oracle-autonomous-database-administration-workshop-cn/101983/"
        },

        {
            title: "Oracle Database Cloud for DBAs on Oracle Cloud Infrastructure CN",
            language: "chinese",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Database Cloud for DBAs on Oracle Cloud Infrastructure CN",
            duration: "5h. 5m",
            url: "https://mylearn.oracle.com/ou/course/oracle-database-cloud-for-dbas-on-oracle-cloud-infrastructure-cn/101534/"
        },

        {
            title: "Deepdive into Exadata Cloud@Customer Administration CN",
            language: "chinese",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Deepdive into Exadata Cloud@Customer Administration CN",
            duration: "6h. 7m",
            url: "https://mylearn.oracle.com/ou/course/deepdive-into-exadata-cloudcustomer-administration-cn/101922/"
        },

        {
            title: "Enhanced Visual Analysis with Data Visualization CN",
            language: "chinese",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Enhance your business insights requirement with Data Visualization on Oracle Analytics Cloud. Learn to upload your own spreadsheets with an intuitive interface. Drag and drop to create your own visualizations. Interact with your data to discover insights. You will learn to manage data to customize Data Visualization.",
            duration: "2h. 18m",
            url: "https://mylearn.oracle.com/ou/course/enhanced-visual-analysis-with-data-visualization-cn/101789/"
        },

        {
            title: "Programming Fundamentals",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course introduces the fundamental principles of programming and is intended to be a prerequisite for any other programming, or administration class in any on-premises or cloud curriculum. The purpose of this course is to provide basic foundation knowledge for continuous learning of software programming or administration. Overall, the focus of the course is on general principles of programming, regardless of a specific implementation language. Code examples discussed in the course are written in pseudocode and dubbed in other languages: Python, Java, JavaScript and PL/SQL.",
            duration: "2h. 0m",
            url: "https://mylearn.oracle.com/ou/course/programming-fundamentals/124080/"
        },

        {
            title: "Introduction to Oracle Cloud Essentials",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Learning Path introduces you to Cloud Computing and Oracle's Cloud Solutions which include Oracle Cloud Infrastructure and Oracle Cloud Applications. Quick product tours help you experience the capabilities of our OCI and SaaS Platforms.",
            duration: "2h. 8m",
            url: "https://mylearn.oracle.com/ou/learning-path/introduction-to-oracle-cloud-essentials/115954"
        },

        {
            title: "Developing Redwood Applications with Visual Builder Studio",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get introduced to Redwood, Oracle’s next generation user experience and Visual Builder Studio, Oracle's tool of choice for building Redwood applications.Learn how Visual Builder Studio brings together the full power and productivity of all the Redwood components and enables Low-Code Redwood app creation. You can use Visual Builder Studio to extend your Oracle Cloud Applications or to build new applications.",
            duration: "19h. 11m",
            url: "https://mylearn.oracle.com/ou/learning-path/developing-redwood-applications-with-visual-builder-studio/112791"
        },

        {
            title: "Web Application Development in Oracle Cloud",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This learning path consists of courses that would help Developers to design, build, and deploy Web Applications using JavaScript, HTML5, CSS, and Visual Builder Studio.",
            duration: "34h. 00m",
            url: "https://mylearn.oracle.com/ou/learning-path/web-application-development-in-oracle-cloud/121566"
        },


        {
            title: "Develop Fusion Applications using Visual Builder Studio",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Want to turn your ideas into powerful apps? You're in the right place! Learn to use Visual Builder Studio to customize and extend user interfaces. With hands-on practices, you'll be equipped to create, edit, enhance, maintain, and deploy App UI-based extensions for Fusion Apps.",
            duration: "12h. 30m",
            url: "https://mylearn.oracle.com/ou/course/develop-fusion-applications-using-visual-builder-studio/138392/"
        },

        {
            title: "Design and Develop Redwood Applications (New)",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "• Use the Redwood Design System (RDS) and Redwood Development processes and tools to develop software applications that clearly meet users' goals • Identify relevant patterns, templates and components to fully express the design  • Refine the design using the Redwood PowerPoint template • Validate the design prior to development • Configure patterns, templates and components for use in applications • Use telemetry to gather feedback and refine the design with ongoing feedback • Develop the application in Visual Builder based on the design and chosen components",
            duration: "6h. 30m",
            url: "https://mylearn.oracle.com/ou/course/design-and-develop-redwood-applications-new/135453/"
        },

        {
            title: "Become an Oracle Content Management Implementation Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Content Management Implementation Essentials course is your entry point for learning how to implement Oracle Content! ",
            duration: "5h. 55m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-content-management-implementation-professional/122394"
        },

        {
            title: "Developing Portals with WebCenter Portal Cloud",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn to build an enterprise Portal application with Oracle WebCenter Portal Cloud. You can easily and quickly build engaging, dynamic intranets, extranets, composite applications, and self-service portals for every part of your business.",
            duration: "13h. 26m",
            url: "https://mylearn.oracle.com/ou/course/developing-portals-with-webcenter-portal-cloud/51269/"
        },

        {
            title: "Become a Blockchain Developer",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In this Learning Path, get an overview of Oracle Blockchain Platform, its features and architecture. Get hands-on experience configuring a network, creating channels and using REST APIs. Learn to develop chaincodes (smart contracts) and then deploy them on to Oracle Blockchain Platform.",
            duration: "6h. 30m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-a-blockchain-developer/61184"
        },
        

        {
            title: "Become a Mobile App Developer",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn the skills required to be a Mobile Apps developer on Cloud. Use Mobile Cloud to build and deploy back end services for mobile apps. Also, learn to build custom APIs to expose the backend services. ",
            duration: "10h. 16m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-a-mobile-app-developer/65949"
        },

        {
            title: "Serverless ETL using OCI Data Integration",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Cloud Infrastructure Data Integration is a cloud native, serverless ETL (extract, load, transform) service on the Oracle Cloud. Learn to simplify integration within the OCI eco-system with a graphical, no-code user interface that guides you through building the integration code.",
            duration: "4h. 46m",
            url: "https://mylearn.oracle.com/ou/course/serverless-etl-using-oci-data-integration/84787/"
        },

        {
            title: "Become An Application Integration Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Integration (OIC) provides a fully managed, preconfigured environment that gives you the power to integrate your cloud and on-premises applications. Developers and Cloud Architects can connect SaaS and on-premises applications six times faster with a visual development experience, prebuilt integrations, and embedded best practices.",
            duration: "20h. 10m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-application-integration-professional-2024/138143"
        },

        {
            title: "Developing Redwood Applications with Visual Builder Studio",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get introduced to Redwood, Oracle’s next generation user experience and Visual Builder Studio, Oracle's tool of choice for building Redwood applications.Learn how Visual Builder Studio brings together the full power and productivity of all the Redwood components and enables Low-Code Redwood app creation. You can use Visual Builder Studio to extend your Oracle Cloud Applications or to build new applications.",
            duration: "19h. 11m",
            url: "https://mylearn.oracle.com/ou/learning-path/developing-redwood-applications-with-visual-builder-studio/112791"
        },

        {
            title: "Become an Oracle Content Management Implementation Professional",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Content Management Implementation Essentials course is your entry point for learning how to implement Oracle Content! ",
            duration: "5h. 55m",
            url: "https://mylearn.oracle.com/ou/learning-path/become-an-oracle-content-management-implementation-professional/122394"
        },

        {
            title: "Administering Oracle WebLogic Server for OCI",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In this course, you’ll learn how to provision WebLogic Server domains and clusters on virtual machines in Oracle Cloud. You'll start by mastering the basics of WebLogic Server, and then move on to developing and deploying Java Enterprise Edition applications. By the end of this course, you'll be ready to efficiently administer and optimize WebLogic Server in the cloud. ",
            duration: "13h. 13m",
            url: "https://mylearn.oracle.com/ou/course/administering-oracle-weblogic-server-for-oci/145649/"
        },

        {
            title: "Rapid Development of SOA Applications using SOA Suite on OCI Marketplace",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle SOA Suite on Marketplace provides a complete set of service infrastructure components for designing, deploying, and managing composite applications. Learn about the rich variety of features provided by Oracle SOA Suite on Marketplace. ",
            duration: "3h. 3m",
            url: "https://mylearn.oracle.com/ou/course/rapid-development-of-soa-applications-using-soa-suite-on-oci-marketplace/98607/"
        },

        {
            title: "Oracle Coherence Cloud Fundamentals",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Coherence Cloud offers the capabilities of Oracle Coherence in the Oracle Cloud Infrastructure Environment. Start your learning journey by exploring the capabilities and architecture of Coherence Cloud. Learn to provision Coherence Cluster in a private and public subnet. You will also learn to seamlessly manage and scale a Coherence Cluster. ",
            duration: "1h. 46m",
            url: "https://mylearn.oracle.com/ou/course/oracle-coherence-cloud-fundamentals/77799/"
        },

        {
            title: "Build Visual Applications using Oracle Visual Builder Studio (JP)",
            language: "japanese",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Visual Builder Studioを使用すると、統合されたアジャイルおよびコラボレーティブな開発によるビジュアル開発環境を使用して、アプリケーションを迅速に作成および拡張することができます。 ",
            duration: "15h. 16m",
            url: "https://mylearn.oracle.com/ou/course/build-visual-applications-using-oracle-visual-builder-studio-jp/109372/"
        },


        {
            title: "Discover and Train in CyberSecurity",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Be Cybersmart! Be a part of the CyberSecurity Awareness Month by taking this free training!",
            duration: "2h. 57m",
            url: "https://mylearn.oracle.com/ou/learning-path/discover-and-train-in-cybersecurity/100307"
        },
        

        {
            title: "Build and Deploy a Microservice to Docker and Kubernetes",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course teaches the practical skills needed for end-to-end development of microservices for Cloud Native: from code to deploying to a container in Kubernetes. Students learn the foundational skills using standard open source solutions like Docker, Jenkins and Minikube and then deploy this solution to Oracle Cloud using Oracle Cloud Infrastructure Registry(OCIR), Oracle Container for Kubernetes (OKE) and Visual Builder Studio for the Continuous Integration/Continuous Deployment (CI/CD) pipeline to build a Docker image and deploy to OCIR. Oracle Autonomous Transaction Database is used for storage. The course uses a combination of digitally recorded lectures and demos supported with guided tutorials that the students can follow in hands-on lab practices.",
            duration: "4h. 17m",
            url: "https://mylearn.oracle.com/ou/course/build-and-deploy-a-microservice-to-docker-and-kubernetes/103544/"
        },

        {
            title: "Discover and Train in CyberSecurity",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Be Cybersmart! Be a part of the CyberSecurity Awareness Month by taking this free training!",
            duration: "2h. 57m",
            url: "https://mylearn.oracle.com/ou/learning-path/discover-and-train-in-cybersecurity/100307"
        },

        {
            title: "Developing Web Applications with JavaScript, HTML5, and CSS",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Develop front-end web application using JavaScript, HTML5 and CSS. Course starts with the coverage of web application fundamental concepts, JavaScript language syntax, construction user interfaces using HTML5 and CSS, building application logic using JavaScript, and eventually progresses to advanced topics such as using JavaScript to interact with server-side components, such as WebServices and WebSockets.",
            duration: "20h. 27m",
            url: "https://mylearn.oracle.com/ou/course/developing-web-applications-with-javascript-html5-and-css/121027/"
        },

        {
            title: "Oracle Content Management Implementation Essentials",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The “Oracle Content Management Implementation Essentials” course is your entry point for learning how to implement Oracle Content! Throughout the “Oracle Content Management Implementation Essentials” course you will be covering foundational topics such as Architecture, Security, Content Modelling, but also more advanced topics revolving around the core use-cases Digital Asset Management & Digital Experience Management (SiteBuilder & Headless). Additionally, you will also have an overview of the approach to implementing for each use-case and some of the best practices to consider.",
            duration: "5h. 49m",
            url: "https://mylearn.oracle.com/ou/course/oracle-content-management-implementation-essentials/122457/"
        },

        {
            title: "Blockchain Development for Oracle Blockchain Platform",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Blockchain Development for Oracle Blockchain Platform course is targeted at developers and teaches how to create applications on the Oracle Blockchain Platform. It covers blockchain basics, the architecture of the Oracle Blockchain Platform, and practical experience in smart contract development. Upon completion of this course, you will learn:",
            duration: "4h. 21m",
            url: "https://mylearn.oracle.com/ou/course/blockchain-development-for-oracle-blockchain-platform/133591/"
        },

        {
            title: "Oracle Data Integrator 12c: Integration and Administration",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Data Integrator is a comprehensive data integration platform that covers all data integration requirements from high-volume, high-performance batch loads, to event-driven integration processes and SOA-enabled data services. Oracle Data Integrator's Extract, Load, Transform (E-LT) architecture leverages disparate RDBMS engines to process and transform the data - the approach that optimizes performance, scalability and lowers overall solution costs.",
            duration: "17h. 3m",
            url: "https://mylearn.oracle.com/ou/course/oracle-data-integrator-12c-integration-and-administration/51047/"
        },

        {
            title: "Application Integration, Process & Visual Apps : Level 4",
            language: "english",
            category: "cloud infrastructure",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Integration suite of Cloud services simplifies application integration, process automation, real-time business insights, and more! This Learning Path strings together the key courses that help you embark on a successful journey to master the Oracle Integration Cloud Services",
            duration: "22h. 57m",
            url: "https://mylearn.oracle.com/ou/learning-path/application-integration-process-visual-apps-level-4/124090"
        },


        // End Oracle Cloud Infrastructure





        // Start Oracle industries

        {
            title: "Primavera Cloud Schedule Management",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn application basics and how to manage a project from planning to execution.",
            duration: "4h. 26m",
            url: "https://mylearn.oracle.com/ou/learning-path/primavera-cloud-schedule-management/94337"
        },


        {
            title: "Primavera Cloud Portfolio Management ",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn application basics and how to manage capital planning and portfolios..",
            duration: "2h. 44m",
            url: "https://mylearn.oracle.com/ou/learning-path/primavera-cloud-portfolio-management/100285"
        },



        {
            title: "Primavera Cloud Administration",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn how to get up and running in the Oracle Cloud, and then how to manage users, security, and workspaces in the application.",
            duration: "1h. 52m",
            url: "https://mylearn.oracle.com/ou/learning-path/primavera-cloud-administration/101741"
        },


        {
            title: "Primavera Cloud Schedule Management",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Textura Payment Management for General Contractors",
            duration: "2h. 22m",
            url: "https://mylearn.oracle.com/ou/learning-path/textura-payment-management-for-general-contractors/100646"
        },




        {
            title: "Textura Payment Management for Subcontractors",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This video course, aimed at subcontractors, describes how to manage contracts, change orders, and invoices.",
            duration: "2h. 22m",
            url: "https://mylearn.oracle.com/ou/learning-path/textura-payment-management-for-subcontractors/94483"
        },

        {
            title: "Textura Payment Management for Subcontractors",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This video course, aimed at subcontractors, describes how to manage contracts, change orders, and invoices.",
            duration: "1h. 45m",
            url: "https://mylearn.oracle.com/ou/learning-path/textura-payment-management-for-subcontractors/94483"
        },

        {
            title: "Primavera Cloud Schedule Management",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Textura Payment Management for General Contractors",
            duration: "2h. 22m",
            url: "https://mylearn.oracle.com/ou/learning-path/textura-payment-management-for-general-contractors/100646"
        },

        {
            title: "Construction Intelligence Cloud - Analytics",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This learning path covers how to build visualizations and key performance indicators in CIC Analytics. The Administration Application course helps administrators configure users and data sources.",
            duration: "1h. 12m",
            url: "https://mylearn.oracle.com/ou/learning-path/construction-intelligence-cloud-analytics/94516"
        },

        {
            title: "Primavera Unifier",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This learning path provides courses for administrators and end-users. Earn a badge by answering questions about the Managing a Project course, which uses preconfigured business processors that are part of the Accelerator pack installed with new versions of the product.",
            duration: "2h. 59m",
            url: "https://mylearn.oracle.com/ou/learning-path/primavera-unifier/97833"
        },

        {
            title: "Aconex Complete",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This learning path introduces the fundamentals of Aconex. It provides you with the knowledge to make Aconex easier and more effective. You’ll learn about the Aconex model, how organizations create and share information and the importance of revision control.",
            duration: "5h. 18m",
            url: "https://mylearn.oracle.com/ou/learning-path/aconex-complete/88105"
        },

        {
            title: "Aconex Associate",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This path introduces the fundamentals of Aconex. It provides you with the knowledge to make Aconex easier and more effective. You’ll learn about the Aconex model, how organizations create and share information and the importance of revision control.",
            duration: "2h. 03m",
            url: "https://mylearn.oracle.com/ou/learning-path/aconex-associate/77697"
        },


        {
            title: "Aconex Professional",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This path builds on the fundamentals of Aconex. It provides you with additional knowledge to help you get the most from Aconex. You’ll learn about managing larger volumes of information and the principles of good document control.",
            duration: "1h. 33m",
            url: "https://mylearn.oracle.com/ou/learning-path/aconex-professional/80554"
        },


        {
            title: "Aconex Associate",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This path introduces the fundamentals of Aconex. It provides you with the knowledge to make Aconex easier and more effective. You’ll learn about the Aconex model, how organizations create and share information and the importance of revision control.",
            duration: "2h. 03m",
            url: "https://mylearn.oracle.com/ou/learning-path/aconex-associate/77697"
        },


        {
            title: "Aconex Specialist",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This path introduces Aconex administration. It provides you with the knowledge to successfully manage your organization, its users and your projects. You’ll learn good practice principles and the importance of documenting the how your project is configured.",
            duration: "1h. 59m",
            url: "https://mylearn.oracle.com/ou/learning-path/aconex-specialist/83038"
        },


        {
            title: "Primavera P6",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn to plan, execute, and update a project in this comprehensive video series, which also includes P6 Visualizer.",
            duration: "2h. 24m",
            url: "https://mylearn.oracle.com/ou/learning-path/primavera-p6/94495"
        },


        {
            title: "Primavera P6 Professional",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn to plan, execute, and update a project in this comprehensive video series covering the P6 Windows client.",
            duration: "4h. 08m",
            url: "https://mylearn.oracle.com/ou/learning-path/aconex-associate/77697"
        },


        {
            title: "Primavera Analytics",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn to view preconfigured dashboards and build your own analyses in this business intelligence tool.",
            duration: "1h. 26m",
            url: "https://mylearn.oracle.com/ou/learning-path/primavera-analytics/101015"
        },


        {
            title: "Virtual Course: Primavera P6",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn all about P6 and enhance that knowledge with hands on activities in a live lab environment. Study the fundamentals of P6, covering the lifecycle of project management, build your first project and add in all the required building blocks, such as: Activities, Relationships, Scheduling and Roles & Resources.",
            duration: "18h. 32m",
            url: "https://mylearn.oracle.com/ou/learning-path/virtual-course-primavera-p6/77601"
        },


        {
            title: "Virtual Course: P6 Professional",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn to plan and execute a project with these virtual courses, which include advanced resource management and earned value.",
            duration: "14h. 04m",
            url: "https://mylearn.oracle.com/ou/learning-path/virtual-course-p6-professional/83415"
        },


        {
            title: "Virtual Course: Primavera Unifier Administration",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Administration, uDesigner, and Reports are covered in these virtual courses that include access to the live software.",
            duration: "22h. 16m",
            url: "https://mylearn.oracle.com/ou/learning-path/virtual-course-primavera-unifier-administration/56284"
        },


        {
            title: "Oracle Utilities AMS Certification",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about the Oracle Utilities Advanced Metering Solution, including implementation training and new features leading to the MSCS certification.",
            duration: "20h. 4m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-ams-certification/127538"
        },


        {
            title: "Oracle Utilities Integrations",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about the Oracle Utilities integrations, including overviews of available integrations, as well as integration-specific courses that provide details regarding the business flows and functionality offered with each.",
            duration: "2h. 38m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-integrations/117392"
        },


        {
            title: "Oracle Utilities: NMS v2.5 Fundamentals",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Utilities Network Management System (NMS) v2.5 Fundamentals course will give the student an understanding of the fundamentals of this leading end-to-end distribution management platform with advanced optimization, outage and field management capabilities.  NMS helps utilities safeguard workers and the public, improve restoration time and efficiency, and reduce the costs, risks, and uncertainties of energy distribution operations. ",
            duration: "10h. 16m",
            url: "https://mylearn.oracle.com/ou/course/oracle-utilities-nms-v25-fundamentals/110261/"
        },

        {
            title: "Virtual Course: Primavera Unifier Administration",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Administration, uDesigner, and Reports are covered in these virtual courses that include access to the live software.",
            duration: "10h. 56m",
            url: "https://mylearn.oracle.com/ou/learning-path/virtual-course-primavera-unifier-administration/56284"
        },

        {
            title: "Oracle Utilities: OMS v2.5 Fundamentals",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Utilities Outage Management System (OMS) v2.5 Fundamentals course will focus on the outage management operations tools and trouble analysis system.  The OMS provides real-time data needed to efficiently, safely, and reliably operate an electrical distribution system. You can use the system to integrate outage, switching, power flow, and work management functions into a seamless system.",
            duration: "9h. 2m",
            url: "https://mylearn.oracle.com/ou/course/oracle-utilities-oms-v25-fundamentals/114393/"
        },

        {
            title: "Oracle Utilities: DMS v2.5 Fundamentals",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Utilities Distribution Management System (DMS) v2.5 Fundamentals course will identify the parts of an DMS, and get the student to become familiar with the tools and applications available within DMS.  ",
            duration: "6h. 19m",
            url: "https://mylearn.oracle.com/ou/course/oracle-utilities-dms-v25-fundamentals/114394/"
        },

        {
            title: "Oracle Utilities Cloud Service Foundation Architect",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This learning path provides an overview of key concepts for Cloud Service Foundation Architects.  You will learn about Security, batch processing and monitoring, Configuration Migration Assitant (CMA) and Information Lifecycle Management",
            duration: "1h. 23m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-cloud-service-foundation-architect/108682"
        },

        {
            title: "Oracle Utilities & OCI SaaS Platform Relationship",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "In order to have a successful and efficient path to set up and integration, it is important to understand the underlying OCI infrastructure sitting beneath the UGBU SaaS Platform, and the relationship between OCI and the Utilities SaaS Platform . This learning path will allow you to understand the range of Networking Options for connecting to the SaaS Platform, in order to make the best choice for you organization.  How to use OCI IAM Identity Domain for setting up users/groups/app roles, set up Cloud Object Storage for their Utilities SaaS, apply Oracle Cloud Integration where necessary and be knowledge of Oracle Utilities patching and update methodology, including the Upgrade Policy and release schedule.",
            duration: "4h. 59m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-oci-saas-platform-relationship/108664"
        },

        {
            title: "Oracle Utilities Analytics Warehouse",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "An overview of the functionality in the Oracle Utilities Analytics Warehouse and links to the learning paths of Data Warehouse Concepts and the prerequisite Oracle technologies.  This Learning path is intended for an Oracle Utilities Analytics Warehouse implementor or administrator.  The Implementation training recommendations may take you to other Learning Subscriptions for technical tools training.",
            duration: "23m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-analytics-warehouse/96300"
        },

        

        {
            title: "Oracle Utilities Enterprise SaaS Implementation Topics",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Oracle Utilities Enterprise SaaS Training learning path provides an overview of the key concepts when implementing Oracle Utilities Enterprise SaaS solutions.  You will learn about Oracle Utilities SaaS solutions, how to get started, the provisioning process and deep dive into key implementation topics.",
            duration: "1h. 25m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-enterprise-saas-implementation-topics/95536"
        },

        {
            title: "Oracle Utilities Live Energy Connect Configuration Manager",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Utilities Live Energy Connect (LEC) Configuration Manager is a middleware product that lets you design, modify, and monitor your LEC server configurations. In this learning path, you will learn the architecture of Oracle Utilities LEC Configuration Manager and LEC Sever. You will also learn how to use LEC Configuration Manager to import configurations, load batch files, and understand some advanced configuration setups.",
            duration: "1h. 03m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-live-energy-connect-configuration-manager/92169"
        },


        {
            title: "Oracle Utilities WAM/WACS Certification",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about the Oracle Utilities Work and Asset Cloud Service (WACS) and Work and Asset Management (WAM) solution, including an overview of functionality, implementation training and the Oracle Utilities Application Framework all leading to the WACS.",
            duration: "14h. 36m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-wamwacs-certification/88015"
        },

        {
            title: "Oracle Utilities Work and Asset Cloud Service",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about the Oracle Utilities Work and Asset Cloud Service (WACS) solution, including an overview of functionality, implementation training and the Oracle Utilities Application Framework.",
            duration: "57h. 37m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-work-and-asset-cloud-service/87958"
        },

        {
            title: "Oracle Utilities C2M/CCS Certification",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about the Oracle Utilities Customer Cloud Service (CCS) and Customer to Meter (C2M) solution, including an overview of functionality and implementation training all leading to the CCS certification.",
            duration: "18h. 25m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-c2mccs-certification/87952"
        },

        {
            title: "Oracle Utilities MDM/MSCS Certification",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about the Oracle Utilities Meter Solution Cloud Service (MSCS) and Meter Data Management (MDM) solution, including implementation training and all the new features leading to the MSCS certification.",
            duration: "16h. 00m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-mdmmscs-certification/97985"
        },


        {
            title: "Oracle Utilities Meter Solution Cloud Service",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about the Oracle Utilities Meter Solution Cloud Service (MSCS) solution, including an overview of functionality, implementation training and the Oracle Utilities Application Framework.",
            duration: "18h. 21m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-meter-solution-cloud-service/87955"
        },


        {
            title: "Oracle Utilities Customer To Meter",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about key Customer to Meter functionality as well as important implementation topics such as configuration.",
            duration: "38h. 11m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-customer-to-meter/59066"
        },

        {
            title: "Oracle Utilities Customer Care and Billing",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about key Customer Care and Billing functionality as well as important implementation topics such as configuration.",
            duration: "19h. 14m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-customer-care-and-billing/67122"
        },

        {
            title: "Oracle Utilities Meter Data Management",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about key Meter Data Management functionality as well as important implementation topics such as configuration.",
            duration: "51h. 38m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-meter-data-management/67121"
        },

        {
            title: "Oracle Utilities Network Management System",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about key Network Management System functionality as well as important implementation topics such as configuration.",
            duration: "78h. 45m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-network-management-system/67136"
        },

        {
            title: "Oracle Utilities Application Framework",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Take this video series to gain a foundational understanding of the structure and operation of Oracle Utilities Application Framework, how it works, and how it can be extended so you can make improved decisions during your implementation.",
            duration: "47h. 22m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-application-framework/66269"
        },

        {
            title: "Oracle Utilities Testing Accelerator",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about the Oracle Utilities Testing Accelerator, an automated testing solution, that introduces new optimized and focussed solutions for the Oracle Utilities products.",
            duration: "3h. 31m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-testing-accelerator/65515"
        },

        {
            title: "Oracle Utilities Smart Grid Gateway",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about key Smart Grid Gateway functionality as well as important implementation topics such as configuration.",
            duration: "37h. 33m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-smart-grid-gateway/67107"
        },

        {
            title: "Oracle Utilities Operational Device Management",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about key Operational Device Management functionality as well as important implementation topics such as configuration.",
            duration: "4h. 25m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-operational-device-management/66265"
        },

        {
            title: "Oracle Utilities Service Order Management",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about key Service Order Management functionality as well as important implementation topics such as configuration.",
            duration: "7h. 48m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-service-order-management/67106"
        },

        {
            title: "Oracle Utilities Work and Asset Management",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about key Work and Asset Management functionality as well as important implementation topics such as configuration.",
            duration: "54h. 17m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-work-and-asset-management/67105"
        },

        {
            title: "Oracle Utilities Customer to Meter – Customer Operations",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Utilities Customer to Meter – Customer Operations focuses on specific capabilities and supporting billing related functions within Oracle Utilities Customer to Meter.",
            duration: "28h. 15m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-customer-to-meter-customer-operations/104985"
        },

        {
            title: "MDM/SGG/MSCS New Features",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Documents that detail the new features of the Meter Data Management, Smart Grid Gateway and Meter Solution Cloud Service product areas",
            duration: "1h. 40m",
            url: "https://mylearn.oracle.com/ou/course/mdmsggmscs-new-features/77464/"
        },

        {
            title: "Oracle Utilities: WAM v2.2.0.4 Fundamentals",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course focuses on providing a solid understanding of work and asset functionality and key concepts using hands-on exercises with real-world examples. Attendees will learn how to navigate the application to manage their work processes and business needs. This course helps students understand how they can use the system to manage Inventory, purchasing, approvals, resources, and other work and asset processes",
            duration: "19h. 9m",
            url: "https://mylearn.oracle.com/ou/course/oracle-utilities-wam-v2204-fundamentals/76605/"
        },

        {
            title: "C2M/CCS New Features",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Documents that detail the new features of the Customer to Meter and Customer Cloud Services product areas",
            duration: "1h. 15m",
            url: "https://mylearn.oracle.com/ou/course/c2mccs-new-features/77462/"
        },

        {
            title: "CC&B V2.5 New Features",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Customer Care and Billing V2.5 New Features.",
            duration: "2h. 15m",
            url: "https://mylearn.oracle.com/ou/course/ccb-v25-new-features/67125/"
        },

        {
            title: "Oracle Utilities: Customer To Meter v2.9.0.0 Overview",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Customer To Meter Overview training provides a good grounding in the Customer to Meter product and explains the basics on the 2.9 release.",
            duration: "3h. 11m",
            url: "https://mylearn.oracle.com/ou/course/oracle-utilities-customer-to-meter-v2900-overview/116735/"
        },

        {
            title: "Oracle Utilities: Meter Data Management Fundamentals",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Meter Data Management Fundamentals",
            duration: "13h. 40m",
            url: "https://mylearn.oracle.com/ou/course/oracle-utilities-meter-data-management-fundamentals/66741/"
        },

        {
            title: "Introduction to Oracle Utilities Testing Accelerator",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "You will learn the basics of the Testing Accelerator, installation and configuration.  Looking into administration, the embedded tools in the product and finally will learn about the components and flow of a test.",
            duration: "3h. 31m",
            url: "https://mylearn.oracle.com/ou/course/introduction-to-oracle-utilities-testing-accelerator/65517/"
        },

        {
            title: "Oracle Utilities: WAM v2.1.1 Fundamentals",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Utilities Work and Asset Management Fundamentals training is an in-depth look at core features and functions of the product",
            duration: "13h. 19m",
            url: "https://mylearn.oracle.com/ou/course/oracle-utilities-wam-v211-fundamentals/67275/"
        },

        {
            title: "Oracle Utilities & OCI SaaS Platform Relationship",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course gives a good understanding of the key areas and concepts that are required to be able to work with both Oracle Utilities applications and the OCI SaaS platform. ",
            duration: "4h. 59m",
            url: "https://mylearn.oracle.com/ou/course/oracle-utilities-oci-saas-platform-relationship/108665/"
        },

        {
            title: "Oracle Utilities: Network Management System Fundamentals",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Network Management System training provides an overview of the features and functions of Oracle Utilities Network Management System.",
            duration: "26h. 6m",
            url: "https://mylearn.oracle.com/ou/course/oracle-utilities-network-management-system-fundamentals/66768/"
        },

        {
            title: "Oracle Utilities & OCI SaaS Platform Relationship",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course gives a good understanding of the key areas and concepts that are required to be able to work with both Oracle Utilities applications and the OCI SaaS platform. ",
            duration: "4h. 59m",
            url: "https://mylearn.oracle.com/ou/course/oracle-utilities-oci-saas-platform-relationship/108665/"
        },

        {
            title: "Oracle Utilities: Service Order Management Fundamentals",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about the product’s base functionality and how it addresses business needs. ",
            duration: "7h. 48m",
            url: "https://mylearn.oracle.com/ou/course/oracle-utilities-service-order-management-fundamentals/66845/"
        },


        {
            title: "Introduction to Oracle Utilities Testing Accelerator",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "You will learn the basics of the Testing Accelerator, installation and configuration.  Looking into administration, the embedded tools in the product and finally will learn about the components and flow of a test.",
            duration: "3h. 31m",
            url: "https://mylearn.oracle.com/ou/course/introduction-to-oracle-utilities-testing-accelerator/65517/"
        },


        {
            title: "Oracle Utilities: WAM v2.2.0.4 Fundamentals",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course focuses on providing a solid understanding of work and asset functionality and key concepts using hands-on exercises with real-world examples. Attendees will learn how to navigate the application to manage their work processes and business needs.This course helps students understand how they can use the system to manage Inventory, purchasing, approvals, resources, and other work and asset processes",
            duration: "19h. 9m",
            url: "https://mylearn.oracle.com/ou/course/oracle-utilities-wam-v2204-fundamentals/76605/"
        },


        {
            title: "Oracle Utilities Rate Cloud Service",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about the Oracle Utilities Rate Cloud Service (RCS) solution, including an overview of functionality, implementation training, and the Oracle Utilities Application Framework. ",
            duration: "6h. 1m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-rate-cloud-service/123290"
        },


        {
            title: "Oracle Utilities Integrations",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "TLearn about the Oracle Utilities integrations, including overviews of available integrations, as well as integration-specific courses that provide details regarding the business flows and functionality offered with each. ",
            duration: "2h. 38m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-integrations/117392"
        },


        {
            title: "Oracle Utilities Billing Cloud Service",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about the Oracle Utilities Billing Cloud Service (BCS) solution, including an overview of functionality, implementation training, and the Oracle Utilities Application Framework.",
            duration: "15h. 58m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-utilities-billing-cloud-service/96208"
        },


        {
            title: "Session Border Controller (SBC)",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn all about the Oracle Session Border Controller (SBC), this path will guide you through: Configuration and Administration, then look at some more advanced configuration and finally troubleshooting the system. Note: This learning path does not have hand on labs, this will be lecture and demonstration only",
            duration: "57h. 17m",
            url: "https://mylearn.oracle.com/ou/learning-path/session-border-controller-sbc/78900"
        },

        {
            title: "5G Cloud Native Core Products Training",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn all about Oracle Communications 5G Cloud Native Core products, such as various Oracle Core Network Functions, Cloud Native Database Tier, Network Analytics Data Director, and Cloud Native Configuration Console. The learning path starts with an overview on 5G technologies in general, followed by an overview on Oracle Communications 5G Core Solution in particular",
            duration: "12h. 44m",
            url: "https://mylearn.oracle.com/ou/learning-path/5g-cloud-native-core-products-training/106002"
        },

        {
            title: "SD-WAN",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Understand the key concepts of SD-WAN.",
            duration: "5h. 10m",
            url: "https://mylearn.oracle.com/ou/learning-path/sd-wan/78901"
        },

        {
            title: "EAGLE",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about Oracle Communications EAGLE and how it operates.",
            duration: "11h. 42m",
            url: "https://mylearn.oracle.com/ou/learning-path/eagle/78902"
        },

        {
            title: "S Oracle Comms EAGLE GTT and Gateway Screening",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Oracle Communications EAGLE GTT and Gateway Screening training blends SS7 theory with intense practical GTT and GWS applications for the Oracle Communications EAGLE products. You'll identify and create global title translations and gateway screening tables for multiple scenarios from the simple to the most complicated.",
            duration: "6h. 39m",
            url: "https://mylearn.oracle.com/ou/course/s-oracle-comms-eagle-gtt-and-gateway-screening/72226/"
        },

        {
            title: "S Oracle SD-WAN Technical Training",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course introduces the key technical concepts of Oracle’s SD-WAN offering and equips attendees with the skills to configure and troubleshoot an Oracle SD-WAN global network.  Essential elements of network, site, and quality of service configuration are demonstrated in detail alongside related monitoring and troubleshooting activities enabled by the SD-WAN appliance GUI.  This course also provides best practice recommendations for efficient implementation, provisioning, and maintenance of the SD-WAN configuration and network",
            duration: "5h. 10m",
            url: "https://mylearn.oracle.com/ou/course/s-oracle-sd-wan-technical-training/72200/"
        },

        {
            title: "Oracle Communications Network Analytics Data Director",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course currently consists of three lessons. It covers the fundamentals of the Oracle Communications Network Analytics Data Director (OCNADD), such as OCNADD features, architecture, and deployment models, as well as deployment procedures. Each lesson is presented as a separate learning video. Video length in total is 120 minutes. OCNADD GUI installation and feed configuration lessons will be added to the course in the future.",
            duration: "1h. 58m",
            url: "https://mylearn.oracle.com/ou/course/oracle-communications-network-analytics-data-director/121121/"
        },

        {
            title: "Oracle Communications Cloud Native Network Repository Function",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course covers an overview of the OCNRF fundamentals and architecture, the essential microservices, service operations and configurations using REST APIs and the Configuration Console (CNCC), details on the Access Token microservice including the CCA header and Access Token request and their service operations and configurations, as well as the OCNRF deployment and uninstallation procedures. Each lesson is presented as a learning video along with demos, if applicable.",
            duration: "3h. 56m",
            url: "https://mylearn.oracle.com/ou/course/oracle-communications-cloud-native-network-repository-function/134199/"
        },

        {
            title: "Oracle Communications Cloud Native Core DBTier (cnDBTier)",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Comprehensive understanding of cnDBtier architecture and how it provides persistent storage to the Network Functions makes the tasks involved with data storage easier when deploying, configuring, and troubleshooting Network Functions.",
            duration: "3h. 8m",
            url: "https://mylearn.oracle.com/ou/course/oracle-communications-cloud-native-core-dbtier-cndbtier/109479/"
        },

        {
            title: "S Oracle Comms EAGLE E5-MS Administrator",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "By taking this course, you'll get a chance to focus on the different mechanisms to improve surveillance and maintenance of a network of EAGLE STPs. This includes real-time graphical alarm presentation, centralized user interface, real-time event capture and presentation of EAGLE health, configuration and performance.",
            duration: "5h. 4m",
            url: "https://mylearn.oracle.com/ou/course/s-oracle-comms-eagle-e5-ms-administrator/72236/"
        },
        
        {
            title: "Oracle SBC Additional Content: SIP Signaling Services",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course contains lessons on the CNCC deployment and upgrade procedures, along with demos on CNCC 23.1.0 helm install process, accessing CNCC GUIs, CNCC 23.1.0 helm uninstall process, and CNCC helm upgrade from 23.1.0 to 23.3.1.",
            duration: "1h. 16m",
            url: "https://mylearn.oracle.com/ou/course/oracle-communications-cloud-native-configuration-console/123623/"
        },

        {
            title: "Oracle SBC Additional Content: Security",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course contains additional content that is supplementary to any of the standard courses within this learning path.  The content covers various areas that will enhance the learning experience and provide more in depth training on new and extra functionality..",
            duration: "2h. 22m",
            url: "https://mylearn.oracle.com/ou/course/oracle-sbc-additional-content-security/87768/"
        },

        {
            title: "Oracle Communications Network Data Analytics Function",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course uses call flows and use cases to help you understand the fundamental knowledge of NWDAF in general and the architecture of Oracle NWDAF (OCNWDAF) in particular.",
            duration: "1h. 24m",
            url: "https://mylearn.oracle.com/ou/course/oracle-communications-network-data-analytics-function/114073/"
        },

        {
            title: "Oracle SBC Configuration and Administration",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course will introduce you to the Oracle Session Border Controller and the Oracle Enterprise Session Border Controller.  It will familiarize you to what the SBC is and how it can be used in your network environment, and it will look at the benefits and architecture of the SBC and understand how it operates.  The course will focus primarily on the Peering deployment model (Enterprise-SBC) but will teach how to configure the SBC from the bottom up, starting with understanding all of the elements needed to configure the SBC.  Once the SBC has been configured, we will test the basic functionality to ensure calls are going through the SBC correctly.  This course will demonstrate and discuss how to use the ACME Command Line Interface (ACLI) as well as how to use the Web GUI Interface.",
            duration: "16h. 51m",
            url: "https://mylearn.oracle.com/ou/course/oracle-sbc-configuration-and-administration/112975/"
        },

        {
            title: "Oracle Session Delivery Management Cloud (OSDMC) Introductory Overview",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Need and understanding of OSDMC?  Then this is for you, it offers a high-level overview of the Session Delivery Management Cloud (SDMC), introducing you to the capabilities and functionalities of the SDMC.",
            duration: "2h. 54m",
            url: "https://mylearn.oracle.com/ou/course/oracle-session-delivery-management-cloud-osdmc-introductory-overview/143581/"
        },

        {
            title: "Spotlight Series Collections: Simphony 19.6",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This learning path takes customers through highlighted features of the Simphony 19.6 release. Introductions to People Management, Frontline Manager and Order Channels fundamentally improve workflows and functionality for our learners.",
            duration: "1h. 12m",
            url: "https://mylearn.oracle.com/ou/learning-path/spotlight-series-collections-simphony-196/135874"
        },

        {
            title: "Simphony Configuration Basics",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Simphony Configuration Basics learning path provides step-by-step lessons on key Simphony configuration steps, as well as leading practices from Oracle Food and Beverage experts",
            duration: "3h. 50m",
            url: "https://mylearn.oracle.com/ou/learning-path/simphony-configuration-basics/75828"
        },

        {
            title: "Beginners Simphony",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Level 1 Learning Path will be a combination of requisite viewing and students will be expected to pass a final 50 question exam by scoring 90% or higher.",
            duration: "6h. 25m",
            url: "https://mylearn.oracle.com/ou/learning-path/beginners-simphony/77905"
        },

        {
            title: "Intermediate Simphony",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Level 2 Learning Path will be a combination of requisite viewing and students will be expected to pass a final 50 question exam by scoring 80% or higher.",
            duration: "9h. 41m",
            url: "https://mylearn.oracle.com/ou/learning-path/intermediate-simphony/77904"
        },

        
        {
            title: "Simphony for System Administrators",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Simphony for System Administrators learning path provides progressive digital training focused on the administration of a Simphony Enterprise.  Learn how to manage enterprise menu changes, adjust screen flow optimization, and much more.",
            duration: "7h. 11m",
            url: "https://mylearn.oracle.com/ou/learning-path/simphony-for-system-administrators/59551"
        },

        {
            title: "Simphony for Implementers",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Simphony for Implementers learning path provides progressive digital training focused on the administration of a Simphony Enterprise.  Learn how to manage enterprise menu changes, adjust screen flow optimization, and much more.",
            duration: "7h. 11m",
            url: "https://mylearn.oracle.com/ou/learning-path/simphony-for-implementers/59443"
        },

        {
            title: "Reporting and Analytics 9.x for Implementers",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "9.x is the legacy version of our Reporting and Analytics platform.  Content for Reporting and Analytics 20.x, our latest version, is coming soon!",
            duration: "1h. 25m",
            url: "https://mylearn.oracle.com/ou/learning-path/reporting-and-analytics-9x-for-implementers/59408"
        },

        {
            title: "Operator & Manager Functions",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The following selection of videos will highlight several common operational and managerial functions performed in Simphony, including how to sign in, add items to a check, split a check, overriding prices, voiding checks/transactions, running reports and much more. There are also some mini skills test along the way and a full practical task to complete too.",
            duration: "1h. 22m",
            url: "https://mylearn.oracle.com/ou/course/operator-manager-functions/77906/"
        },

        {
            title: "Client Application Loader (CAL)",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This section is all about CAL – A very powerful piece of software that Simphony uses to transfer and install the software packages required for a Simphony Service Host to function correctly.",
            duration: "2h. 14m",
            url: "https://mylearn.oracle.com/ou/course/client-application-loader-cal/77907/"
        },

        {
            title: "The Database Build (Data Entry)",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This video series will demonstrate tasks such as creating Major Groups, Family Groups and Menu Item Masters for reporting whilst consideration is taken with number ranges. It will also show the method for creating Menu Item Definitions, Prices and the importance of modules such as Menu Item Classes & Print Classes.",
            duration: "6h. 9m",
            url: "https://mylearn.oracle.com/ou/course/the-database-build-data-entry/80561/"
        },

        {
            title: "Oracle Banking Electronic Data Exchange",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Corporates are focusing on using single file uploads to process the salary of their employees, to make Vendor payments, to secure finance to create invoices, to manage their finances by optimizing cash flow maintaining liquid assets, and to reduce the risk of securing finance. Oracle Banking Electronics Data Exchanges provides an automated solution for data transfer between banks and their corporate clients. The sophisticated Host to host connectivity solutions give banks the flexibility to exchange information in their preferred file formats, network protocols, and security standards.",
            duration: "1h. 5m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-electronic-data-exchange/143480/"
        },

        {
            title: "Oracle Banking Branch",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Branch banking helps Branch Tellers, Vault Operators and Branch Supervisors to provide quick and efficient service to customers of the Bank. Oracle Banking Branch  is a comprehensive set of branch operations, transactions and set of customer service activities. This functionality filled retail branch operations helps banks increase customer satisfaction and retention.",
            duration: "22h. 10m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-branch/142024/"
        },

        {
            title: "Oracle Food & Beverage Learning Subscription",
            language: "english",
            category: "industries",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Food & Beverage offers a suite of restaurant technology solutions to help you build stronger customer relationships, transact in new ways, and grow your food and beverage business. Our digital learning subscription can streamline the adaptation of our solutions in your business as well as incorporation of new features across all our product releases.",
            duration: "100h. 99m",
            url: "https://mylearn.oracle.com/ou/story/59376"
        },

        {
            title: "Oracle Banking Credit Facilities Process Management",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Banking Credit Facilities Process Management offers a completely digitized credit origination capability right from capturing customer’s complete information such as its subsidiaries, partners, collaterals and liabilities to undertaking KYC and AML checks and collateral evaluation and perfection with both internal, external legal, risk and field assessment departments.Oracle Banking Credit Facilities Process Management has been built to enable the bank staff maximize their efficiency and serve customers better.The product has additional features of capturing the covenant frequency fortnightly and on custom basis.  For the various collateral processes a process configuration user interface has been introduced. As part of collateral management, additional details can be captured for the  Legal Opinion, External Check and External Valuation stages of the collateral processes.",
            duration: "16h. 4m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-credit-facilities-process-management/141291/"
        },

        {
            title: "Oracle Banking Trade Finance",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "An Introduction about Oracle Banking Trade Finance process life cycle of  Documentary Credit, Documentary collection and Undertaking.",
            duration: "8h. 15m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-trade-finance/140025/"
        },

        {
            title: "Oracle Banking Trade Finance Process Management",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "An Introduction about Oracle Banking Trade Finance Process Management to process Documentary Credit, Documentary collection and Undertaking.",
            duration: "9h. 35m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-trade-finance-process-management/140605/"
        },

        {
            title: "Oracle Banking Supply Chain Finance",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Supply chain finance refers to financing of goods or services as they move from origin to destination along the physical supply chain. It can be summarized as a, financial solution that can be used by a corporate to optimize working capital, and to minimize the operational costs and risks associated with supply chain processes.",
            duration: "7h. 51m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-supply-chain-finance/138989/"
        },

        
        {
            title: "Oracle Banking Cash Management",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Cash management product enables a financial institution with a technology platform to manage the current dated, postdated cheques and account receivables and account payables of their corporate customers across disparate accounts and locations.",
            duration: "10h. 22m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-cash-management/138610/"
        },

        {
            title: "Oracle Banking Liquidity Management",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle’s Liquidity Management solution enables Banks to run a single centralized standalone liquidity management system based on contemporary technology with the ability to support comprehensive liquidity management techniques. The solution supports techniques such as pooling, sweeping, real-time liquidity and interest optimization.",
            duration: "5h. 41m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-liquidity-management/137894/"
        },

        {
            title: "Oracle Banking Corporate Lending Process Management",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "OBCLPM streamlines the process of bilateral loan funding, servicing corporate loans, loan syndication, along with quick evaluation and proposal generation. Bankers can focus on on-demand, personalized financing by accelerating the process of loan origination, servicing, and proposal generation.",
            duration: "10h. 12m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-corporate-lending-process-management/137364/"
        },

        {
            title: "Oracle Banking Corporate Lending",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Businesses need funds, which can be invested in various activities such as investment, expansion, and diversification of product portfolio to foster growth and innovation. Over the last few years, corporates are finding that these investments have become more complex for them to achieve growth. ",
            duration: "12h. 46m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-corporate-lending/137018/"
        },

        {
            title: "Oracle Banking Origination",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The request for a loan can be originated by authorized branch users or relationship managers or by approved bank agents, either through the traditional branch channel or through channels.",
            duration: "5h. 26m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-origination/136043/"
        },

        {
            title: "Oracle Banking Party Management",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Banking Party Management provides a comprehensive solution that provides an end-to-end party On-boarding and servicing capability. This application provides the process of collecting, evaluating and authorizing the customer information for secure banking.",
            duration: "2h. 44m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-party-management/135602/"
        },

        {
            title: "Oracle Banking Virtual Account Management",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "OBVAM is a single integrated platform enabling corporate customers to create and manage multiple virtual accounts for their liquidity, receivable and payable needs. These virtual accounts are used to make and receive payments on behalf of few real accounts. This service model helps the corporates to monitor their cash inflow and outflow in an organized manner by reconciling the payments in real time and also consolidating the cash in few centralized real accounts.",
            duration: "5h. 11m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-virtual-account-management/135045/"
        },

        {
            title: "Oracle Banking Payments",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Legacy payment systems are siloed and inflexible, leading to duplicate functions and an incoherent operational view, causing inconsistent customer experience. Currently, customers demand for anywhere, real time payments and an omni-channel payments experience.",
            duration: "27h. 8m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-payments/133880/"
        },

        {
            title: "Oracle Banking Payments version 14.7 - Technical",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get to grips with the technical aspects of Oracle Banking Payments (OBPM). Oracle Banking Payments is a unified payment solution which acts as a standalone payment product processor, catering to the requirements of both Retail and Corporate segments and for local and cross-border payment types.",
            duration: "4h. 10m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-payments-version-147-technical/139073/"
        },


        {
            title: "Functional: OBDX",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Develop an understanding of the various functionalities of retail and corporate modules of OBDX and learn how to use bank administrator functions and capabilities  to set up maintenances. Also explore the Origination workflow, peer and wallet payments and merchant transactions.",
            duration: "25h. 46m",
            url: "https://mylearn.oracle.com/ou/learning-path/functional-obdx/58945"
        },


        {
            title: "Technical: OBDX",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Develop an understanding of the high level architecture of Oracle Banking Digital Experience. Learn how to install Oracle Banking Digital Experience product, along with the installation pre-requisites and post installation configurations to enable successful installation.",
            duration: "5h. 37m",
            url: "https://mylearn.oracle.com/ou/learning-path/technical-obdx/59048"
        },

        {
            title: "Functional: Oracle Banking Platform",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The various Day Zero Set up required to be maintained in Oracle Banking Platform (OBP). The features & functionality of OBP Payments and Collection module along with the related Concepts. The Origination process related to a CASA, Overdraft, Term Deposit and Loan. You also learn about the Overdraft and Loan task flows.",
            duration: "31h. 56m",
            url: "https://mylearn.oracle.com/ou/learning-path/functional-oracle-banking-platform/64033"
        },

        {
            title: "Technical: Oracle Banking Platform",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about Oracle reference architecture on which Oracle Banking Platform architecture is based. It will also cover Architecture principles and Fusion architecture.",
            duration: "29h. 50m",
            url: "https://mylearn.oracle.com/ou/learning-path/technical-oracle-banking-platform/64012"
        },

        {
            title: "OBDX-Core Extensibility",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course shows you how to add a new transaction at UI level and you will also see a sample package mobile application.",
            duration: "1h. 2m",
            url: "https://mylearn.oracle.com/ou/course/obdx-core-extensibility/59050/"
        },

        {
            title: "Oracle Banking Treasury Management",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Oracle Banking Treasury Management enables banks to centralize investment management and capital markets operations for better investment returns. It offers improved visibility, better controls, streamlined and automated processes.",
            duration: "29h. 30m",
            url: "https://mylearn.oracle.com/ou/learning-path/oracle-banking-treasury-management/143943"
        },

        {
            title: "Oracle Banking Enterprise Limits and Collateral Management",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "An efficient centralized system for limits and collateral management will assist banks in effective management of exposures to customers with a holistic view and enhances efficiency in utilization of funds. Banks can avoid over exposure to any specific customer segments and inefficient usage of collateral leading to lower credit facility to customers.",
            duration: "8h. 29m",
            url: "https://mylearn.oracle.com/ou/course/oracle-banking-enterprise-limits-and-collateral-management/139663/"
        },

        {
            title: "Wallets, Merchant Pyt & Peer to Peer Pyt",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: " Peer to Peer Payments, Wallets, Merchant Payments",
            duration: "1h. 17m",
            url: "https://mylearn.oracle.com/ou/course/wallets-merchant-pyt-peer-to-peer-pyt/58995/"
        },

        {
            title: "OBP Architecture and Batch Processing",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about Oracle reference architecture on which Oracle Banking Platform architecture is based. It will also cover Architecture principles and Fusion architecture.",
            duration: "4h. 2m",
            url: "https://mylearn.oracle.com/ou/course/obp-architecture-and-batch-processing/64042/"
        },

        {
            title: "Foreign Exchange",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Foreign Exchange (FX) transactions involve one party purchasing a quantity of one currency in exchange for paying a quantity of the other which enables participants to buy and sell currencies in a way that allows them to convert the inflows and outflows into the currency of their choice.",
            duration: "6h. 31m",
            url: "https://mylearn.oracle.com/ou/course/foreign-exchange/143950/"
        },

        {
            title: "OBP Business Configuration",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "You will learn the various Day Zero Set up required to be maintained in Oracle Banking Platform (OBP).",
            duration: "16h. 47m",
            url: "https://mylearn.oracle.com/ou/course/obp-business-configuration/64040/"
        },

        {
            title: "Branch Operation (BROP) & Servicing Channel",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Branch Operations (BROP) in Oracle Banking platform (OBP) wherein you will  get an understanding on the Day Zero maintenances related to Branch Operations, how to perform the day to today branch operations and also take a look at some of the branch operations related reports and inquiries. Servicing in OBP’s modules of CASA, Term Deposit and Loan and related inquiries.",
            duration: "8h. 36m",
            url: "https://mylearn.oracle.com/ou/course/branch-operation-brop-servicing-channel/64034/"
        },

        {
            title: "Money Market",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The Money Market module of Oracle Banking Treasury Management is versatile and efficient. With it, handle all kinds of placements and borrowings — whether Call, Notice, or Terms — of varying tenors, interest types and interest payment methods. The module is efficient in that it automates processing, accounting and messaging of deals captured system. The money market is an organized exchange market where participants can lend and borrow short-term, high-quality debt securities with average maturities of one year or less.",
            duration: "7h. 27m",
            url: "https://mylearn.oracle.com/ou/course/money-market/143888/"
        },

        {
            title: "Technical: FLEXCUBE Universal Banking",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Learning Path helps you develop an understanding of the technical architecture and various interfaces of Oracle FLEXCUBE.  Learn how to install Oracle FLEXCUBE Development Workbench Tool, while gaining insight into the extensibility feature of Oracle FLEXCUBE.",
            duration: "89h. 49m",
            url: "https://mylearn.oracle.com/ou/learning-path/technical-flexcube-universal-banking/63899"
        },

        {
            title: "Functional: FLEXCUBE Universal Banking - Lending and Deposits",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get indepth functional knowledge in Oracle FLEXCUBE Banking Base, Lending and Term & Structured Deposits.",
            duration: "70h. 54m",
            url: "https://mylearn.oracle.com/ou/learning-path/functional-flexcube-universal-banking-lending-and-deposits/63898"
        },

        {
            title: "Functional: FLEXCUBE Universal Banking – Retail Operations",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Functional Learning Path takes you comprehensively through: FCUB Banking Base 12.0.3 FCUB Retail Operations 12.0.3 FCUB Relationship Pricing 12.0.3 FCUB Term and Structured Deposits 12.0. R12.1, R12.2, R12.3, R12.4 Enhancements",
            duration: "58h. 55m",
            url: "https://mylearn.oracle.com/ou/learning-path/functional-flexcube-universal-banking-retail-operations/63902"
        },

        {
            title: "Functional: FLEXCUBE Universal Banking - Remittances and Trade Finance",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get indepth functional knowledge in Oracle FLEXCUBE Banking Base and Remittances & Trade Finance",
            duration: "70h. 18m",
            url: "https://mylearn.oracle.com/ou/learning-path/functional-flexcube-universal-banking-remittances-and-trade-finance/63904"
        },

        {
            title: "Functional: FLEXCUBE Universal Banking – Treasury and Capital Markets",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get in depth functional knowledge in Oracle FLEXCUBE Banking Treasury Modules of Foreign Exchange and Money Market and Capital market Modules of Securities and OTC Derivatives, Options and Exchange traded derivatives. In addition we also take a look at  how system handles Nostro reconciliation.",
            duration: "56h. 18m",
            url: "https://mylearn.oracle.com/ou/learning-path/functional-flexcube-universal-banking-treasury-and-capital-markets/63901"
        },

        {
            title: "Functional: FLEXCUBE Core Banking",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Develop a solid foundation about your Oracle FLEXCUBE Core Banking system, including an in-depth look at the different modules, features, functionality, and business capabilities. Understand the purpose and implication of module-specific maintenances in daily transaction processing to help make your core banking operations run smoother and with greater efficiency, while enhancing customer service.",
            duration: "27h. 28m",
            url: "https://mylearn.oracle.com/ou/learning-path/functional-flexcube-core-banking/63918"
        },


        {
            title: "Functional: FLEXCUBE Investor Servicing",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get Indepth functional knowledge in Oracle Flexcube Investor services covering Core Maintenance, Fund Setup and Transaction Processing among other videos.",
            duration: "35h. 20m",
            url: "https://mylearn.oracle.com/ou/learning-path/functional-flexcube-investor-servicing/63916"
        },


        {
            title: "Technical: FLEXCUBE Investor Servicing",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Gain an In-depth knowledge of the Technical aspects of Oracle Flexcube Investor Servicing that includes the Installation Process, EOD batches, Debugging in FCIS, FCUB-FCIS Interfaces, the Technical Architecture, Extensibility and Screen design, among others. ",
            duration: "18h. 24m",
            url: "https://mylearn.oracle.com/ou/learning-path/technical-flexcube-investor-servicing/63917"
        },


        {
            title: "Oracle FLEXCUBE Universal Banking Interfaces 12.0.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "By taking this course, you'll develop an in depth understanding of various interfaces of Oracle FLEXCUBE. You'll learn how to generate an outgoing ASCII file and process an incoming ASCII file coming via an ASCII gateway. Furthermore, you'll become familiar with the flow of 'incoming' and 'outgoing' messages through EMS.",
            duration: "11h. 9m",
            url: "https://mylearn.oracle.com/ou/course/oracle-flexcube-universal-banking-interfaces-1203/64531/"
        },


        {
            title: "Loan Syndication",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn all about : Loan Syndication, Product Definition, Lifecycle, Get an demo in the last video",
            duration: "2h. 32m",
            url: "https://mylearn.oracle.com/ou/course/loan-syndication/63963/"
        },


        {
            title: "Cash Management",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get an in depth functional understanding of the Integrated Liquidity Management  module in Oracle FLEXCUBE Universal Banking.",
            duration: "1h. 26m",
            url: "https://mylearn.oracle.com/ou/course/cash-management/63933/"
        },


        {
            title: "Enhancements - Rel 12.2,12.3,12.4",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "    Learn about Oracle's Products : Oracle FLEXCUBE Universal Banking - Lending and Deposits Topic : Commitments, Corporate Deposits, FCUB Base, Fixed Assets /Asset Management, Leasing & Mortgages, Loan Syndication Version : Rel 12.2, Rel 12.3, Rel 12.4",
            duration: "2h. 57m",
            url: "https://mylearn.oracle.com/ou/course/enhancements-rel-122123124/63910/"
        },


        {
            title: "Core Banking Definitions",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "You will learn the various Day Zero Set up required to be maintained in Oracle FLEXCUBE Core Banking. All these maintenances are part of the global maintenances.",
            duration: "9h. 20m",
            url: "https://mylearn.oracle.com/ou/course/core-banking-definitions/63943/"
        },


        {
            title: "Oracle FCUB Development Toolkit, Dev & Extensibility 12.0.3 Part 1",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Taking this course helps you develop an overall understanding of the technical architecture and various interfaces of Oracle FLEXCUBE. You'll gain valuable knowledge of the extensibility feature of Oracle FLEXCUBE, while learning how to install of Oracle FLEXCUBE Development Workbench Tool.",
            duration: "18h. 7m",
            url: "https://mylearn.oracle.com/ou/course/oracle-fcub-development-toolkit-dev-extensibility-1203-part-1/64518/"
        },

        {
            title: "Leasing & Mortgages",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn all about Leasing and Mortgages: Introduction, Product Creation, Lifecycle and Demo",
            duration: "3h. 20m",
            url: "https://mylearn.oracle.com/ou/course/leasing-mortgages/63965/"
        },

        {
            title: "Asset Management",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get an Introduction to Asset Management and learn about Maintenances and Lifecycle Operations",
            duration: "1h. 46m",
            url: "https://mylearn.oracle.com/ou/course/asset-management/63956/"
        },

        {
            title: "FCIS Open Development Tools - ODT",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Gain an In-depth knowledge of the Technical aspects of Oracle Flexcube Investor Servicing that includes the Installation Process, EOD batches, Debugging in FCIS, FCUB-FCIS Interfaces, the Technical Architecture, Extensibility and Screen design, among others. ",
            duration: "10h. 27m",
            url: "https://mylearn.oracle.com/ou/course/fcis-open-development-tools-odt/64046/"
        },

        {
            title: "Oracle FLEXCUBE Universal Banking Relationship Pricing 12.0.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Oracle FLEXCUBE Universal Banking Relationship Pricing 12.0.3 training helps you explore the various maintenances and operations relating to the 'Relationship Pricing' module. Through extensive hands-on labs, you can put into practice the knowledge you gain from the theory sessions.",
            duration: "1h. 54m",
            url: "https://mylearn.oracle.com/ou/course/oracle-flexcube-universal-banking-relationship-pricing-1203/64301/"
        },

        {
            title: "Oracle FLEXCUBE Universal Banking Treasury 12.0.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Oracle FLEXCUBE Universal Banking Treasury 12.0.3 training is designed to help you gain detailed insight into Oracle FLEXCUBE Universal Banking's Treasury modules, including foreign exchange and money market. Expert Oracle University instructors will take you through a step-by-step guide to delivering fast and efficient product setups, deal inputs and processing operations in a bank's treasury back office.",
            duration: "10h. 58m",
            url: "https://mylearn.oracle.com/ou/course/oracle-flexcube-universal-banking-treasury-1203/64306/"
        },

        {
            title: "Oracle FLEXCUBE Universal Banking Lending 12.0.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Oracle FLEXCUBE Universal Banking Lending 12.0.3 training is designed to help you gain insight into the business domain with respect to the processing of lending and related type transactions. Expert Oracle University instructors take you through a step-by-step guide to delivering fast and efficient product set-ups, transaction inputs and processing operations in a bank's lending section.",
            duration: "15h. 5m",
            url: "https://mylearn.oracle.com/ou/course/oracle-flexcube-universal-banking-lending-1203/64321/"
        },

        {
            title: "Core Banking Definitions",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "You will learn the various Day Zero Set up required to be maintained in Oracle FLEXCUBE Core Banking. All these maintenances are part of the global maintenances.",
            duration: "9h. 20m",
            url: "https://mylearn.oracle.com/ou/course/core-banking-definitions/63943/"
        },

        {
            title: "Oracle FLEXCUBE Universal Banking Term and Structured Deposits 12.0.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Oracle FLEXCUBE Universal Banking Term & Structured Deposits 12.0.3 training guides you through the essential set-ups required to deploy the Bank's 'deposit' offerings in Oracle FLEXCUBE. Expert Oracle University instructors will teach you about the 'Deposit' business capabilities in Oracle FLEXCUBE application, while providing module-specific hands-on exercises that offer practical exposure to Oracle FLEXCUBE.",
            duration: "5h. 15m",
            url: "https://mylearn.oracle.com/ou/course/oracle-flexcube-universal-banking-term-and-structured-deposits-1203/64277/"
        },

        {
            title: "Rel 12.2 Enhancements",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Learn about Oracle's Products : Oracle FLEXCUBE Universal Banking – Remittances and Trade Finance Topic : FCUB Base, FCUB Cash Management, FCUB Remittances, Trade Finance",
            duration: "2h. 39m",
            url: "https://mylearn.oracle.com/ou/course/rel-122-enhancements/63906/"
        },

        {
            title: "Oracle FLEXCUBE Universal Banking Deployment 12.0.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Oracle FLEXCUBE Universal Banking Deployment 12.0.3 training explores the process of installing and deploying Oracle FLEXCUBE and bringing up the application browser. Expert Oracle University instructors will also cover the security aspects of logging in and user privileges; this an in-depth training that will help you develop end-to-end knowledge of the installation aspects of Oracle FLEXCUBE, as well as the Oracle FLEXCUBE Universal Installer.",
            duration: "7h. 20m",
            url: "https://mylearn.oracle.com/ou/course/oracle-flexcube-universal-banking-deployment-1203/64707/"
        },

        {
            title: "Enhancements - Rel 12.1,12.2,12.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The videos in this course will take you through the  technical enhancements of FCUB 12.1 , 12.2 and 12.3 release.",
            duration: "2h. 57m",
            url: "https://mylearn.oracle.com/ou/course/enhancements-rel-121122123/64140/"
        },


        {
            title: "Core Banking Operations",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Operations form the key element of the financial service provider’s infrastructure, with an objective to augment customer service systems and improve internal efficiencies.",
            duration: "7h. 40m",
            url: "https://mylearn.oracle.com/ou/course/core-banking-operations/63941/"
        },

        {
            title: "Enhancements - Rel 12.1/12.2 /12.4",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get an insight into the enhancements in Release 12.1,12.2,12.4 some of which are in the areas of : CASA, FCUB CORE, Foreign Exchange, FCUB Interest & Charges, FCUB Interactions",
            duration: "3h. 6m",
            url: "https://mylearn.oracle.com/ou/course/enhancements-rel-121122-124/63924/"
        },

        {
            title: "FCUB Admin & Support 12.0.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get an in depth understanding on Administration and Support in Oracle FLEXCUBE Universal Banking",
            duration: "8h. 29m",
            url: "https://mylearn.oracle.com/ou/course/fcub-admin-support-1203/64142/"
        },

        {
            title: "Trade Finance",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "Get an in depth functional understanding of the business of Trade in Oracle FLEXCUBE Universal banking that focuses on Letters of Credit, Guarantees and Bills  & Collection.",
            duration: "4h. 18m",
            url: "https://mylearn.oracle.com/ou/course/trade-finance/63931/"
        },

        {
            title: "Oracle FLEXCUBE Universal Banking Securities 12.0.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course helps you learn the various maintenances and operations relating to the 'Securities' module. Through the extensive labs, you can put into practice the knowledge gained from the theory sessions.",
            duration: "4h. 22m",
            url: "https://mylearn.oracle.com/ou/course/oracle-flexcube-universal-banking-securities-1203/64308/"
        },


        {
            title: "Oracle FLEXCUBE Universal Banking Reporting with OBIEE 12.0.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "The course begins with an introduction to the fundamental concepts related to business intelligence and dimensional modeling. You will explore Oracle Business Intelligence Enterprise Edition user interfaces (including Oracle BI Answers) and share analytical requests for viewing within Interactive Dashboards. This course also covers 'Oracle BI Administration Tool' and details of various reporting formats using 'BIP'.",
            duration: "24h. 23m",
            url: "https://mylearn.oracle.com/ou/course/oracle-flexcube-universal-banking-reporting-with-obiee-1203/64540/"
        },

        {
            title: "Oracle FLEXCUBE Universal Banking Trade Finance 12.0.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Oracle FLEXCUBE Universal Banking Trade Finance 12.0.3 training is designed to help you gain insight into Oracle FLEXCUBE Universal Banking's 'Trade Finance' modules, which include letters of credit, bank guarantees, bills and collections and trade origination. Get a step-by-step guide to effectively deliver fast and efficient product setups, create contracts and process operations in a bank's 'Trade Finance' department.",
            duration: "19h. 12m",
            url: "https://mylearn.oracle.com/ou/course/oracle-flexcube-universal-banking-trade-finance-1203/64524/"
        },

        {
            title: "Oracle FCUB Nostro Reconciliation 12.0.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This course gives you  an introduction of the module FCUB Nostro Reconciliation and helps you understand the key functionalities.",
            duration: "2h. 23m",
            url: "https://mylearn.oracle.com/ou/course/oracle-fcub-nostro-reconciliation-1203/63922/"
        },

        {
            title: "Oracle FLEXCUBE Universal Banking Remittances 12.0.3",
            language: "english",
            category: "banking",
            platform: "oracle",
            duration: "free",
            img: "https://via.placeholder.com/250x150",
            description: "This Oracle FLEXCUBE Universal Banking Remittances 12.0.3 training is designed to help you gain insight into the banking domain with respect to processing of remittances. Expert Oracle University instructors will explore the modules in Oracle FLEXCUBE Universal Banking that can handle remittances, including the funds transfer (FT) module, payments and collection (PC) module and the standing instructions (SI) module.",
            duration: "6h. 55m",
            url: "https://mylearn.oracle.com/ou/course/oracle-flexcube-universal-banking-remittances-1203/64483/"
        },

        


        
    // Start Oracle Ai industries

    
    // End Oracle Ai industries

        
    // End  industries
    


    // Start Oracle Cloud Application SaaS

    {
        title: "Oracle Financials Cloud Training and Certification",
        language: "english",
        category: "financials",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "The Oracle Financials Cloud Learning Subscription is a complete learning solution to implement and manage the Cloud financial System...",
        url: "https://mylearn.oracle.com/ou/story/45170"
    },

    {
        title: "Oracle Project Management Training and Certification",
        language: "english",
        category: "Project Management",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "The Project Management Learning subscription provides a Integrated Project Management Learning Courses. The Learning modules covers extensively on Project Financial Management and Project Execution Management.",
        url: "https://mylearn.oracle.com/ou/story/37773"
    },

    {
        title: "Oracle Enterprise Performance Management Cloud Training and Certification",
        language: "english",
        category: "Enterprise Performance Management",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "The Oracle Enterprise Performance Management (EPM) Cloud Learning Subscription is a complete learning solution to implement and manage the Oracle Enterprise Performance Management Cloud Business Process...",
        url: "https://mylearn.oracle.com/ou/story/51518"
    },

    {
        title: "Oracle Supply Chain Management & Manufacturing (SCM) Training and Certification",
        language: "english",
        category: "Supply Chain Management",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "The subscription provides a complete learning solution for Implementers, Managers, Administrators and Developers.",
        url: "https://mylearn.oracle.com/ou/story/46418"
    },

    {
        title: "Oracle Procurement Training and Certification",
        language: "english",
        category: "Procurement",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "The Oracle Procurement learning subscription is a complete learning solution for Implementers, managers, administrators, and developers. It includes product overviews , implementation workshops, new feature updates and guidance on how to keep costs under control by selecting the best suppliers, enforcing policy, and managing supplier risk...",
        url: "https://mylearn.oracle.com/ou/story/46356"
    },

    {
        title: "Oracle Global Human Resources Training and Certification",
        language: "english",
        category: "Global Human Resources",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "Discover how Oracle Global Human Resources Cloud can help you gain operational excellence and increase agility with a single instance that aligns common HR processes while supporting local compliance and process needs across multiple countries.",
        url: "https://mylearn.oracle.com/ou/story/44447"
    },

    {
        title: "Oracle Talent Management Training and Certification",
        language: "english",
        category: "Talent Management",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "Learn to implement and manage the Oracle Talent Management Cloud in this complete learning solution...",
        url: "https://mylearn.oracle.com/ou/story/46602"
    },

    {
        title: "Oracle Fusion Sales Training and Certification",
        language: "english",
        category: "Sales",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "With the Oracle Fusion Sales Learning Subscription, you can build new skills with Oracle training courses and validate expertise with Oracle Certification. Explore available beginner to advanced learning solutions, and try it for free with Learning Explorer paths...",
        url: "https://mylearn.oracle.com/ou/story/45509"
    },

    {
        title: "Oracle Field Service Training and Certification",
        language: "english",
        category: "Service",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "With the Oracle Field Service Learning Subscription, you can build new skills with Oracle training courses and validate expertise with Oracle Certification. Explore available beginner to advanced learning solutions, and try it for free with the Oracle Field Service Explorer learning path...",
        url: "https://mylearn.oracle.com/ou/story/45640"
    },

    {
        title: "Oracle Configure, Price, and Quote Training and Certification",
        language: "english",
        category: "Configure, Price, Quote",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "With the Oracle Configure, Price, and Quote (CPQ) Cloud Learning Subscription, you can build new skills with Oracle training courses and validate expertise with Oracle Certification...",
        url: "https://mylearn.oracle.com/ou/story/45603"
    },

    {
        title: "Oracle Commerce Training and Certification",
        language: "english",
        category: "Commerce",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "The Oracle Commerce Learning Subscription is a complete learning solution to implement and manage the Oracle Commerce Cloud Application. The Commerce modules cover Open Storefront Framework, Multisite Implementation, Integrations, Promotions, Catalog and Payments...",
        url: "https://mylearn.oracle.com/ou/story/50047"
    },

    {
        title: "Oracle Marketing Training and Certification",
        language: "english",
        category: "Marketing",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "Strengthen your skills for every Oracle Marketing application, including Eloqua, Responsys, Maxymiser, Infinity, CrowdTwist, Content Management, DataFox, Oracle BlueKai, Audience Segmentation and Unity.",
        url: "https://mylearn.oracle.com/ou/story/37002"
    },

    {
        title: "Oracle Permitting And Licensing Learning Subscription",
        language: "english",
        category: "Industries",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "Start your learning journey now!",
        url: "https://mylearn.oracle.com/ou/story/124853"
    },

    {
        title: "Oracle Financials Payables Training and Certification",
        language: "english",
        category: "SLS Payables",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "Oracle Financials Payables Training and Certification helps to understand the key concepts and processes involved in implementing Payables and to prepare to take the related certification exam.",
        url: "https://mylearn.oracle.com/ou/story/109169"
    },

    {
        title: "Oracle Guided Learning",
        language: "english",
        category: "Oracle Guided Learning",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "Get training and certification for all job roles in your organization that will create engaging OGL content to support your digital transformation.",
        url: "https://mylearn.oracle.com/ou/story/75977"
    },

    {
        title: "Oracle Field Service Training and Certification.",
        language: "english",
        category: "Service",
        platform: "oracle",
        img: "https://via.placeholder.com/250x150",
        description: "With the Oracle Field Service Learning Subscription, you can build new skills with Oracle training courses and validate expertise with Oracle Certification. Explore available beginner to advanced learning solutions, and try it for free with the Oracle Field Service Explorer learning path.",
        url: "https://mylearn.oracle.com/ou/story/47170"
    },
        // End Oracle Cloud Application SaaS
        // Add more course objects here...
    ];

    let filteredCourses = [...courses]; // Filtered courses for pagination
    let searchQuery = ""; // Search query

    const totalPages = () => Math.ceil(filteredCourses.length / coursesPerPage);

    const displayCourses = (page) => {
        coursesContainer.innerHTML = ""; // Clear the container
        const startIndex = (page - 1) * coursesPerPage;
        const endIndex = Math.min(startIndex + coursesPerPage, filteredCourses.length);

        const currentCourses = filteredCourses.slice(startIndex, endIndex);
        currentCourses.forEach((course, index) => {
            const courseId = `course-${page}-${index + 1}`; // Unique ID for each course
            const courseElement = document.createElement("div");
            courseElement.classList.add("course-card");
            courseElement.setAttribute("id", courseId); // Set the unique ID

            courseElement.innerHTML = `
            

        <img src="${course.img}" alt="${course.title}">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-duration">Duration: ${course.duration}</div>
        <div class="tags">
          <span class="tag platform">${course.platform}</span>
          <span class="tag price">${course.price}</span>
          <span class="tag language">${course.language}</span>
        </div>
        <div class="buttons">
          <button class="button share">Share</button>
          <a href="${course.url}" target="_blank" class="button enroll">Enroll</a>
        </div>
      `;
            coursesContainer.appendChild(courseElement);
        });

        document.querySelectorAll(".share-button").forEach(button => {
            button.addEventListener("click", (event) => {
                const courseId = event.target.getAttribute("data-course-id");
                const courseElement = document.getElementById(courseId);
                const courseLink = courseElement.querySelector("a").href;

                if (navigator.share) {
                    navigator.share({
                        title: `Check out this course: ${courseElement.querySelector("h3").textContent}`,
                        text: `Here is a great course I found!`,
                        url: courseLink
                    }).catch(error => console.error("Error sharing:", error));
                } else {
                    const tempInput = document.createElement("input");
                    document.body.appendChild(tempInput);
                    tempInput.value = courseLink;
                    tempInput.select();
                    document.execCommand("copy");
                    document.body.removeChild(tempInput);
                    alert("Link copied to clipboard!");
                }
            });
        });
    };

    const displayPagination = (currentPage) => {
        paginationContainer.innerHTML = ""; // Clear pagination

        const createPageButton = (page) => {
            const button = document.createElement("button");
            button.textContent = page;
            button.classList.add("pagination-button");
            if (page === currentPage) {
                button.classList.add("active");
            }
            button.addEventListener("click", () => {
                displayCourses(page);
                displayPagination(page);
            });
            return button;
        };

        if (currentPage > 1) {
            const prevButton = createPageButton(currentPage - 1);
            prevButton.textContent = "«";
            paginationContainer.appendChild(prevButton);
        }

        for (let i = 1; i <= totalPages(); i++) {
            paginationContainer.appendChild(createPageButton(i));
        }

        if (currentPage < totalPages()) {
            const nextButton = createPageButton(currentPage + 1);
            nextButton.textContent = "»";
            paginationContainer.appendChild(nextButton);
        }
    };

    const filterCourses = () => {
        const language = languageFilter.value;
        const category = categoryFilter.value;
        const platform = platformFilter.value;

        filteredCourses = courses.filter(course => {
            const matchesLanguage = (language === "all" || course.language === language);
            const matchesCategory = (category === "all" || course.category === category);
            const matchesPlatform = (platform === "all" || course.platform === platform);
            const matchesSearch = course.title.toLowerCase().includes(searchQuery);
            return matchesLanguage && matchesCategory && matchesPlatform && matchesSearch;
        });

        displayCourses(1);
        displayPagination(1);
    };

    const suggestCourses = () => {
        const query = searchBar.value.toLowerCase().trim();
        searchQuery = query; // Update global search query
        suggestionsList.innerHTML = ""; // Clear previous suggestions

        if (query === "") return;

        const matchedCourses = courses.filter(course => course.title.toLowerCase().includes(query));
        matchedCourses.forEach(course => {
            const suggestionItem = document.createElement("div");
            suggestionItem.className = "suggestion-item";
            suggestionItem.textContent = course.title;

            suggestionItem.addEventListener("click", () => {
                searchBar.value = course.title;
                suggestionsList.innerHTML = ""; // Clear suggestions
                searchQuery = course.title.toLowerCase();
                filterCourses();
            });

            suggestionsList.appendChild(suggestionItem);
        });

        if (matchedCourses.length === 0) {
            const noMatchItem = document.createElement("div");
            noMatchItem.className = "suggestion-item";
            noMatchItem.textContent = "No matches found.";
            suggestionsList.appendChild(noMatchItem);
        }
    };

    searchBar.addEventListener("input", suggestCourses);
    document.getElementById("searchButton").addEventListener("click", () => {
        searchQuery = searchBar.value.toLowerCase().trim();
        filterCourses();
    });

    languageFilter.addEventListener("change", filterCourses);
    categoryFilter.addEventListener("change", filterCourses);
    platformFilter.addEventListener("change", filterCourses);

    displayCourses(1);
    displayPagination(1);
});
