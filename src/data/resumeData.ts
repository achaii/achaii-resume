export interface Project {
  id: string;
  title: string;
  role: string;
  institution: string;
  period: string;
  category: 'web' | 'mobile' | 'gov' | 'education' | 'business';
  description: string[];
  techStack: string[];
  url?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  details: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  badge?: string;
}

export const resumeData = {
  personal: {
    name: "Deni Hidayat, S.T., MOS",
    title: "Software Engineer",
    subTitle: "Full-Stack Web & Hybrid Mobile Developer",
    bio: "Software Engineer berpengalaman lebih dari 7 tahun dalam membangun sistem informasi berskala institusi pemerintahan, aplikasi perbankan, platform e-commerce, dan sistem manajemen enterprise. Memiliki keahlian mendalam pada ekosistem Laravel, modern JavaScript (React, Vue, Alpine), REST API, serta arsitektur database relasional & cloud.",
    phone: "+62 812 2084 4600",
    phoneClean: "6281220844600",
    email: "hop2style@gmail.com",
    github: "achaii",
    githubUrl: "https://github.com/achaii",
    linkedin: "achaii",
    linkedinUrl: "https://linkedin.com/in/achaii",
    birthPlaceDate: "Bandung, 13 Juni 1989",
    domicile: "Kota Tasikmalaya, Jawa Barat (Domisili) & Kab. Bandung",
    addressKTP: "Komp. Pasir Kawung Blok D2 No8 RT07/RW06 Desa Cimekar Kec. Cileunyi, Kab. Bandung 40623",
    addressDomicile: "Garuda Mas Residence Blok B.16 Kel. Setiamulya Kec. Tamansari, Kota Tasikmalaya 46196",
  },

  stats: [
    { label: "Pengalaman Kerja", value: "7+ Tahun" },
    { label: "Proyek Selesai", value: "22+ Proyek" },
    { label: "Sertifikasi Resmi", value: "14 Sertifikat" },
    { label: "Pendidikan Terakhir", value: "S1 Teknik Informatika" },
  ],

  experiences: [
    {
      id: "bpr",
      company: "PT. BPR Ukabima Lumbung Sejahtera",
      role: "IT Support",
      period: "04/2026 – Saat ini",
      highlights: [
        "Helpdesk dan ticketing penanganan keluhan atau kendala perangkat kerja karyawan (komputer, printer dan akses sistem).",
        "Dukungan aplikasi memastikan aplikasi inti perbankan dan kanal digital berjalan optimal tanpa hambatan.",
        "Keamanan dan pemeliharaan melakukan pemeliharaan rutin, pencadangan data dan mitigasi awal risiko gangguan sistem.",
        "Mendukung pelaporan berkaitan dengan perbankan yang ada di perusahaan.",
        "Mendukung segala macam keadministrasian di perusahaan."
      ]
    },
    {
      id: "freelance",
      company: "Freelancer",
      role: "Software Engineer",
      period: "01/2019 – Saat Ini",
      highlights: [
        "Mengembangkan arsitektur frontend dan backend aplikasi web modern dan responsif.",
        "Membuat tampilan antarmuka interaktif yang cepat, aksesibel, dan mobile-friendly.",
        "Merancang dan mengintegrasikan RESTful API performa tinggi ke dalam aplikasi.",
        "Mengembangkan aplikasi Android berbasis hybrid (Ionic Framework & ReactJS).",
        "Mengintegrasikan modul hybrid dengan fitur Android native serta Serial Port Bridge."
      ]
    },
    {
      id: "rshs",
      company: "RSUP Dr. Hasan Sadikin Bandung",
      role: "Administrasi & Pengelolaan Data",
      period: "12/2014 – 02/2023",
      highlights: [
        "Mengelola administrasi SDM terpusat (ASN, Non-ASN, dan tenaga outsourcing).",
        "Menyusun laporan inventarisasi peralatan medis dan non-medis secara komprehensif.",
        "Mengelola dan menyusun kalkulasi laporan KPI serta indikator mutu rumah sakit.",
        "Menyusun dan menganalisis laporan keluhan pasien serta keluarga untuk perbaikan layanan.",
        "Mengelola aplikasi sistem informasi terkait instalasi rawat inap.",
        "Menyusun laporan kesekretariatan dan menyiapkan kebutuhan rapat koordinasi internal & eksternal."
      ]
    },
    {
      id: "darul-hikam",
      company: "SMA Darul Hikam Bandung",
      role: "IT Support",
      period: "04/2014 – 06/2014",
      highlights: [
        "Memastikan seluruh unit komputer operasional berfungsi secara prima.",
        "Memastikan seluruh infrastruktur komputer terhubung ke jaringan LAN dan internet.",
        "Melakukan monitoring aplikasi berkala agar berjalan normal tanpa gangguan.",
        "Memperbarui sistem operasi dan lisensi aplikasi sekolah secara terjadwal."
      ]
    },
    {
      id: "icon-kirana",
      company: "PT. Icon Kirana Solusi",
      role: "Surveyor",
      period: "06/2013 – 03/2014",
      highlights: [
        "Menyusun laporan verifikasi dan inventarisasi aset daerah.",
        "Mengelola database inventaris aset menggunakan SIMDA Kabupaten Bandung Barat.",
        "Melakukan bimbingan teknis inventaris aset kepada operator instansi pemerintah.",
        "Merekap dan memvalidasi kelengkapan data aset fisik.",
        "Menyusun flowchart alur kerja proses bisnis bagian pemasaran PT Pupuk Kujang.",
        "Menyusun pedoman kerja dan dokumen Standard Operating Procedure (SOP) PT Pupuk Kujang."
      ]
    }
  ] as Experience[],

  education: [
    {
      institution: "STMIK LPKIA Bandung",
      degree: "S1 Teknik Informatika",
      year: "2012",
      details: "Judul Skripsi: Prototipe Sistem Informasi Keamanan Ruangan Menggunakan RFID dengan Informasi Menggunakan SMS"
    },
    {
      institution: "PKN LPKIA Bandung",
      degree: "D3 Manajemen Informatika",
      year: "2011",
      details: "Judul Seminar: Sistem Informasi Inventaris Asset di Bagian Renmin Polda Jawa Barat"
    }
  ] as Education[],

  skills: {
    programming: [
      { name: "JavaScript", level: "Advance" },
      { name: "PHP", level: "Advance" },
      { name: "Python", level: "Middle" },
      { name: "Golang", level: "Middle" },
      { name: "Java", level: "Middle" }
    ],
    backend: [
      "Laravel", "CodeIgniter", "Express.js", "Node.js", "RESTful API", "Livewire", "Redis Caching"
    ],
    frontend: [
      "React.js", "Vue.js", "Alpine.js", "HTMX", "Tailwind CSS", "Bootstrap", "Leaflet.js (GIS/Maps)", "ApexCharts", "Chart.js", "Highcharts", "DataTables", "jQuery"
    ],
    databases: [
      "MySQL", "PostgreSQL", "SQLite", "Firebase", "Cloud Firestore", "Supabase", "Redis"
    ],
    mobile: [
      "Ionic Framework (Hybrid)", "Android Serial Port API", "Native Android Bridge", "React Native UI Components"
    ],
    analysisAndManagement: [
      "Proses Bisnis Analisis", "Project Management", "Flowchart & Use Case", "Data Entry & Validation", "Microsoft Visio", "Microsoft Office Specialist (MOS)"
    ]
  },

  certificates: [
    {
      title: "Literasi Kecerdasan Artificial",
      issuer: "MOOC ITB Tahun 2026",
      date: "06/2026",
      badge: "AI"
    },
    {
      title: "Permodelan Sistem Informasi Geografis",
      issuer: "MOOC ITB Tahun 2026",
      date: "06/2026",
      badge: "GIS"
    },
    {
      title: "CSS Essentials",
      issuer: "Cisco Networking Academy",
      date: "02/2026",
      badge: "Cisco"
    },
    {
      title: "HTML Essentials",
      issuer: "Cisco Networking Academy",
      date: "11/2025",
      badge: "Cisco"
    },
    {
      title: "Dasar DevOps",
      issuer: "Dicoding Indonesia",
      date: "02/2023",
      badge: "Dicoding"
    },
    {
      title: "Dasar Jaringan Komputer",
      issuer: "Dicoding Indonesia",
      date: "02/2023",
      badge: "Dicoding"
    },
    {
      title: "Manajemen Infrastruktur Dan Teknologi Program Massive Open Online Course (2022)",
      issuer: "Fakultas Ilmu Komputer Universitas Indonesia",
      date: "03/2023",
      badge: "UI"
    },
    {
      title: "Pelatihan Data Visualization - Program Professional Academy",
      issuer: "Digital Talent Scholarship (DTS) Kemkominfo",
      date: "12/2022",
      badge: "Kominfo"
    },
    {
      title: "Javascript (Basic) & SQL (Basic)",
      issuer: "HackerRank",
      date: "09/2022",
      badge: "HackerRank"
    },
    {
      title: "Git, Python, Sass, SQL",
      issuer: "Progate",
      date: "09/2022",
      badge: "Progate"
    },
    {
      title: "Pendampingan Pengembangan Sistem Informasi Layanan Lingkungan di Lingkungan DLH Jabar",
      issuer: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      date: "07/2022",
      badge: "DLH Jabar"
    },
    {
      title: "Dasar Pemrograman Javascript",
      issuer: "Dicoding Indonesia",
      date: "02/2022",
      badge: "Dicoding"
    },
    {
      title: "Dasar Pemrograman Web",
      issuer: "Dicoding Indonesia",
      date: "02/2022",
      badge: "Dicoding"
    },
    {
      title: "Microsoft Office Specialist (MOS)",
      issuer: "Certport",
      date: "10/2011",
      badge: "Certport"
    }
  ] as Certificate[],

  projects: [
    {
      id: "abscermatku",
      title: "Sistem Persiapan Tes Kecermatan (Polri & TNI) – Subscription System",
      role: "Web Developer",
      institution: "Anton Bimbel Student",
      period: "11/2025",
      category: "education",
      description: [
        "Mengembangkan sistem latihan tes kecermatan berbasis web interaktif dengan model monetisasi berlangganan.",
        "Membangun backend menggunakan PHP (Laravel) dan MySQL dengan optimasi caching performa tinggi menggunakan Redis.",
        "Mengembangkan sistem manajemen user berjenjang, paket langganan, dan pembatasan akses konten otomatis.",
        "Integrasi Payment Gateway Midtrans untuk checkout dan verifikasi pembayaran instan.",
        "Menyediakan fitur analitik hasil latihan, tracking kecepatan, dan akurasi evaluasi pengguna."
      ],
      techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery", "Livewire", "AlpineJs", "Sweetalert2Js", "ChoicesJs", "Redis", "Midtrans Payment Gateway", "FilePond"],
      url: "https://abscermatku.com"
    },
    {
      id: "kehati",
      title: "Sistem Pengelolaan Keanekaragaman Hayati & Geospasial",
      role: "Web Developer",
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "07/2025",
      category: "gov",
      description: [
        "Mengembangkan sistem pengelolaan keanekaragaman hayati dan data pemetaan geospasial berbasis web se-Jawa Barat.",
        "Membangun backend menggunakan PHP (Laravel) dan basis data MySQL.",
        "Mengembangkan sistem modular untuk tata kelola fitur aplikasi dinamis.",
        "Integrasi peta interaktif geospasial dengan LeafletJS dan visualisasi data statistik ApexCharts.",
        "Mengelola data dan export laporan komprehensif menggunakan DataTables & Maatwebsite Excel."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap", "jQuery", "AlpineJS", "LeafletJS", "ApexCharts", "Redis", "ChoicesJs", "FilePond"],
      url: "https://oss-dlh.jabarprov.go.id/kehati"
    },
    {
      id: "nvguitar",
      title: "E-Commerce Guitar",
      role: "Web Developer",
      institution: "NV Guitar House",
      period: "01/2025",
      category: "business",
      description: [
        "Mengembangkan website e-commerce modern untuk katalog dan transaksi penjualan gitar.",
        "Membangun backend berbasis Laravel & MySQL dengan arsitektur modular.",
        "Membuat antarmuka responsif dengan Bootstrap & Livewire yang interaktif.",
        "Mengelola data produk, varian, dan inventaris dengan DataTables.",
        "Menampilkan dashboard analitik transaksi penjualan menggunakan ApexCharts."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap", "jQuery", "ApexCharts", "AlpineJs", "ChoicesJs", "FilePond"],
      url: "https://nvguitarhouse.com"
    },
    {
      id: "manifest-mobile",
      title: "Aplikasi Manifest Mobile",
      role: "Mobile Developer",
      institution: "PT Mutiara Tanjung Lestari",
      period: "10/2024",
      category: "mobile",
      description: [
        "Mengembangkan aplikasi mobile untuk sistem manifest operasional perusahaan.",
        "Mengintegrasikan sistem langsung dengan platform HR internal (DigiHR).",
        "Mengembangkan aplikasi Android berbasis hybrid menggunakan Ionic Framework.",
        "Menghubungkan aplikasi dengan Android Serial Port API sebagai bridge komunikasi perangkat keras.",
        "Menggunakan ReactJS untuk pengembangan arsitektur komponen antarmuka pengguna."
      ],
      techStack: ["Ionic", "ReactJS", "Android (Serial Port API)", "REST API Integration", "DigiHR System"]
    },
    {
      id: "dlh-company-profile",
      title: "Company Profile Dinas Lingkungan Hidup",
      role: "Web Developer",
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "07/2024",
      category: "gov",
      description: [
        "Mengembangkan website profil dinas resmi berbasis web publik yang representatif dan responsif.",
        "Membangun backend administrasi konten dengan PHP (Laravel) dan MySQL.",
        "Mengembangkan sistem modular untuk publikasi program kerja, berita, dan regulasi dinas.",
        "Menampilkan visualisasi statistik pencapaian program lingkungan hidup menggunakan ApexCharts."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap", "jQuery", "DataTables", "ApexCharts"]
    },
    {
      id: "akademik-abscat",
      title: "Sistem Informasi Akademik & Exam",
      role: "Web Developer",
      institution: "Anton Bimbel Student",
      period: "05/2024",
      category: "education",
      description: [
        "Mengembangkan sistem informasi terintegrasi manajemen akademik, jadwal belajar, dan bank soal ujian.",
        "Membangun backend menggunakan PHP (Laravel) dan MySQL dengan manajemen modular.",
        "Membuat fitur interaktif menggunakan Livewire, jQuery, dan Summernote rich-text editor.",
        "Menyediakan sistem QR Code otomatis untuk verifikasi kehadiran dan identitas peserta.",
        "Menyajikan statistik perkembangan nilai dan analitik performa siswa dengan ApexCharts."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap", "jQuery", "ApexCharts", "Simple QRCode", "File management", "Select2Js", "SummernoteJs"],
      url: "https://akademik.abscat.net"
    },
    {
      id: "cbt-abscat",
      title: "Sistem Informasi CBT (Computer Based Test)",
      role: "Web Developer",
      institution: "Anton Bimbel Student",
      period: "02/2024",
      category: "education",
      description: [
        "Mengembangkan sistem ujian berbasis komputer (CBT) real-time dengan timer otomatis dan anti-cheat.",
        "Membangun backend modular menggunakan PHP (Laravel) dan MySQL.",
        "Menampilkan dashboard evaluasi hasil dan statistik skor per modul menggunakan ApexCharts.",
        "Mengelola data soal, kunci jawaban, dan generate sertifikat digital berbasis Simple QRCode."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap", "jQuery", "ApexCharts", "Simple QRCode", "File management", "Select2Js", "SummernoteJs"],
      url: "https://cbt.abscat.net"
    },
    {
      id: "djalubali",
      title: "Company Profile & Sistem Reservasi Travel Jawa–Bali",
      role: "Web Developer",
      institution: "Djalubali Transport",
      period: "11/2023",
      category: "business",
      description: [
        "Mengembangkan platform pemesanan tiket travel antar provinsi (Jawa - Bali) terpadu.",
        "Membangun sistem reservasi online dengan pemilihan rute, jadwal keberangkatan, dan manifest penumpang.",
        "Menerapkan e-ticket dengan validasi Simple QRCode untuk check-in armada.",
        "Menampilkan statistik okupansi dan analitik pendapatan dengan ApexCharts."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap", "jQuery", "ApexCharts", "Simple QRCode", "File management", "Select2Js", "SummernoteJs"],
      url: "https://traveljawabali.id"
    },
    {
      id: "berau-logbook",
      title: "Sistem Informasi Logbook Magang",
      role: "Web Developer",
      institution: "PT Berau Coal Energy Tbk",
      period: "08/2023",
      category: "business",
      description: [
        "Mengembangkan sistem monitoring logbook dan absensi harian peserta magang industri pertambangan.",
        "Membangun modul verifikasi kegiatan harian oleh mentor lapangan secara digital.",
        "Integrasi upload dokumen dan laporan kegiatan menggunakan FilePond dan AlpineJs.",
        "Menyediakan sistem verifikasi absensi QR Code dan visualisasi laporan kinerja peserta dengan ApexCharts."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap", "jQuery", "ApexCharts", "Simple QRCode", "File management", "AlpineJs", "FilePond"],
      url: "https://logbook.beraucoal.co.id"
    },
    {
      id: "lablingjuara",
      title: "Sistem Informasi Laboratorium Lingkungan JUARA",
      role: "Web Developer",
      institution: "UPTD Laboratorium Lingkungan DLH Provinsi Jawa Barat",
      period: "05/2023",
      category: "gov",
      description: [
        "Mengembangkan sistem informasi pengujian sampel laboratorium lingkungan (air, udara, tanah) se-Jawa Barat.",
        "Membangun arsitektur backend Laravel & MySQL modular dengan keamanan data terstandardisasi.",
        "Membuat antarmuka modern responsif dengan kombinasi Tailwind CSS, Bootstrap, dan AdminLTE.",
        "Visualisasi metrik kapasitas pengujian laboratorium dengan ApexCharts serta pelaporan DataTables."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap", "Tailwind CSS", "jQuery", "AdminLTE", "DataTables", "ApexCharts"],
      url: "https://lablingjuara.jabarprov.go.id"
    },
    {
      id: "digihr",
      title: "Digital Human Resources (DigiHR)",
      role: "Web Developer",
      institution: "PT Mutiara Tanjung Lestari",
      period: "06/2022",
      category: "business",
      description: [
        "Mengembangkan sistem ERP Human Resource Information System (HRIS) terpadu berbasis cloud.",
        "Mengelola modul presensi karyawan, pengajuan cuti, lembur, dan payroll otomatis.",
        "Integrasi QR Code generator untuk absensi dan kartu identitas digital karyawan.",
        "Menampilkan dashboard analitik turnover dan kehadiran karyawan menggunakan Chart.js."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap", "Tailwind CSS", "jQuery", "AdminLTE", "Chart.js", "Simple QRCode", "Select2Js"],
      url: "https://digihr.mtl.co.id"
    },
    {
      id: "sikeling",
      title: "Sistem Informasi Kelayakan Lingkungan (SIKELING)",
      role: "Web Developer",
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "01/2023",
      category: "gov",
      description: [
        "Mengembangkan sistem evaluasi dan verifikasi dokumen kelayakan lingkungan (Amdal / UKL-UPL) berbasis web.",
        "Membangun alur persetujuan dokumen berjenjang dengan notifikasi status verifikasi berkas.",
        "Menampilkan statistik kelayakan izin lingkungan per kabupaten/kota dengan ApexCharts.",
        "Mengelola ribuan data arsip dokumen perizinan lingkungan hidup."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap", "jQuery", "AdminLTE", "DataTables", "ApexCharts"],
      url: "https://sikeling.jabarprov.go.id"
    },
    {
      id: "pibas",
      title: "Pusat Informasi Bank Sampah (PIBAS)",
      role: "Web Developer",
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "05/2021",
      category: "gov",
      description: [
        "Mengembangkan sistem informasi inventarisasi dan transaksi bank sampah di wilayah Jawa Barat.",
        "Membangun modul pencatatan timbulan sampah, jenis sampah terdaur ulang, dan konversi nilai ekonomi.",
        "Menampilkan visualisasi data reduksi sampah tahunan menggunakan Chart.js.",
        "Membuat laporan periodik terpadu yang dapat diunduh via Maatwebsite Excel."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap", "jQuery", "AdminLTE", "DataTables", "Chart.js"],
      url: "https://pibas.dlhjabarprov.net"
    },
    {
      id: "siapsekota",
      title: "Sistem Informasi Adiwiyata Sekota (SIAPSEKOTA)",
      role: "Web Developer",
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "04/2021",
      category: "gov",
      description: [
        "Mengembangkan sistem informasi penilaian program sekolah peduli dan berbudaya lingkungan (Adiwiyata).",
        "Menyediakan instrumen penilaian mandiri sekolah dengan verifikasi bukti fisik secara online.",
        "Menampilkan visualisasi sebaran sekolah Adiwiyata tingkat provinsi menggunakan Chart.js."
      ],
      techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery", "AdminLTE", "DataTables", "Chart.js"],
      url: "https://siapsekota.dlhjabarprov.net"
    },
    {
      id: "agenda-dlh",
      title: "Sistem Informasi Agenda & Kegiatan",
      role: "Web Developer",
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "04/2021",
      category: "gov",
      description: [
        "Mengembangkan sistem jadwal agenda pimpinan dan rapat koordinasi dinas berbasis web.",
        "Membangun antarmuka modern dengan Tailwind CSS & AdminLTE serta interaktivitas Livewire.",
        "Visualisasi jadwal padat dan keterisian ruang rapat dinas dengan Chart.js."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Tailwind CSS", "jQuery", "AdminLTE", "DataTables", "Chart.js"],
      url: "https://oss-dlh.jabarprov.go.id/agenda"
    },
    {
      id: "dsda",
      title: "Sistem Informasi Pelaporan & Monitoring Observasi Bahaya DSDA",
      role: "Web Developer",
      institution: "Dinas Sumber Daya Air Provinsi Jawa Barat",
      period: "02/2021",
      category: "gov",
      description: [
        "Mengembangkan sistem informasi pelaporan dan monitoring bahaya/kerusakan infrastruktur sumber daya air.",
        "Membangun fitur pelaporan cepat temuan lapangan beserta dokumentasi foto dan lokasi titik bahaya.",
        "Menyajikan statistik tren laporan bahaya dan status mitigasi penanganan bencana air dengan Chart.js."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Bootstrap", "jQuery", "AdminLTE", "DataTables", "Chart.js"],
      url: "https://dsda.com"
    },
    {
      id: "eselralaka",
      title: "Sistem Informasi E-SELRALAKA",
      role: "Web & Android Developer",
      institution: "Subdit Gakkum Polda Jawa Barat",
      period: "06/2020",
      category: "gov",
      description: [
        "Mengembangkan sistem informasi pelaporan penyelesaian perkara kecelakaan lalu lintas berbasis web & Android.",
        "Membangun backend data perkara yang aman dan terintegrasi menggunakan PHP Laravel & MySQL.",
        "Membuat antarmuka responsif cepat menggunakan Tailwind CSS dan Livewire.",
        "Menyajikan visualisasi rekapitulasi angka laka lantas dan progres penyelesaian perkara via Chart.js."
      ],
      techStack: ["PHP", "Laravel", "Livewire", "MySQL", "Tailwind CSS", "jQuery", "Chart.js"],
      url: "https://app.subditgakkumpoldajabar.com"
    },
    {
      id: "pos-apotek",
      title: "Point of Sales (POS) Apotek",
      role: "Web & Android Developer",
      institution: "Apotek Hirosah Tauhid",
      period: "01/2020",
      category: "business",
      description: [
        "Mengembangkan sistem kasir dan inventaris obat terpadu berbasis web dan aplikasi Android.",
        "Membangun backend menggunakan CodeIgniter dan MySQL.",
        "Menampilkan analitik grafik tren penjualan obat dan margin profit menggunakan Highcharts.",
        "Mengembangkan aplikasi Android kasir berbasis hybrid (Ionic Framework)."
      ],
      techStack: ["PHP", "CodeIgniter", "MySQL", "jQuery", "Bootstrap", "Highcharts", "Ionic"],
      url: "https://apotek.hirosahtauhid.sch.id"
    },
    {
      id: "bapokting",
      title: "Sistem Informasi Bapokting (Bahan Pokok & Penting)",
      role: "Web & Android Developer",
      institution: "Dinas Perdagangan dan Perindustrian Kabupaten Bandung",
      period: "12/2019",
      category: "gov",
      description: [
        "Mengembangkan sistem informasi monitoring harga dan ketersediaan bahan pokok dan penting berbasis web & Android.",
        "Membangun backend menggunakan PHP Laravel dan MySQL.",
        "Integrasi notifikasi harga dan lonjakan komoditas pasar menggunakan Firebase Cloud Messaging.",
        "Mengembangkan aplikasi mobile Android petugas survei pasar berbasis hybrid Ionic."
      ],
      techStack: ["PHP", "Laravel", "MySQL", "jQuery", "Bootstrap", "Ionic", "Firebase"],
      url: "https://sibapokting.bandungkab.go.id"
    },
    {
      id: "sppklhs",
      title: "Sistem Informasi SPPKLHS",
      role: "Web Developer",
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "07/2019",
      category: "gov",
      description: [
        "Mengembangkan sistem informasi tata cara penyelenggaraan kajian lingkungan hidup strategis (KLHS).",
        "Membangun backend pelaporan data regulasi menggunakan PHP (Laravel) dan MySQL.",
        "Tampilan web responsif dengan Bootstrap & AdminLTE, visualisasi data kepatuhan KLHS via Chart.js."
      ],
      techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery", "AdminLTE", "DataTables", "Chart.js"],
      url: "https://sppklhs.dlhjabarprov.net"
    },
    {
      id: "pildadu",
      title: "Sistem Kompilasi Data Lingkungan Hidup Terpadu (PILDADU)",
      role: "Web Developer",
      institution: "Dinas Lingkungan Hidup Provinsi Jawa Barat",
      period: "05/2019",
      category: "gov",
      description: [
        "Mengembangkan sistem kompilasi data lingkungan hidup terpadu tingkat provinsi Jawa Barat.",
        "Membangun pengelolaan database multivariat lingkungan menggunakan Laravel dan MySQL.",
        "Menampilkan grafik komparasi indeks kualitas lingkungan hidup (IKLH) dengan Chart.js.",
        "Fitur ekspor laporan berkala dengan format Excel via Maatwebsite."
      ],
      techStack: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery", "AdminLTE", "DataTables", "Chart.js"],
      url: "https://pildadu.dlhjabarprov.net"
    },
    {
      id: "simanis",
      title: "Sistem Informasi Manajemen Siswa (SIMANIS)",
      role: "Web & Android Developer",
      institution: "SMA Hirosah Tauhid",
      period: "01/2019",
      category: "education",
      description: [
        "Mengembangkan sistem informasi akademik, absensi, dan pembayaran SPP siswa berbasis web & Android.",
        "Membangun backend Laravel & MySQL dengan notifikasi kehadiran siswa langsung ke orang tua via Firebase.",
        "Mengembangkan aplikasi mobile Android untuk wali murid berbasis hybrid Ionic Framework.",
        "Mengelola data rekap rapor dan buku induk siswa menggunakan Yajra Datatables & Maatwebsite Excel."
      ],
      techStack: ["PHP", "Laravel", "MySQL", "jQuery", "Bootstrap", "Ionic", "Firebase"],
      url: "https://simanis.hirosahtauhid.sch.id"
    }
  ] as Project[]
};
