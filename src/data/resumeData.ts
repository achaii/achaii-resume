export type Language = "en" | "id";

export interface Project {
  id: string;
  title: Record<Language, string>;
  role: Record<Language, string>;
  institution: string;
  period: string;
  category: "gov" | "education" | "business" | "mobile";
  description: Record<Language, string[]>;
  techStack: string[];
  url?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: Record<Language, string>;
  period: Record<Language, string>;
  highlights: Record<Language, string[]>;
}

export interface Education {
  institution: string;
  degree: Record<Language, string>;
  year: string;
  details: Record<Language, string>;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  badge: string;
}

export const resumeData = {
  personal: {
    name: "Deni Hidayat",
    title: {
      en: "Software Engineer",
      id: "Software Engineer",
    },
    subTitle: {
      en: "Full-Stack Web & Hybrid Mobile Developer",
      id: "Pengembang Web Full-Stack & Mobile Hybrid",
    },
    bio: {
      en: "Results-driven Software Engineer with over 7 years of hands-on experience architecting and delivering enterprise web applications, government information systems, banking IT support, and mobile solutions. Deep technical expertise in the Laravel ecosystem, modern JavaScript (React, Vue, Alpine), RESTful APIs, relational databases (MySQL, PostgreSQL), and cloud backends.",
      id: "Software Engineer berpengalaman lebih dari 7 tahun dalam membangun sistem informasi berskala institusi pemerintahan, aplikasi perbankan, platform e-commerce, dan sistem manajemen enterprise. Memiliki keahlian mendalam pada ekosistem Laravel, modern JavaScript (React, Vue, Alpine), REST API, serta arsitektur database relasional & cloud.",
    },
    availability: {
      en: "Available for Opportunities & New Projects",
      id: "Tersedia untuk Peluang Karir & Proyek Baru",
    },
    tagline: {
      en: "Professional Curriculum Vitae & Portfolio",
      id: "Curriculum Vitae & Portofolio Profesional",
    },
    phone: "+62 812 2084 4600",
    phoneClean: "6281220844600",
    email: "hop2style@gmail.com",
    github: "achaii",
    githubUrl: "https://github.com/achaii",
    linkedin: "achaii",
    linkedinUrl: "https://linkedin.com/in/achaii",
    birthPlaceDate: {
      en: "Bandung, June 13, 1989",
      id: "Bandung, 13 Juni 1989",
    },
  },

  stats: [
    {
      label: { en: "Experience", id: "Pengalaman Kerja" },
      value: "7+ Years",
      valueId: "7+ Tahun",
    },
    {
      label: { en: "Completed Projects", id: "Proyek Selesai" },
      value: "22+ Systems",
      valueId: "22+ Proyek",
    },
    {
      label: { en: "Certifications", id: "Sertifikasi Resmi" },
      value: "14 Verified",
      valueId: "14 Sertifikat",
    },
    {
      label: { en: "Education", id: "Pendidikan Terakhir" },
      value: "B.Sc. Informatics",
      valueId: "S1 Teknik Informatika",
    },
  ],

  experiences: [
    {
      id: "bpr",
      company: "PT. BPR Ukabima Lumbung Sejahtera",
      role: {
        en: "IT Support Specialist",
        id: "IT Support",
      },
      period: {
        en: "04/2026 – Present",
        id: "04/2026 – Saat ini",
      },
      highlights: {
        en: [
          "Provided helpdesk and ticketing support for hardware, workstation troubleshooting, printers, and core access control.",
          "Delivered application support ensuring uninterrupted uptime and optimal performance of core banking applications and digital channels.",
          "Conducted scheduled security assessments, data backups, and early mitigation of system vulnerability risks.",
          "Facilitated regulatory banking data reporting and institutional administrative operations.",
          "Maintained enterprise hardware and software documentation compliance.",
        ],
        id: [
          "Helpdesk dan ticketing penanganan keluhan atau kendala perangkat kerja karyawan (komputer, printer dan akses sistem).",
          "Dukungan aplikasi memastikan aplikasi inti perbankan dan kanal digital berjalan optimal tanpa hambatan.",
          "Keamanan dan pemeliharaan melakukan pemeliharaan rutin, pencadangan data dan mitigasi awal risiko gangguan sistem.",
          "Mendukung pelaporan berkaitan dengan perbankan yang ada di perusahaan.",
          "Mendukung segala macam keadministrasian di perusahaan.",
        ],
      },
    },
    {
      id: "freelance",
      company: "Freelance / Independent Practice",
      role: {
        en: "Senior Software Engineer",
        id: "Software Engineer",
      },
      period: {
        en: "01/2019 – Present",
        id: "01/2019 – Saat Ini",
      },
      highlights: {
        en: [
          "Architected and deployed full-stack frontend and backend web applications for diverse industries.",
          "Built highly responsive, accessible, and high-performance interactive user interfaces.",
          "Engineered robust RESTful APIs with microservices and third-party payment/notification integrations.",
          "Developed hybrid Android mobile applications utilizing Ionic Framework and ReactJS.",
          "Integrated hybrid mobile applications with native Android APIs, including hardware Serial Port communication bridges.",
        ],
        id: [
          "Mengembangkan arsitektur frontend dan backend aplikasi web modern dan responsif.",
          "Membuat tampilan antarmuka interaktif yang cepat, aksesibel, dan mobile-friendly.",
          "Merancang dan mengintegrasikan RESTful API performa tinggi ke dalam aplikasi.",
          "Mengembangkan aplikasi Android berbasis hybrid (Ionic Framework & ReactJS).",
          "Mengintegrasikan modul hybrid dengan fitur Android native serta Serial Port Bridge.",
        ],
      },
    },
    {
      id: "rshs",
      company: "RSUP Dr. Hasan Sadikin Bandung",
      role: {
        en: "HR Administration & Data Management Officer",
        id: "Administrasi & Pengelolaan Data",
      },
      period: {
        en: "12/2014 – 02/2023",
        id: "12/2014 – 02/2023",
      },
      highlights: {
        en: [
          "Administered human resource personnel databases encompassing civil servants (ASN), non-civil servants, and outsourced staff.",
          "Compiled comprehensive inventory and auditing reports for medical and non-medical healthcare equipment.",
          "Analyzed and reported hospital-wide Key Performance Indicators (KPI) and clinical quality metrics.",
          "Synthesized patient and family feedback metrics to drive operational service enhancements.",
          "Administered specialized enterprise inpatient installation management software.",
          "Managed secretarial documentation and facilitated inter-agency coordination meetings.",
        ],
        id: [
          "Mengelola administrasi SDM terpusat (ASN, Non-ASN, dan tenaga outsourcing).",
          "Menyusun laporan inventarisasi peralatan medis dan non-medis secara komprehensif.",
          "Mengelola dan menyusun kalkulasi laporan KPI serta indikator mutu rumah sakit.",
          "Menyusun dan menganalisis laporan keluhan pasien serta keluarga untuk perbaikan layanan.",
          "Mengelola aplikasi sistem informasi terkait instalasi rawat inap.",
          "Menyusun laporan kesekretariatan dan menyiapkan kebutuhan rapat koordinasi internal & eksternal.",
        ],
      },
    },
    {
      id: "darul-hikam",
      company: "SMA Darul Hikam Bandung",
      role: {
        en: "IT Support Technician",
        id: "IT Support",
      },
      period: {
        en: "04/2014 – 06/2014",
        id: "04/2014 – 06/2014",
      },
      highlights: {
        en: [
          "Ensured peak operational readiness and troubleshooting of educational computer lab facilities.",
          "Configured and maintained local area network (LAN) infrastructure and internet connectivity.",
          "Conducted periodic testing to guarantee continuous school management software uptime.",
          "Administered OS patching and licensed software deployments across school devices.",
        ],
        id: [
          "Memastikan seluruh unit komputer operasional berfungsi secara prima.",
          "Memastikan seluruh infrastruktur komputer terhubung ke jaringan LAN dan internet.",
          "Melakukan monitoring aplikasi berkala agar berjalan normal tanpa gangguan.",
          "Memperbarui sistem operasi dan lisensi aplikasi sekolah secara terjadwal.",
        ],
      },
    },
    {
      id: "icon-kirana",
      company: "PT. Icon Kirana Solusi",
      role: {
        en: "Asset Management Surveyor",
        id: "Surveyor",
      },
      period: {
        en: "06/2013 – 03/2014",
        id: "06/2013 – 03/2014",
      },
      highlights: {
        en: [
          "Formulated regional municipal government asset inventory and verification reports.",
          "Managed regional asset databases using SIMDA (West Bandung Regency administration system).",
          "Conducted technical onboarding and guidance for municipal government asset operators.",
          "Drafted detailed business process flowcharts for the marketing division of PT Pupuk Kujang.",
          "Authored institutional guidelines and Standard Operating Procedures (SOP) documentation.",
        ],
        id: [
          "Menyusun laporan verifikasi dan inventarisasi aset daerah.",
          "Mengelola database inventaris aset menggunakan SIMDA Kabupaten Bandung Barat.",
          "Melakukan bimbingan teknis inventaris aset kepada operator instansi pemerintah.",
          "Merekap dan memvalidasi kelengkapan data aset fisik.",
          "Menyusun flowchart alur kerja proses bisnis bagian pemasaran PT Pupuk Kujang.",
          "Menyusun pedoman kerja dan dokumen Standard Operating Procedure (SOP) PT Pupuk Kujang.",
        ],
      },
    },
  ] as Experience[],

  education: [
    {
      institution: "STMIK LPKIA Bandung",
      degree: {
        en: "Bachelor of Computer Science (S1 Teknik Informatika)",
        id: "S1 Teknik Informatika",
      },
      year: "2012",
      details: {
        en: "Thesis: Room Security Information System Prototype Utilizing RFID and SMS Real-Time Notification.",
        id: "Judul Skripsi: Prototipe Sistem Informasi Keamanan Ruangan Menggunakan RFID dengan Informasi Menggunakan SMS.",
      },
    },
    {
      institution: "PKN LPKIA Bandung",
      degree: {
        en: "Associate Degree in Informatics Management (D3 Manajemen Informatika)",
        id: "D3 Manajemen Informatika",
      },
      year: "2011",
      details: {
        en: "Seminar Project: Asset Inventory Information System for the Regional Police (Polda Jabar) Administration.",
        id: "Judul Seminar: Sistem Informasi Inventaris Asset di Bagian Renmin Polda Jawa Barat.",
      },
    },
  ] as Education[],

  skills: {
    programming: [
      { name: "JavaScript", level: "Advance" },
      { name: "PHP", level: "Advance" },
      { name: "Python", level: "Middle" },
      { name: "Golang", level: "Middle" },
      { name: "Java", level: "Middle" },
    ],
    backend: [
      "Laravel",
      "CodeIgniter",
      "Express.js",
      "Node.js",
      "RESTful API",
      "Livewire",
      "Redis Caching",
    ],
    frontend: [
      "React.js",
      "Vue.js",
      "Alpine.js",
      "HTMX",
      "Tailwind CSS",
      "Bootstrap",
      "Leaflet.js (GIS/Maps)",
      "ApexCharts",
      "Chart.js",
      "Highcharts",
      "DataTables",
      "jQuery",
    ],
    databases: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "Firebase",
      "Cloud Firestore",
      "Supabase",
      "Redis",
    ],
    mobile: [
      "Ionic Framework (Hybrid)",
      "Android Serial Port API",
      "Native Android Bridge",
      "React UI Components",
    ],
    analysisAndManagement: [
      "Business Process Analysis",
      "Project Management",
      "Flowcharts & Use Cases",
      "Data Entry & Auditing",
      "Microsoft Visio",
      "Microsoft Office Specialist (MOS)",
    ],
  },

  certificates: [
    {
      title: "Literasi Kecerdasan Artificial",
      issuer: "MOOC ITB Tahun 2026",
      date: "06/2026",
      badge: "AI",
    },
    {
      title: "Permodelan Sistem Informasi Geografis",
      issuer: "MOOC ITB Tahun 2026",
      date: "06/2026",
      badge: "GIS",
    },
    {
      title: "CSS Essentials",
      issuer: "Cisco Networking Academy",
      date: "02/2026",
      badge: "Cisco",
    },
    {
      title: "HTML Essentials",
      issuer: "Cisco Networking Academy",
      date: "11/2025",
      badge: "Cisco",
    },
    {
      title: "Dasar DevOps",
      issuer: "Dicoding Indonesia",
      date: "02/2023",
      badge: "Dicoding",
    },
    {
      title: "Dasar Jaringan Komputer",
      issuer: "Dicoding Indonesia",
      date: "02/2023",
      badge: "Dicoding",
    },
    {
      title:
        "Manajemen Infrastruktur Dan Teknologi Program Massive Open Online Course (2022)",
      issuer: "Fakultas Ilmu Komputer Universitas Indonesia",
      date: "03/2023",
      badge: "UI",
    },
    {
      title:
        "Pelatihan Data Visualization - Program Professional Academy",
      issuer: "Digital Talent Scholarship (DTS) Kemkominfo",
      date: "12/2022",
      badge: "Kominfo",
    },
    {
      title: "Javascript (Basic) & SQL (Basic)",
      issuer: "HackerRank",
      date: "09/2022",
      badge: "HackerRank",
    },
    {
      title: "Git, Python, Sass, SQL",
      issuer: "Progate",
      date: "09/2022",
      badge: "Progate",
    },
    {
      title:
        "Pendampingan Pengembangan Sistem Informasi Layanan Lingkungan di Lingkungan DLH Jabar",
      issuer: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      date: "07/2022",
      badge: "DLH Jabar",
    },
    {
      title: "Dasar Pemrograman Javascript",
      issuer: "Dicoding Indonesia",
      date: "02/2022",
      badge: "Dicoding",
    },
    {
      title: "Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      date: "02/2022",
      badge: "Dicoding",
    },
    {
      title: "Microsoft Office Specialist (MOS)",
      issuer: "Certport",
      date: "10/2011",
      badge: "Certport",
    },
  ] as Certificate[],

  projects: [
    {
      id: "abscermatku",
      title: {
        en: "Candidate Psychotechnical Accuracy Exam (Polri & TNI) – Subscription System",
        id: "Sistem Persiapan Tes Kecermatan (Polri & TNI) – Subscription System",
      },
      role: {
        en: "Full Stack Web Developer",
        id: "Web Developer",
      },
      institution: "Anton Bimbel Student",
      period: "11/2025",
      category: "education",
      description: {
        en: [
          "Engineered an interactive web-based psychotechnical practice platform with a tiered subscription monetization model.",
          "Architected backend using PHP (Laravel) & MySQL with Redis caching for ultra-low latency test session evaluations.",
          "Built hierarchical user management, package subscription tiers, and automated content gatekeeping.",
          "Integrated Midtrans Payment Gateway for real-time checkout and automated webhook activation.",
          "Provided comprehensive candidate analytics tracking speed, accuracy curves, and performance benchmarking.",
        ],
        id: [
          "Mengembangkan sistem latihan tes kecermatan berbasis web interaktif dengan model monetisasi berlangganan.",
          "Membangun backend menggunakan PHP (Laravel) dan MySQL dengan optimasi caching performa tinggi menggunakan Redis.",
          "Mengembangkan sistem manajemen user berjenjang, paket langganan, dan pembatasan akses konten otomatis.",
          "Integrasi Payment Gateway Midtrans untuk checkout dan verifikasi pembayaran instan.",
          "Menyediakan fitur analitik hasil latihan, tracking kecepatan, dan akurasi evaluasi pengguna.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "Livewire",
        "AlpineJs",
        "Sweetalert2Js",
        "ChoicesJs",
        "Redis",
        "Midtrans Payment Gateway",
        "FilePond",
      ],
      url: "https://abscermatku.com",
    },
    {
      id: "kehati",
      title: {
        en: "Biodiversity & Geospatial Information System (KEHATI)",
        id: "Sistem Pengelolaan Keanekaragaman Hayati & Geospasial",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "07/2025",
      category: "gov",
      description: {
        en: [
          "Developed a provincial-scale biodiversity monitoring and GIS mapping platform across West Java.",
          "Built modular Laravel backend and normalized MySQL database structures.",
          "Integrated geospatial interactive maps using LeafletJS and statistical chart dashboards with ApexCharts.",
          "Structured tabular data management and automated export capabilities via DataTables and Maatwebsite Excel.",
        ],
        id: [
          "Mengembangkan sistem pengelolaan keanekaragaman hayati dan data pemetaan geospasial berbasis web se-Jawa Barat.",
          "Membangun backend menggunakan PHP (Laravel) dan basis data MySQL.",
          "Mengembangkan sistem modular untuk tata kelola fitur aplikasi dinamis.",
          "Integrasi peta interaktif geospasial dengan LeafletJS dan visualisasi data statistik ApexCharts.",
          "Mengelola data dan export laporan komprehensif menggunakan DataTables & Maatwebsite Excel.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "AlpineJS",
        "LeafletJS",
        "ApexCharts",
        "Redis",
        "ChoicesJs",
        "FilePond",
      ],
      url: "https://oss-dlh.jabarprov.go.id/kehati",
    },
    {
      id: "nvguitar",
      title: {
        en: "E-Commerce Guitar Web Platform",
        id: "E-Commerce Guitar",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "NV Guitar House",
      period: "01/2025",
      category: "business",
      description: {
        en: [
          "Developed an e-commerce website for musical instrument cataloging and online guitar sales.",
          "Built modular Laravel backend with inventory tracking and responsive Bootstrap interface.",
          "Integrated dynamic client filtering with Livewire and sales trend analytics with ApexCharts.",
        ],
        id: [
          "Mengembangkan website e-commerce modern untuk katalog dan transaksi penjualan gitar.",
          "Membangun backend berbasis Laravel & MySQL dengan arsitektur modular.",
          "Membuat antarmuka responsif dengan Bootstrap & Livewire yang interaktif.",
          "Mengelola data produk, varian, dan inventaris dengan DataTables.",
          "Menampilkan dashboard analitik transaksi penjualan menggunakan ApexCharts.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "ApexCharts",
        "AlpineJs",
        "ChoicesJs",
        "FilePond",
      ],
    },
    {
      id: "manifest-mobile",
      title: {
        en: "Enterprise Manifest Mobile Application",
        id: "Aplikasi Manifest Mobile",
      },
      role: {
        en: "Mobile Application Developer",
        id: "Mobile Developer",
      },
      institution: "PT Mutiara Tanjung Lestari",
      period: "10/2024",
      category: "mobile",
      description: {
        en: [
          "Engineered a mobile manifest management app for field logistics and staff verification.",
          "Integrated directly with internal DigiHR corporate cloud platform.",
          "Developed hybrid Android app leveraging Ionic Framework and ReactJS components.",
          "Connected application with Android Serial Port API acting as a hardware communication bridge.",
        ],
        id: [
          "Mengembangkan aplikasi mobile untuk sistem manifest operasional perusahaan.",
          "Mengintegrasikan sistem langsung dengan platform HR internal (DigiHR).",
          "Mengembangkan aplikasi Android berbasis hybrid menggunakan Ionic Framework.",
          "Menghubungkan aplikasi dengan Android Serial Port API sebagai bridge komunikasi perangkat keras.",
          "Menggunakan ReactJS untuk pengembangan arsitektur komponen antarmuka pengguna.",
        ],
      },
      techStack: [
        "Ionic",
        "ReactJS",
        "Android (Serial Port API)",
        "REST API Integration",
        "DigiHR System",
      ],
    },
    {
      id: "dlh-company-profile",
      title: {
        en: "Official Government Portal & Environmental Profile",
        id: "Company Profile Dinas Lingkungan Hidup",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "07/2024",
      category: "gov",
      description: {
        en: [
          "Created official public portal presenting environmental policy, news, and civic information.",
          "Engineered modular CMS backend in PHP Laravel and MySQL.",
          "Visualized departmental environmental program metrics using ApexCharts.",
        ],
        id: [
          "Mengembangkan website profil dinas resmi berbasis web publik yang representatif dan responsif.",
          "Membangun backend administrasi konten dengan PHP (Laravel) dan MySQL.",
          "Mengembangkan sistem modular untuk publikasi program kerja, berita, dan regulasi dinas.",
          "Menampilkan visualisasi statistik pencapaian program lingkungan hidup menggunakan ApexCharts.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "DataTables",
        "ApexCharts",
      ],
    },
    {
      id: "akademik-abscat",
      title: {
        en: "Academic Information & Examination System",
        id: "Sistem Informasi Akademik & Exam",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "Anton Bimbel Student",
      period: "05/2024",
      category: "education",
      description: {
        en: [
          "Architected comprehensive student academic records, timetabling, and exam management system.",
          "Crafted rich exam builder using Summernote WYSIWYG editor and Livewire interactivity.",
          "Implemented QR Code generation for student identity validation and attendance tracking.",
          "Visualized student grade progression and score analytics using ApexCharts.",
        ],
        id: [
          "Mengembangkan sistem informasi terintegrasi manajemen akademik, jadwal belajar, dan bank soal ujian.",
          "Membangun backend menggunakan PHP (Laravel) dan MySQL dengan manajemen modular.",
          "Membuat fitur interaktif menggunakan Livewire, jQuery, dan Summernote rich-text editor.",
          "Menyediakan sistem QR Code otomatis untuk verifikasi kehadiran dan identitas peserta.",
          "Menyajikan statistik perkembangan nilai dan analitik performa siswa dengan ApexCharts.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "ApexCharts",
        "Simple QRCode",
        "File management",
        "Select2Js",
        "SummernoteJs",
      ],
      url: "https://akademik.abscat.net",
    },
    {
      id: "cbt-abscat",
      title: {
        en: "Computer Based Test (CBT) Assessment System",
        id: "Sistem Informasi CBT (Computer Based Test)",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "Anton Bimbel Student",
      period: "02/2024",
      category: "education",
      description: {
        en: [
          "Built a secure Computer-Based Testing engine with synchronized timers and anti-tamper safeguards.",
          "Calculated instant evaluation results and module performance percentiles via ApexCharts.",
          "Generated verifiable digital completion certificates with Simple QRCode integration.",
        ],
        id: [
          "Mengembangkan sistem ujian berbasis komputer (CBT) real-time dengan timer otomatis dan anti-cheat.",
          "Membangun backend modular menggunakan PHP (Laravel) dan MySQL.",
          "Menampilkan dashboard evaluasi hasil dan statistik skor per modul menggunakan ApexCharts.",
          "Mengelola data soal, kunci jawaban, dan generate sertifikat digital berbasis Simple QRCode.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "ApexCharts",
        "Simple QRCode",
        "File management",
        "Select2Js",
        "SummernoteJs",
      ],
    },
    {
      id: "djalubali",
      title: {
        en: "Java–Bali Intercity Travel Reservation & Fleet System",
        id: "Company Profile & Sistem Reservasi Travel Jawa–Bali",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "Djalubali Transport",
      period: "11/2023",
      category: "business",
      description: {
        en: [
          "Engineered inter-provincial travel booking engine with route scheduling and passenger manifests.",
          "Integrated digital boarding passes and QR Code ticket validation for fleet departure check-ins.",
          "Visualized occupancy rates and financial revenue analytics with ApexCharts.",
        ],
        id: [
          "Mengembangkan platform pemesanan tiket travel antar provinsi (Jawa - Bali) terpadu.",
          "Membangun sistem reservasi online dengan pemilihan rute, jadwal keberangkatan, dan manifest penumpang.",
          "Menerapkan e-ticket dengan validasi Simple QRCode untuk check-in armada.",
          "Menampilkan statistik okupansi dan analitik pendapatan dengan ApexCharts.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "ApexCharts",
        "Simple QRCode",
        "File management",
        "Select2Js",
        "SummernoteJs",
      ],
    },
    {
      id: "berau-logbook",
      title: {
        en: "Mining Internship Electronic Logbook System",
        id: "Sistem Informasi Logbook Magang",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "PT Berau Coal Energy Tbk",
      period: "08/2023",
      category: "business",
      description: {
        en: [
          "Developed digital daily activity monitoring and attendance logging for industrial mining interns.",
          "Built hierarchical field mentor approval workflows and digital sign-off procedures.",
          "Integrated secure document attachments using FilePond, Alpine.js, and QR code verification.",
          "Rendered intern evaluation and attendance analytics using ApexCharts.",
        ],
        id: [
          "Mengembangkan sistem monitoring logbook dan absensi harian peserta magang industri pertambangan.",
          "Membangun modul verifikasi kegiatan harian oleh mentor lapangan secara digital.",
          "Integrasi upload dokumen dan laporan kegiatan menggunakan FilePond dan AlpineJs.",
          "Menyediakan sistem verifikasi absensi QR Code dan visualisasi laporan kinerja peserta dengan ApexCharts.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "ApexCharts",
        "Simple QRCode",
        "File management",
        "AlpineJs",
        "FilePond",
      ],
      url: "https://logbook.beraucoal.co.id",
    },
    {
      id: "lablingjuara",
      title: {
        en: "Environmental Laboratory Information System (JUARA)",
        id: "Sistem Informasi Laboratorium Lingkungan JUARA",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "UPTD Laboratorium Lingkungan DLH Jawa Barat",
      period: "05/2023",
      category: "gov",
      description: {
        en: [
          "Engineered testing workflow system for environmental specimens (water, air, soil quality across West Java).",
          "Constructed secure modular Laravel & MySQL backend following governmental testing standards.",
          "Built modern interface utilizing Tailwind CSS, Bootstrap, and AdminLTE dashboards.",
          "Rendered laboratory specimen turnaround analytics with ApexCharts and exportable reports.",
        ],
        id: [
          "Mengembangkan sistem informasi pengujian sampel laboratorium lingkungan (air, udara, tanah) se-Jawa Barat.",
          "Membangun arsitektur backend Laravel & MySQL modular dengan keamanan data terstandardisasi.",
          "Membuat antarmuka modern responsif dengan kombinasi Tailwind CSS, Bootstrap, dan AdminLTE.",
          "Visualisasi metrik kapasitas pengujian laboratorium dengan ApexCharts serta pelaporan DataTables.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Bootstrap",
        "Tailwind CSS",
        "jQuery",
        "AdminLTE",
        "DataTables",
        "ApexCharts",
      ],
      url: "https://lablingjuara.jabarprov.go.id",
    },
    {
      id: "digihr",
      title: {
        en: "Digital Human Resources (DigiHR) ERP System",
        id: "Digital Human Resources (DigiHR)",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "PT Mutiara Tanjung Lestari",
      period: "06/2022",
      category: "business",
      description: {
        en: [
          "Developed enterprise Human Resource Information System (HRIS) deployed on corporate cloud.",
          "Administered attendance tracking, automated leave requests, overtime approvals, and payroll.",
          "Integrated employee QR code cards for contactless access verification.",
          "Synthesized staff turnover and punctuality metrics using Chart.js.",
        ],
        id: [
          "Mengembangkan sistem ERP Human Resource Information System (HRIS) terpadu berbasis cloud.",
          "Mengelola modul presensi karyawan, pengajuan cuti, lembur, dan payroll otomatis.",
          "Integrasi QR Code generator untuk absensi dan kartu identitas digital karyawan.",
          "Menampilkan dashboard analitik turnover dan kehadiran karyawan menggunakan Chart.js.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Bootstrap",
        "Tailwind CSS",
        "jQuery",
        "AdminLTE",
        "Chart.js",
        "Simple QRCode",
        "Select2Js",
      ],
      url: "https://digihr.mtl.co.id",
    },
    {
      id: "sikeling",
      title: {
        en: "Environmental Feasibility & Clearance System (SIKELING)",
        id: "Sistem Informasi Kelayakan Lingkungan (SIKELING)",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "01/2023",
      category: "gov",
      description: {
        en: [
          "Created assessment and verification system for environmental permits (Amdal & UKL-UPL) in West Java.",
          "Engineered multi-stage document approval chains with automated review notifications.",
          "Mapped environmental permit approval statistics per district/city with ApexCharts.",
        ],
        id: [
          "Mengembangkan sistem evaluasi dan verifikasi dokumen kelayakan lingkungan (Amdal / UKL-UPL) berbasis web.",
          "Membangun alur persetujuan dokumen berjenjang dengan notifikasi status verifikasi berkas.",
          "Menampilkan statistik kelayakan izin lingkungan per kabupaten/kota dengan ApexCharts.",
          "Mengelola ribuan data arsip dokumen perizinan lingkungan hidup.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "AdminLTE",
        "DataTables",
        "ApexCharts",
      ],
      url: "https://sikeling.jabarprov.go.id",
    },
    {
      id: "pibas",
      title: {
        en: "Waste Bank Information Center (PIBAS)",
        id: "Pusat Informasi Bank Sampah (PIBAS)",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "05/2021",
      category: "gov",
      description: {
        en: [
          "Developed waste bank registration and transaction tracking system across West Java regencies.",
          "Calculated recycled material weight, volume reductions, and economic value conversions.",
          "Plotted annual plastic and solid waste reduction curves with Chart.js.",
        ],
        id: [
          "Mengembangkan sistem informasi inventarisasi dan transaksi bank sampah di wilayah Jawa Barat.",
          "Membangun modul pencatatan timbulan sampah, jenis sampah terdaur ulang, dan konversi nilai ekonomi.",
          "Menampilkan visualisasi data reduksi sampah tahunan menggunakan Chart.js.",
          "Membuat laporan periodik terpadu yang dapat diunduh via Maatwebsite Excel.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "AdminLTE",
        "DataTables",
        "Chart.js",
      ],
    },
    {
      id: "siapsekota",
      title: {
        en: "Adiwiyata Eco-School Information System (SIAPSEKOTA)",
        id: "Sistem Informasi Adiwiyata Sekota (SIAPSEKOTA)",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "04/2021",
      category: "gov",
      description: {
        en: [
          "Constructed school environmental culture evaluation platform (Adiwiyata program) for West Java.",
          "Designed self-assessment digital rubrics with document evidence uploads.",
          "Mapped recognized green eco-schools distribution across West Java municipalities.",
        ],
        id: [
          "Mengembangkan sistem informasi penilaian program sekolah peduli dan berbudaya lingkungan (Adiwiyata).",
          "Menyediakan instrumen penilaian mandiri sekolah dengan verifikasi bukti fisik secara online.",
          "Menampilkan visualisasi sebaran sekolah Adiwiyata tingkat provinsi menggunakan Chart.js.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "AdminLTE",
        "DataTables",
        "Chart.js",
      ],
    },
    {
      id: "agenda-dlh",
      title: {
        en: "Official Government Agenda & Conference Scheduling System",
        id: "Sistem Informasi Agenda & Kegiatan",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "04/2021",
      category: "gov",
      description: {
        en: [
          "Engineered leadership agenda management and meeting room scheduling system.",
          "Crafted high-speed reactive UI using Tailwind CSS, AdminLTE, and Laravel Livewire.",
          "Visualized meeting room occupancy and schedule overlaps using Chart.js.",
        ],
        id: [
          "Mengembangkan sistem jadwal agenda pimpinan dan rapat koordinasi dinas berbasis web.",
          "Membangun antarmuka modern dengan Tailwind CSS & AdminLTE serta interaktivitas Livewire.",
          "Visualisasi jadwal padat dan keterisian ruang rapat dinas dengan Chart.js.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Tailwind CSS",
        "jQuery",
        "AdminLTE",
        "DataTables",
        "Chart.js",
      ],
      url: "https://oss-dlh.jabarprov.go.id/agenda",
    },
    {
      id: "dsda",
      title: {
        en: "Water Resources Infrastructure Hazard Monitoring (DSDA)",
        id: "Sistem Informasi Pelaporan & Monitoring Observasi Bahaya DSDA",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "Dinas Sumber Daya Air Provinsi Jawa Barat",
      period: "02/2021",
      category: "gov",
      description: {
        en: [
          "Engineered rapid incident reporting and hazard observation system for water resources.",
          "Enabled field staff to submit damage reports with geo-coordinates and photo evidence.",
          "Synthesized mitigation progress metrics and danger level rankings using Chart.js.",
        ],
        id: [
          "Mengembangkan sistem informasi pelaporan dan monitoring bahaya/kerusakan infrastruktur sumber daya air.",
          "Membangun fitur pelaporan cepat temuan lapangan beserta dokumentasi foto dan lokasi titik bahaya.",
          "Menyajikan statistik tren laporan bahaya dan status mitigasi penanganan bencana air dengan Chart.js.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "AdminLTE",
        "DataTables",
        "Chart.js",
      ],
      url: "https://dsda.com",
    },
    {
      id: "eselralaka",
      title: {
        en: "Traffic Incident Case Resolution Information System (E-SELRALAKA)",
        id: "Sistem Informasi E-SELRALAKA",
      },
      role: {
        en: "Web & Android Developer",
        id: "Web & Android Developer",
      },
      institution: "Subdit Gakkum Polda Jawa Barat",
      period: "06/2020",
      category: "gov",
      description: {
        en: [
          "Developed traffic collision legal settlement and reporting system across web and Android.",
          "Secured confidential law enforcement case records using Laravel and MySQL.",
          "Plotted case resolution percentages and traffic accident trends using Chart.js.",
        ],
        id: [
          "Mengembangkan sistem informasi pelaporan penyelesaian perkara kecelakaan lalu lintas berbasis web & Android.",
          "Membangun backend data perkara yang aman dan terintegrasi menggunakan PHP Laravel & MySQL.",
          "Membuat antarmuka responsif cepat menggunakan Tailwind CSS dan Livewire.",
          "Menyajikan visualisasi rekapitulasi angka laka lantas dan progres penyelesaian perkara via Chart.js.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "Livewire",
        "MySQL",
        "Tailwind CSS",
        "jQuery",
        "Chart.js",
      ],
    },
    {
      id: "pos-apotek",
      title: {
        en: "Pharmacy Point of Sales (POS) & Drug Inventory",
        id: "Point of Sales (POS) Apotek",
      },
      role: {
        en: "Web & Android Developer",
        id: "Web & Android Developer",
      },
      institution: "Apotek Hirosah Tauhid",
      period: "01/2020",
      category: "business",
      description: {
        en: [
          "Engineered unified web and Android cash register and prescription medication inventory.",
          "Built backend on PHP CodeIgniter and MySQL with high transaction speed.",
          "Generated sales revenue and margin analytics using Highcharts.",
          "Built companion cashier mobile Android app using Ionic Framework.",
        ],
        id: [
          "Mengembangkan sistem kasir dan inventaris obat terpadu berbasis web dan aplikasi Android.",
          "Membangun backend menggunakan CodeIgniter dan MySQL.",
          "Menampilkan analitik grafik tren penjualan obat dan margin profit menggunakan Highcharts.",
          "Mengembangkan aplikasi Android kasir berbasis hybrid (Ionic Framework).",
        ],
      },
      techStack: [
        "PHP",
        "CodeIgniter",
        "MySQL",
        "jQuery",
        "Bootstrap",
        "Highcharts",
        "Ionic",
      ],
      url: "https://apotek.hirosahtauhid.sch.id",
    },
    {
      id: "bapokting",
      title: {
        en: "Essential Commodities Price Monitoring (BAPOKTING)",
        id: "Sistem Informasi Bapokting (Bahan Pokok & Penting)",
      },
      role: {
        en: "Web & Android Developer",
        id: "Web & Android Developer",
      },
      institution: "Dinas Perdagangan dan Perindustrian Kab. Bandung",
      period: "12/2019",
      category: "gov",
      description: {
        en: [
          "Created market monitoring system for staple food prices and supply stocks across Bandung Regency.",
          "Sent push alerts on sudden market commodity price spikes via Firebase Cloud Messaging.",
          "Deployed companion Android surveyor app developed using hybrid Ionic Framework.",
        ],
        id: [
          "Mengembangkan sistem informasi monitoring harga dan ketersediaan bahan pokok dan penting berbasis web & Android.",
          "Membangun backend menggunakan PHP Laravel dan MySQL.",
          "Integrasi notifikasi harga dan lonjakan komoditas pasar menggunakan Firebase Cloud Messaging.",
          "Mengembangkan aplikasi mobile Android petugas survei pasar berbasis hybrid Ionic.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "MySQL",
        "jQuery",
        "Bootstrap",
        "Ionic",
        "Firebase",
      ],
      url: "https://sibapokting.bandungkab.go.id",
    },
    {
      id: "sppklhs",
      title: {
        en: "Strategic Environmental Assessment Regulatory System (SPPKLHS)",
        id: "Sistem Informasi SPPKLHS",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "07/2019",
      category: "gov",
      description: {
        en: [
          "Engineered procedural regulatory tracking for Strategic Environmental Assessment (KLHS).",
          "Automated compliance tracking reports and data management via Laravel and MySQL.",
          "Plotted municipal regulatory compliance progress using Chart.js.",
        ],
        id: [
          "Mengembangkan sistem informasi tata cara penyelenggaraan kajian lingkungan hidup strategis (KLHS).",
          "Membangun backend pelaporan data regulasi menggunakan PHP (Laravel) dan MySQL.",
          "Tampilan web responsif dengan Bootstrap & AdminLTE, visualisasi data kepatuhan KLHS via Chart.js.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "AdminLTE",
        "DataTables",
        "Chart.js",
      ],
    },
    {
      id: "pildadu",
      title: {
        en: "Integrated Environmental Data Compilation System (PILDADU)",
        id: "Sistem Kompilasi Data Lingkungan Hidup Terpadu (PILDADU)",
      },
      role: {
        en: "Web Developer",
        id: "Web Developer",
      },
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "05/2019",
      category: "gov",
      description: {
        en: [
          "Built provincial environmental data compilation system aggregating water, air, and forest quality metrics.",
          "Generated environmental quality indices (IKLH) comparison charts with Chart.js.",
          "Provided comprehensive periodic spreadsheet export via Maatwebsite Excel.",
        ],
        id: [
          "Mengembangkan sistem kompilasi data lingkungan hidup terpadu tingkat provinsi Jawa Barat.",
          "Membangun pengelolaan database multivariat lingkungan menggunakan Laravel dan MySQL.",
          "Menampilkan grafik komparasi indeks kualitas lingkungan hidup (IKLH) dengan Chart.js.",
          "Fitur ekspor laporan berkala dengan format Excel via Maatwebsite.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "MySQL",
        "Bootstrap",
        "jQuery",
        "AdminLTE",
        "DataTables",
        "Chart.js",
      ],
    },
    {
      id: "simanis",
      title: {
        en: "Student Information Management System (SIMANIS)",
        id: "Sistem Informasi Manajemen Siswa (SIMANIS)",
      },
      role: {
        en: "Web & Android Developer",
        id: "Web & Android Developer",
      },
      institution: "SMA Hirosah Tauhid",
      period: "01/2019",
      category: "education",
      description: {
        en: [
          "Built unified academic records, attendance logging, and tuition billing platform.",
          "Integrated Firebase push notifications directly alerting parents on student check-in events.",
          "Developed companion mobile Android application using hybrid Ionic Framework.",
          "Managed automated grade reporting and student master ledger with Yajra DataTables.",
        ],
        id: [
          "Mengembangkan sistem informasi akademik, absensi, dan pembayaran SPP siswa berbasis web & Android.",
          "Membangun backend Laravel & MySQL dengan notifikasi kehadiran siswa langsung ke orang tua via Firebase.",
          "Mengembangkan aplikasi mobile Android untuk wali murid berbasis hybrid Ionic Framework.",
          "Mengelola data rekap rapor dan buku induk siswa menggunakan Yajra Datatables & Maatwebsite Excel.",
        ],
      },
      techStack: [
        "PHP",
        "Laravel",
        "MySQL",
        "jQuery",
        "Bootstrap",
        "Ionic",
        "Firebase",
      ],
    },
  ] as Project[],
};
