'use client'
import { ArrowLeft, Heart, Target, Lightbulb, Smartphone, FileText, Calendar, Pill, AlertTriangle, Brain, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function StudyCaseObatku() {
    const router = useRouter()
    
    const designThinkingStages = [
        { name: 'Empathize', icon: Heart, color: 'bg-gray-300', active: false },
        { name: 'Define', icon: Target, color: 'bg-gray-300', active: false },
        { name: 'Ideate', icon: Lightbulb, color: 'bg-gray-300', active: false },
        { name: 'Prototype', icon: Smartphone, color: 'bg-gray-300', active: false },
        { name: 'Testing', icon: FileText, color: 'bg-blue-500', active: true },
    ];

    const interviewFindings = [
        {
            icon: Calendar,
            text: "Pengelolaan jadwal konsumsi obat masih bergantung pada alarm manual dan bantuan orang lain",
            color: "bg-blue-50 border-blue-200"
        },
        {
            icon: Users,
            text: "Pengingat konsumsi obat bergantung pada suami, bukan diri sendiri atau sistem yang mandiri",
            color: "bg-blue-50 border-blue-200"
        },
        {
            icon: AlertTriangle,
            text: "Tidak memahami risiko interaksi antar obat atau konsekuensi melewatkan dosis",
            color: "bg-blue-50 border-blue-200"
        },
        {
            icon: Brain,
            text: "Memilih obat berdasarkan pengalaman masa lalu dan kebiasaan, bukan saran profesional",
            color: "bg-blue-50 border-blue-200"
        },
        {
            icon: Clock,
            text: "Tidak mengecek kadaluarsa secara rutin, hanya dicek saat ingin digunakan",
            color: "bg-blue-50 border-blue-200"
        }
    ];

    const affinityCategories = [
        {
            title: "Pengelolaan Obat",
            color: "bg-blue-500",
            items: [
                "Sistem pengingat eksternal sangat membantu",
                "Memerlukan alarm khusus sebagai pengingat",
                "Perlu aktivitas yang simpel sehingga membantu konsistensi"
            ]
        },
        {
            title: "Swamedikasi",
            color: "bg-pink-500",
            items: [
                "Rasa takut lebih dominan daripada pertimbangan medis",
                "Tidak ada sumber yang valid",
                "Keputusan didasarkan pada kebiasaan bukan pengetahuan medis"
            ]
        },
        {
            title: "Manajemen Stok Obat",
            color: "bg-purple-500",
            items: [
                "Tidak ada sistem klasifikasi",
                "Tidak ada pengecekan berkala → rawan kehabisan",
                "Potensi konsumsi obat kadaluarsa",
                "Respon positif terhadap potensi solusi digital"
            ]
        },
        {
            title: "Penggunaan Teknologi",
            color: "bg-orange-500",
            items: [
                "Fungsi dasar pengingat bisa menjadi fitur utama aplikasi",
                "Dapat membantu edukasi"
            ]
        },
        {
            title: "Kesadaran Interaksi Obat",
            color: "bg-teal-500",
            items: [
                "Tidak ada sistem pemahaman yang jelas",
                "Tingkat literasi rendah"
            ]
        },
        {
            title: "Kebiasaan Hidup Sehat",
            color: "bg-red-500",
            items: [
                "Tidak ada kebiasaan mencatat",
                "Motivasi rendah menjadi penghalang utama"
            ]
        }
    ];

    const statistics = [
        { percentage: "46%", description: "Tidak berkonsultasi ke dokter saat mengidap penyakit ringan", source: "BPS, 2021" },
        { percentage: "84,23%", description: "Masyarakat melakukan swamedikasi", source: "BPS, 2021" },
        { percentage: "37,42%", description: "Memiliki pengetahuan kurang dalam obat", source: "Yulianti, 2023" }
    ];

    const userJourneyStages = [
        {
            stage: "Menyadari Gejala",
            action: "Menyadari gejala",
            tasks: ["Merasakan gejala sakit", "Memutuskan untuk swamedikasi"],
            painPoints: "Tidak tahu obat apa yang tepat",
            emotions: "Tidak nyaman, ingin segera sembuh",
            opportunities: "Panduan gejala yang jelas untuk membantu keputusan swamedikasi"
        },
        {
            stage: "Mencari Informasi Obat",
            action: "Mencari informasi obat",
            tasks: ["Mencari obat yang sesuai melalui internet, kemasan obat, atau pengalaman sebelumnya", "Membaca aturan pakai dan efek samping"],
            painPoints: "Terlalu banyak info yang tidak jelas",
            emotions: "Percaya, tetapi kurang yakin",
            opportunities: "Rekomendasi obat berdasarkan gejala"
        },
        {
            stage: "Memeriksa Stok Obat",
            action: "Memeriksa stok obat",
            tasks: ["Mengecek tempat penyimpanan obat di rumah"],
            painPoints: "Tidak tahu kapan stok obat habis",
            emotions: "Tenang jika stok ada, frustasi jika habis",
            opportunities: "Sistem pencatatan stok obat untuk memudahkan pengecekan"
        },
        {
            stage: "Mengonsumsi Obat",
            action: "Mengonsumsi obat",
            tasks: ["Mengikuti aturan pakai yang tertera di kemasan", "Mencatat waktu konsumsi obat"],
            painPoints: "Takut salah konsumsi",
            emotions: "Lega, sedikit khawatir akan efek samping",
            opportunities: "Pengingat konsumsi obat agar tidak terlewat"
        },
        {
            stage: "Mengevaluasi Efek Obat",
            action: "Mengevaluasi efek obat",
            tasks: ["Menunggu efek obat bekerja", "Mengevaluasi apakah kondisi membaik atau butuh konsultasi dokter"],
            painPoints: "Tidak yakin harus lanjut konsumsi ke dokter",
            emotions: "Puas jika membaik, cemas jika tidak ada perubahan",
            opportunities: "Notifikasi kapan harus mencari bantuan jika gejala tidak membaik"
        }
    ];

    const problemStatements = [
        {
            number: 1,
            text: "Kesulitan mengatur jadwal konsumsi obat secara konsisten",
            highlight: ["mengatur jadwal", "konsisten"]
        },
        {
            number: 2,
            text: "Tidak tahu informasi penting tentang obat"
        },
        {
            number: 3,
            text: "Risiko kehabisan obat tanpa disadari sering terjadi",
            highlight: ["kehabisan obat"]
        }
    ];

    const goalStatements = [
        {
            text: "Konsumsi obat yang Teratur, Aman, Terinformasi",
            highlight: ["Teratur", "Aman", "Terinformasi"]
        },
        {
            text: "Meningkatkan kualitas swamedikasi dengan membantu pengguna mengonsumsi obat secara tepat, aman, dan tanpa gangguan",
            highlight: ["kualitas swamedikasi", "tanpa gangguan"]
        },
        {
            text: "Memberikan kemudahan dalam mengelola informasi, jadwal, dan stok obat secara otomatis dan terintegrasi",
            highlight: ["kemudahan", "otomatis dan terintegrasi"]
        },
        {
            text: "Mengukur efektivitas melalui analisis kepatuhan konsumsi dan efisiensi manajemen obat pengguna",
            highlight: ["efisiensi manajemen"]
        }
    ];

    const competitors = [
        { name: "Obatku", logo: "💊", color: "bg-blue-500", isMain: true },
        { name: "MyTherapy", logo: "💊", color: "bg-red-500" },
        { name: "Medisafe", logo: "🟢", color: "bg-green-500" },
        { name: "Drugs.com", logo: "🌈", color: "bg-purple-500" },
        { name: "MediStock", logo: "📦", color: "bg-blue-600" },
        { name: "Halodoc", logo: "🩺", color: "bg-red-600" }
    ];

    const features = [
        "Reminder Obat",
        "Manajemen Stok Obat", 
        "Penjadwalan Minum Obat",
        "Kadaluarsa Obat",
        "Efek Samping Obat",
        "Pencarian Penyakit",
        "Pencarian Obat"
    ];

    const competitorFeatures = {
        "Obatku": [true, true, true, true, true, true, true],
        "MyTherapy": [true, false, true, false, false, false, true],
        "Medisafe": [true, false, true, false, true, false, true],
        "Drugs.com": [false, false, false, false, true, true, true],
        "MediStock": [false, true, false, true, false, false, false],
        "Halodoc": [true, false, true, false, true, true, true]
    };

    const featureMapping = [
        {
            feature: "Reminder Obat",
            icon: "⏰",
            description: "Pengingat otomatis untuk mengonsumsi obat sesuai jadwal",
            userBenefit: "Membantu pengguna tidak lupa minum obat, meningkatkan kepatuhan pengobatan",
            businessBenefit: "Meningkatkan retensi pengguna karena aplikasi menjadi bagian dari rutinitas harian"
        },
        {
            feature: "Manajemen Stok Obat",
            icon: "✏️",
            description: "Fitur untuk mencatat dan memantau jumlah obat yang dimiliki pengguna",
            userBenefit: "Memudahkan pengguna mengetahui stok obat yang tersedia dan kapan harus membeli lagi",
            businessBenefit: "Dapat diintegrasikan dengan pembelian ulang obat, meningkatkan potensi transaksi"
        },
        {
            feature: "Penjadwalan Minum Obat",
            icon: "📋",
            description: "Pengaturan jadwal dosis obat berdasarkan waktu dan frekuensi",
            userBenefit: "Memberi kontrol penuh kepada pengguna dalam pengaturan waktu konsumsi obat",
            businessBenefit: "Meningkatkan engagement melalui fitur yang bersifat personalisasi dan penting"
        },
        {
            feature: "Kadaluarsa Obat",
            icon: "🔔",
            description: "Pengingat kadaluarsa obat untuk menghindari konsumsi obat yang sudah tidak layak",
            userBenefit: "Menghindari konsumsi obat kadaluarsa yang berisiko bagi kesehatan",
            businessBenefit: "Mendorong pengguna membeli obat baru, menciptakan peluang monetisasi"
        },
        {
            feature: "Efek Samping Obat",
            icon: "⚠️",
            description: "Informasi mengenai efek samping potensial dari obat tertentu",
            userBenefit: "Membantu pengguna lebih waspada terhadap gejala dan risiko yang mungkin terjadi",
            businessBenefit: "Meningkatkan kepercayaan pengguna terhadap aplikasi sebagai sumber informasi terpercaya"
        },
        {
            feature: "Pencarian Penyakit",
            icon: "🤒",
            description: "Pencarian gejala dan kemungkinan penyakit yang terkait secara mandiri",
            userBenefit: "Mempermudah pengguna memahami kondisi kesehatan secara cepat",
            businessBenefit: "Menarik trafik tinggi dan memperluas cakupan pengguna dengan fitur swamedikasi"
        },
        {
            feature: "Pencarian Obat",
            icon: "🔍",
            description: "Fitur untuk mencari nama, kegunaan, dosis, dan harga obat",
            userBenefit: "Mempermudah pengguna dalam menemukan obat yang sesuai dengan kebutuhan",
            businessBenefit: "Bisa dikaitkan dengan layanan afiliasi atau e-commerce untuk penjualan obat"
        }
    ];

    const howMightWeQuestions = [
        {
            question: "Menciptakan sistem manajemen obat yang sepenuhnya otomatis, sehingga pengguna tidak perlu mengingat atau mencatat secara manual?",
            highlight: ["otomatis"],
            action: "Change the status quo"
        },
        {
            question: "Mengubah pengalaman yang \"merepotkan\" dalam mengelola obat menjadi sesuatu yang \"mudah dan menyenangkan\" melalui desain UI/UX yang lebih interaktif?",
            highlight: ["mudah dan menyenangkan"],
            action: "Remove the bad"
        },
        {
            question: "Menghilangkan risiko pengguna melewatkan jadwal konsumsi obat dengan sistem yang secara otomatis mengingatkan sesuai waktu yang telah ditentukan?",
            highlight: ["mengingatkan"],
            action: "Remove the bad"
        }
    ];

    const uxLaws = [
        {
            name: "Jakob's Law",
            description: "Menggunakan UI yang umum dikenali agar menghindari waktu tambahan pengguna untuk mempelajari kerja tampilan baru.",
            icon: "⚖️",
            examples: [
                {
                    title: "Pengingat Minum Obat",
                    description: "Seperti sistem task/event pada app kalender",
                    features: ["Waktu 8.00 dan 13.00", "Status 'Sudah Diminum'", "Tombol 'Konfirmasi Minum Obat'"]
                },
                {
                    title: "Chatbot",
                    description: "Menyerupai tampilan LLM chatbot pada umumnya",
                    features: ["Header 'Percakapan Baru'", "Pesan sapaan 'Halo, John'", "Menu hamburger"]
                }
            ]
        },
        {
            name: "Progressive Disclosure",
            description: "Mengutamakan penyajian informasi atau fitur advanced secara bertahap untuk membantu pengguna fokus pada informasi utama terlebih dahulu.",
            icon: "📊",
            examples: [
                {
                    title: "Detail Obat (Paracetamol)",
                    description: "Informasi utama terlihat, detail tersembunyi",
                    features: ["Tanggal kadaluarsa terdekat", "Stok Tersisa: 3 tablet", "Tombol 'Lihat detail >'"]
                },
                {
                    title: "Informasi Penyakit",
                    description: "Tab navigasi untuk informasi bertahap",
                    features: ["Tab: Overview, Gejala, Penyebab, Pengobatan", "Ringkasan informasi", "Detail lengkap tersembunyi"]
                }
            ]
        },
        {
            name: "Law of Proximity",
            description: "Mengelompokkan objek yang serupa secara lebih berdekatan agar pengguna lebih mudah untuk memahami dan mengorganisasi informasi.",
            icon: "📦",
            examples: [
                {
                    title: "Jadwal Hari Ini",
                    description: "Kartu jadwal mengelompokkan informasi terkait",
                    features: ["Waktu 13:00 WIB - Paracetamol", "Waktu 15:00 WIB - Antasida", "Setiap kartu berisi info lengkap"]
                },
                {
                    title: "Pencarian Obat",
                    description: "Hasil pencarian dikelompokkan dalam kartu",
                    features: ["Paracetamol (500 mg) - Demam, nyeri ringan", "Obat Batuk Sirup (120 ml)", "Informasi terkait dalam satu kartu"]
                }
            ]
        },
        {
            name: "Fitt's Law",
            description: "Memperbesar tombol/target dan meletakkannya dekat task pengguna untuk mengurangi risiko error.",
            icon: "🎯",
            examples: [
                {
                    title: "Penyesuaian Kuantitas Obat",
                    description: "Tombol besar dan mudah dijangkau",
                    features: ["Tombol '+' dan '-' berukuran besar", "Tombol 'Simpan Perubahan' di area mudah dijangkau", "Touch-zone optimization"]
                },
                {
                    title: "Touch-zone pada Mobile",
                    description: "Area jangkauan jari dioptimalkan",
                    features: ["Hijau: Comfortable (mudah dijangkau)", "Kuning: Stretch (perlu peregangan)", "Merah: Hard (sulit dijangkau)"]
                }
            ]
        }
    ];

    const testingResults = [
        {
            iteration: 1,
            sus: 78.75,
            seq: 5.8,
            nps: 100,
            susDescription: "Hasil SUS menunjukkan bahwa aplikasi layak digunakan, namun perlu dikembangkan",
            seqDescription: "Hasil SEQ menunjukkan bahwa aplikasi cukup mudah digunakan, namun bisa dikembangkan",
            feedback: [
                "Pop-up sukses membingungkan karena menampilkan 'Berhasil Minum Obat' padahal baru buat jadwal",
                "Tombol pop-up kembali tidak dapat diklik",
                "Pengguna sedikit bingung karena tombol serupa dengan halaman jadwal",
                "Penambahan opsi untuk custom obat saat menambahkan obat ke folder"
            ],
            generalFeedback: "Aplikasi dinilai bermanfaat dan potensial, namun perlu perbaikan dari sisi konsistensi UI, alur interaksi, dan kejelasan informasi agar lebih intuitif dan efisien digunakan sehari-hari."
        },
        {
            iteration: 2,
            sus: 90,
            seq: 6,
            nps: 100,
            susDescription: "Hasil SUS menunjukkan bahwa aplikasi sudah user-friendly dan layak gunakan",
            seqDescription: "Hasil SEQ menunjukkan bahwa aplikasi mudah digunakan dan intuitif",
            feedback: [
                "Terdapat duplikasi informasi pada bagian penyebab dan gejala, membingungkan pengguna",
                "Pengguna tidak yakin apakah informasi dosis '500mg' berarti untuk konsumsi pribadi atau sekadar referensi",
                "Label tombol 'Tambah Obat' dianggap tidak sesuai konteks; disarankan diubah menjadi 'Tambah Jadwal'",
                "Layar sukses bertuliskan 'Berhasil Minum Obat' padahal konteksnya adalah penambahan jadwal membingungkan",
                "Tombol 'Tambah Obat' terlalu mirip dengan yang ada di halaman Jadwal, membuat pengguna bingung konteksnya",
                "Aksi 'Tambah Obat Baru di Folder' justru mengarahkan ke halaman awal Stok Obat, bukan tetap di folder yang dipilih"
            ],
            generalFeedback: "Secara keseluruhan, pengguna menyarankan penyempurnaan wording dan navigasi untuk meningkatkan kejelasan alur, konsistensi antar halaman, dan kecocokan konteks tombol, agar aplikasi terasa lebih intuitif dan user-friendly."
        },
        {
            iteration: 3,
            sus: 92.5,
            seq: 6.1,
            nps: 100,
            susDescription: "Hasil SUS menunjukkan bahwa aplikasi sudah user-friendly dan layak gunakan",
            seqDescription: "Hasil SEQ menunjukkan bahwa aplikasi mudah digunakan dan intuitif",
            feedback: [
                "Untuk obat yang perlu diminum lebih dari sekali sehari, pengguna mengharapkan penambahan keterangan jumlah frekuensi minum",
                "Label waktu sebaiknya lebih spesifik agar tidak membingungkan",
                "Pengguna berharap ada notifikasi otomatis saat stok obat hampir habis, terutama untuk obat yang dikonsumsi rutin",
                "Obat yang dikonsumsi secara berkala sebaiknya memiliki penanda khusus, misalnya label atau warna berbeda untuk membedakan tingkat prioritas"
            ],
            generalFeedback: "Obatku memiliki potensi kuat dalam membantu manajemen obat harian, namun perlu penyempurnaan dari sisi desain visual, wording, alur interaksi, dan personalisasi fitur agar lebih intuitif, menarik, dan relevan bagi pengguna aktif."
        }
    ];

    const iterations = [
        {
            iteration: 1,
            page: "Halaman Stok Obat",
            problem: "Opsi obat tidak customizable, hanya bisa menambahkan yang tersedia di Database",
            solution: "Penambahan opsi untuk menambahkan obat dari pengguna",
            change: "Tombol 'Buat Obat Baru' ditambahkan di samping search bar"
        },
        {
            iteration: 2,
            page: "Halaman Jadwal",
            problem: "Tombol 'Tambah Obat' masih ambigu",
            solution: "Mengubah menjadi 'Tambah Jadwal' sehingga lebih jelas",
            change: "Label tombol diubah dari 'Tambah Obat +' menjadi '+ Tambah Jadwal'"
        },
        {
            iteration: 2,
            page: "Halaman Pencarian",
            problem: "Kurang jelas terhadap informasi varian obat",
            solution: "Penambahan Penjelasan Varian Obat",
            change: "Header 'Varian Paracetamol' ditambahkan di atas daftar varian obat"
        },
        {
            iteration: 3,
            page: "Halaman Jadwal",
            problem: "Tidak ada keterangan apabila obat bisa diminum lebih dari satu kali per hari",
            solution: "Penambahan Tooltip",
            change: "Tooltip 'Kamu dapat memilih lebih dari satu waktu minum obat' ditambahkan"
        },
        {
            iteration: 3,
            page: "Halaman Jadwal",
            problem: "Tidak ada opsi untuk memasukkan obat rutin",
            solution: "Penambahan opsi menambahkan obat rutin",
            change: "Checkbox 'Buat Sebagai Obat Rutin' ditambahkan"
        },
        {
            iteration: 3,
            page: "Halaman Jadwal",
            problem: "Tidak ada keterangan mengenai durasi konsumsi obat",
            solution: "Penambahan durasi konsumsi obat",
            change: "Informasi 'Tanggal mulai' dan 'Tanggal selesai' ditambahkan"
        },
        {
            iteration: 3,
            page: "Halaman Stok Obat",
            problem: "Ikon monoton, tidak ada penanda yang membedakan jenis obat",
            solution: "Penggantian warna ikon untuk tiap jenis obat",
            change: "Ikon obat diberi warna berbeda sesuai jenis (hijau untuk vitamin, oranye untuk obat batuk)"
        },
        {
            iteration: 3,
            page: "Halaman Stok Obat",
            problem: "Tidak ada notifikasi jika obat sudah menipis/habis",
            solution: "Penambahan notifikasi jika obat habis dan menipis",
            change: "Label 'Stok Menipis' dengan warna oranye ditambahkan untuk obat yang hampir habis"
        }
    ];
    
    return (
        <div className="w-full min-h-screen bg-white">
            {/* Back Button */}
             <motion.button
                onClick={() => router.push('/')}
                className="fixed top-8 left-8 flex items-center gap-x-3 transition-all font-medium px-6 py-3 cursor-pointer bg-white border border-gray-200 text-gray-700 text-sm z-10 hover:bg-gray-50"
                whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
            >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
            </motion.button>

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center px-4">
                <div className="text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-8">
                            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Pill className="w-10 h-10 text-gray-600" />
                            </div>
                            <h1 className="text-7xl font-caveat text-gray-900 mb-4">Obatku</h1>
                            <p className="text-xl text-gray-600 mb-2">A UX Case Study</p>
                            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                                How we helped students manage their medication better through thoughtful design
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Design Process */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl font-caveat text-gray-900 mb-6">Our Design Journey</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Following the Design Thinking methodology to create a solution that truly serves our users
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-2">
                        {designThinkingStages.map((stage, index) => (
                            <motion.div
                                key={stage.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex items-center gap-2 px-4 py-2 text-sm ${
                                    stage.active ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600'
                                }`}
                            >
                                <stage.icon className="w-4 h-4" />
                                <span>{stage.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Empathize Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl font-caveat text-gray-900 mb-6">Understanding the Problem</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We started by understanding who our users are and what challenges they face. 
                            Through interviews with 5 participants, we discovered the real struggles students 
                            face when managing their medication.
                        </p>
                    </motion.div>

                    {/* User Persona */}
                    <div className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-lg"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                    <span className="text-2xl font-bold text-gray-600">B</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900">Meet Bimo</h3>
                                    <p className="text-gray-600">Student, 20 years old</p>
                                </div>
                            </div>
                            
                            <blockquote className="text-lg text-gray-700 italic mb-6 border-l-4 border-gray-300 pl-6">
                                "Aku sering lupa minum obat karena jadwalnya beda-beda dan sibuk di kampus. 
                                Biasanya minum obat tanpa resep untuk sakit ringan, tapi kurang paham risiko campur obat."
                            </blockquote>
                            
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Challenges</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Sering lupa minum obat karena kesibukan</li>
                                        <li>• Tidak ada sistem pengingat yang efektif</li>
                                        <li>• Kurang memahami risiko interaksi obat</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-3">Goals</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li>• Konsisten minum obat meski jadwal padat</li>
                                        <li>• Mendapat pengingat otomatis</li>
                                        <li>• Tetap sehat di tengah kesibukan</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Key Insights */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Key Insights from Research</h3>
                        <div className="space-y-4">
                            {interviewFindings.map((finding, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4 p-4 border-l-2 border-gray-200"
                                >
                                    <finding.icon className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                    <p className="text-gray-700">{finding.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Statistics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">The Bigger Picture</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Our research revealed that this isn't just Bimo's problem. The data shows a broader issue in Indonesia:
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {statistics.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-center p-6 border border-gray-200 rounded-lg"
                                >
                                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.percentage}</div>
                                    <p className="text-gray-600 mb-2">{stat.description}</p>
                                    <p className="text-sm text-gray-400">({stat.source})</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Define Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl font-caveat text-gray-900 mb-6">Defining the Challenge</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            With our research insights, we mapped out the user journey and identified the core problems 
                            that needed solving. This helped us focus on what truly matters to our users.
                        </p>
                    </motion.div>

                    {/* User Journey */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">The User Journey</h3>
                        <div className="space-y-6">
                            {userJourneyStages.map((stage, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <h4 className="text-xl font-semibold text-gray-900">{stage.stage}</h4>
                                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                            Step {index + 1}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 mb-4">{stage.action}</p>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <h5 className="font-semibold text-gray-900 mb-2">Tasks</h5>
                                            <ul className="space-y-1 text-gray-600">
                                                {stage.tasks.map((task, taskIndex) => (
                                                    <li key={taskIndex}>• {task}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-red-600 mb-2">Pain Points</h5>
                                            <p className="text-gray-600">{stage.painPoints}</p>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold text-green-600 mb-2">Opportunities</h5>
                                            <p className="text-gray-600">{stage.opportunities}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Problem Statements */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Core Problems</h3>
                        <div className="space-y-6">
                            {problemStatements.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            {problem.number}
                                        </div>
                                        <p className="text-gray-700 text-lg leading-relaxed">
                                            {problem.highlight ? (
                                                problem.text.split(' ').map((word, wordIndex) => {
                                                    const cleanWord = word.replace(/[.,!?]/g, '');
                                                    const isHighlighted = problem.highlight.some(h => 
                                                        cleanWord.toLowerCase().includes(h.toLowerCase())
                                                    );
                                                    return (
                                                        <span key={wordIndex} className={isHighlighted ? 'font-semibold text-gray-900' : ''}>
                                                            {word}{' '}
                                                        </span>
                                                    );
                                                })
                                            ) : (
                                                problem.text
                                            )}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Goal Statements */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Our Goals</h3>
                        <div className="space-y-6">
                            {goalStatements.map((goal, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {goal.highlight ? (
                                            goal.text.split(' ').map((word, wordIndex) => {
                                                const cleanWord = word.replace(/[.,!?]/g, '');
                                                const isHighlighted = goal.highlight.some(h => 
                                                    cleanWord.toLowerCase().includes(h.toLowerCase())
                                                );
                                                return (
                                                    <span key={wordIndex} className={isHighlighted ? 'font-semibold text-gray-900' : ''}>
                                                        {word}{' '}
                                                    </span>
                                                );
                                            })
                                        ) : (
                                            goal.text
                                        )}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Ideate Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl font-caveat text-gray-900 mb-6">Exploring Solutions</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            With clear problems defined, we explored various solutions through competitor analysis, 
                            feature mapping, and creative ideation sessions to find the best approach.
                        </p>
                    </motion.div>

                    {/* Competitor Analysis */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Competitive Landscape</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            We analyzed existing solutions to understand what works and identify opportunities for improvement.
                        </p>
                        
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 font-semibold text-gray-900">Features</th>
                                            {competitors.map((competitor, index) => (
                                                <th key={index} className="text-center py-3 font-semibold text-gray-900">
                                                    <div className="flex flex-col items-center gap-1">
                                                        {competitor.isMain && <span className="text-xs">👑</span>}
                                                        <span className="text-lg">{competitor.logo}</span>
                                                        <span className="text-xs">{competitor.name}</span>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {features.map((feature, featureIndex) => (
                                            <tr key={featureIndex} className="border-b border-gray-100">
                                                <td className="py-3 font-medium text-gray-900">{feature}</td>
                                                {competitors.map((competitor, competitorIndex) => {
                                                    const hasFeature = competitorFeatures[competitor.name][featureIndex];
                                                    return (
                                                        <td key={competitorIndex} className="py-3 text-center">
                                                            {hasFeature ? (
                                                                <span className="text-green-600">✓</span>
                                                            ) : (
                                                                <span className="text-gray-300">✗</span>
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div className="mt-6 text-center">
                            <p className="text-gray-600">
                                <span className="font-semibold text-gray-900">Obatku</span> is the only app with all features compared
                            </p>
                        </div>
                    </motion.div>

                    {/* Key Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Key Features</h3>
                        <div className="space-y-6">
                            {featureMapping.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-2xl">{feature.icon}</span>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.feature}</h4>
                                            <p className="text-gray-600 mb-4">{feature.description}</p>
                                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <h5 className="font-semibold text-gray-900 mb-1">User Benefit</h5>
                                                    <p className="text-gray-600">{feature.userBenefit}</p>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-gray-900 mb-1">Business Benefit</h5>
                                                    <p className="text-gray-600">{feature.businessBenefit}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* How Might We Questions */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">How Might We?</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            These questions guided our ideation process and helped us think creatively about solutions.
                        </p>
                        
                        <div className="space-y-6">
                            {howMightWeQuestions.map((hmw, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                        {hmw.highlight ? (
                                            hmw.question.split(' ').map((word, wordIndex) => {
                                                const cleanWord = word.replace(/[.,!?]/g, '');
                                                const isHighlighted = hmw.highlight.some(h => 
                                                    cleanWord.toLowerCase().includes(h.toLowerCase())
                                                );
                                                return (
                                                    <span key={wordIndex} className={isHighlighted ? 'font-semibold text-gray-900' : ''}>
                                                        {word}{' '}
                                                    </span>
                                                );
                                            })
                                        ) : (
                                            hmw.question
                                        )}
                                    </p>
                                    <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                                        {hmw.action}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Prototype Section */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl font-caveat text-gray-900 mb-6">Building the Solution</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            With our research insights and feature planning complete, we designed a prototype that 
                            follows proven UX principles and addresses our users' core needs.
                        </p>
                    </motion.div>

                    {/* Interactive Prototype */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Smartphone className="w-8 h-8 text-gray-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Interactive Prototype</h3>
                            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                Experience the complete user journey through our interactive prototype
                            </p>
                            <motion.a
                                href="https://www.figma.com/proto/w5u4Z5mWb0twh3YytkLq5t/ObatKu---UX-Design?page-id=103%3A15366&node-id=287-7767&p=f&viewport=-295%2C59%2C0.07&t=5JFENNVytrZz5y7z-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=287%3A7697&show-proto-sidebar=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors duration-200"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M15.852 8.981h-4.588v-1.25c0-.412.335-.75.75-.75h3.088c.415 0 .75.338.75.75v1.25zm0 0v1.25c0 .412-.335.75-.75.75h-3.838c-.415 0-.75-.338-.75-.75V8.981zm-4.588-1.25v1.25c0 .412-.335.75-.75.75H6.676c-.415 0-.75-.338-.75-.75V7.731c0-.412.335-.75.75-.75h3.838c.415 0 .75.338.75.75zm0 0V6.481c0-.412-.335-.75-.75-.75H6.676c-.415 0-.75.338-.75.75v1.25c0 .412.335.75.75.75h3.838c.415 0 .75-.338.75-.75zm8.5-1.5c0-.828-.672-1.5-1.5-1.5H5.176c-.828 0-1.5.672-1.5 1.5v11.5c0 .828.672 1.5 1.5 1.5h13.088c.828 0 1.5-.672 1.5-1.5V6.231zm-1.5 10H5.176c-.276 0-.5-.224-.5-.5V6.731c0-.276.224-.5.5-.5h13.088c.276 0 .5.224.5.5v9.5c0 .276-.224.5-.5.5z"/>
                                </svg>
                                View Prototype
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Design Principles */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Design Principles</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Our design follows established UX laws to ensure intuitive and effective user experiences.
                        </p>
                        
                        <div className="space-y-8">
                            {uxLaws.map((law, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl">{law.icon}</span>
                                        <h4 className="text-xl font-semibold text-gray-900">{law.name}</h4>
                                    </div>
                                    
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {law.description}
                                    </p>
                                    
                                    <div className="space-y-4">
                                        {law.examples.map((example, exampleIndex) => (
                                            <div key={exampleIndex} className="bg-gray-50 p-4 rounded-lg">
                                                <h5 className="font-semibold text-gray-900 mb-2">{example.title}</h5>
                                                <p className="text-sm text-gray-600 mb-3">{example.description}</p>
                                                <ul className="space-y-1">
                                                    {example.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="text-sm text-gray-700 flex items-start gap-2">
                                                            <span className="text-gray-400 mt-1">•</span>
                                                            {feature}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Core Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Core Features</h3>
                        <p className="text-lg text-gray-600 mb-12">
                            Three key features that address our users' main pain points
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg border border-gray-200"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Calendar className="w-8 h-8 text-gray-600" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Medication Reminders</h4>
                                <p className="text-gray-600">
                                    Automated reminders with confirmation tracking to ensure consistent medication intake
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg border border-gray-200"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Pill className="w-8 h-8 text-gray-600" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">Stock Management</h4>
                                <p className="text-gray-600">
                                    Track medication inventory and get notifications when supplies are running low
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg border border-gray-200"
                            >
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Brain className="w-8 h-8 text-gray-600" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">AI Health Assistant</h4>
                                <p className="text-gray-600">
                                    Get reliable health information and medication guidance through our AI chatbot
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testing Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl font-caveat text-gray-900 mb-6">Testing & Iteration</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We tested our solution with real users through three iterations, measuring usability 
                            and gathering feedback to continuously improve the experience.
                        </p>
                    </motion.div>

                    {/* Testing Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="bg-gray-50 p-8 rounded-lg text-center">
                            <h3 className="text-3xl font-semibold text-gray-900 mb-4">Usability Testing</h3>
                            <div className="inline-block bg-white p-6 rounded-lg border border-gray-200">
                                <span className="text-5xl font-bold text-gray-900">3</span>
                                <p className="text-lg text-gray-600 mt-2">Iterations</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Testing Results */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Testing Results</h3>
                        
                        <div className="space-y-12">
                            {testingResults.map((result, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-lg border border-gray-200"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h4 className="text-2xl font-semibold text-gray-900">Iteration {result.iteration}</h4>
                                        <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                                            <span className="text-lg font-semibold">NPS {result.nps}%</span>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        {/* SUS Score */}
                                        <div className="text-center">
                                            <div className="relative w-24 h-24 mx-auto mb-4">
                                                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        stroke="#e5e7eb"
                                                        strokeWidth="6"
                                                        fill="none"
                                                    />
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        stroke="#374151"
                                                        strokeWidth="6"
                                                        fill="none"
                                                        strokeDasharray={`${(result.sus / 100) * 251.2} 251.2`}
                                                        className="transition-all duration-1000"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-xl font-bold text-gray-900">{result.sus}</span>
                                                </div>
                                            </div>
                                            <h5 className="text-lg font-semibold text-gray-900 mb-2">SUS Score</h5>
                                            <p className="text-sm text-gray-600">{result.susDescription}</p>
                                        </div>

                                        {/* SEQ Score */}
                                        <div className="text-center">
                                            <div className="relative w-24 h-24 mx-auto mb-4">
                                                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        stroke="#e5e7eb"
                                                        strokeWidth="6"
                                                        fill="none"
                                                    />
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        stroke="#374151"
                                                        strokeWidth="6"
                                                        fill="none"
                                                        strokeDasharray={`${(result.seq / 7) * 251.2} 251.2`}
                                                        className="transition-all duration-1000"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-xl font-bold text-gray-900">{result.seq}</span>
                                                </div>
                                            </div>
                                            <h5 className="text-lg font-semibold text-gray-900 mb-2">SEQ Score</h5>
                                            <p className="text-sm text-gray-600">{result.seqDescription}</p>
                                        </div>
                                    </div>

                                    {/* Feedback */}
                                    <div className="mb-6">
                                        <h5 className="text-lg font-semibold text-gray-900 mb-4">Key Feedback:</h5>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {result.feedback.map((item, feedbackIndex) => (
                                                <div key={feedbackIndex} className="bg-gray-50 p-4 rounded-lg">
                                                    <p className="text-sm text-gray-700">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* General Feedback */}
                                    <div className="bg-gray-50 border-l-4 border-gray-300 p-4 rounded-r-lg">
                                        <p className="text-gray-700 font-medium">{result.generalFeedback}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Key Iterations */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Key Improvements</h3>
                        <p className="text-lg text-gray-600 mb-8">
                            Based on user feedback, we made several important improvements across different iterations.
                        </p>
                        
                        <div className="space-y-6">
                            {iterations.map((iteration, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-gray-200"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            {iteration.iteration}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h4 className="text-lg font-semibold text-gray-900">{iteration.page}</h4>
                                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                                                    Iteration {iteration.iteration}
                                                </span>
                                            </div>
                                            
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div className="bg-red-50 border-l-4 border-red-300 p-3 rounded-r">
                                                    <h5 className="font-semibold text-red-800 mb-1">Problem</h5>
                                                    <p className="text-sm text-red-700">{iteration.problem}</p>
                                                </div>
                                                
                                                <div className="bg-green-50 border-l-4 border-green-300 p-3 rounded-r">
                                                    <h5 className="font-semibold text-green-800 mb-1">Solution</h5>
                                                    <p className="text-sm text-green-700">{iteration.solution}</p>
                                                </div>
                                                
                                                <div className="bg-gray-50 border-l-4 border-gray-300 p-3 rounded-r">
                                                    <h5 className="font-semibold text-gray-800 mb-1">Change</h5>
                                                    <p className="text-sm text-gray-700">{iteration.change}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Final Results */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-semibold text-gray-900 mb-8">Final Results</h3>
                        
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-gray-900 mb-2">92.5</div>
                                    <p className="text-lg text-gray-600">SUS Score</p>
                                    <p className="text-sm text-gray-500">Excellent</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-gray-900 mb-2">6.1</div>
                                    <p className="text-lg text-gray-600">SEQ Score</p>
                                    <p className="text-sm text-gray-500">Very Easy</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                                    <p className="text-lg text-gray-600">NPS Score</p>
                                    <p className="text-sm text-gray-500">Promoters</p>
                                </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <p className="text-lg text-gray-700">
                                    Obatku achieved excellent usability with a SUS score of 92.5, 
                                    demonstrating that the app is highly user-friendly and effective.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
