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
                className="fixed top-8 left-8 flex items-center gap-x-[12px] transition-all rounded-full font-medium px-[24px] py-[12px] cursor-pointer bg-gray-100 text-[#1c1c1c] text-[20px] z-10"
                whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
            >
                <ArrowLeft size={20} className='text-gray-500' />
                <span className='text-[16px] font-medium text-gray-600'>Back to Home</span>
            </motion.button>

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                </div>
                
                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                                <Pill className="w-8 h-8 text-blue-500" />
                            </div>
                            <h1 className="text-6xl font-bold">Obatku</h1>
                        </div>
                        <p className="text-2xl mb-4">UX Case Study</p>
                        <p className="text-lg opacity-90">Membantu mahasiswa mengelola konsumsi obat dengan lebih baik</p>
                    </motion.div>
                </div>
            </section>

            {/* Design Thinking Process */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Design Process Method</h2>
                        <p className="text-xl text-gray-600">DESIGN THINKING</p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {designThinkingStages.map((stage, index) => (
                            <motion.div
                                key={stage.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`flex items-center gap-3 px-6 py-4 rounded-full ${
                                    stage.active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                                }`}
                            >
                                <stage.icon className="w-6 h-6" />
                                <span className="font-semibold">{stage.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Empathize Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Empathize</h2>
                        <p className="text-xl text-gray-600">Memahami kebutuhan dan tantangan pengguna</p>
                    </motion.div>

                    {/* User Persona */}
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6">
                                <div className="w-48 h-48 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full flex items-center justify-center">
                                    <span className="text-6xl font-bold text-white">B</span>
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-blue-500 mb-2">BIMO</h3>
                            <p className="text-lg text-gray-600">Mahasiswa, 20 Tahun</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-4">Tantangan Bimo</h4>
                                <div className="space-y-4">
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                        <p className="text-gray-700">Sering lupa minum obat, akhirnya kambuh lagi</p>
                                    </div>
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                        <p className="text-gray-700">Sudah bawa obat, tapi kelupaan minum karena sibuk</p>
                                    </div>
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                        <p className="text-gray-700">Aktivitas kampus padat sampai malam, fokus ke tugas dulu</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-dashed border-blue-300">
                                <p className="text-lg text-gray-700">Bimo juga ingin tetap sehat di tengah kesibukannya.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Interview Findings */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Interview Findings</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {interviewFindings.map((finding, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`p-6 rounded-lg border-2 ${finding.color}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <finding.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">{finding.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Affinity Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Affinity Map</h3>
                        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            Affinity map membantu mengelompokkan temuan dan opini pengguna ke dalam kategori bermakna untuk mengungkap pola, kebutuhan, dan masalah yang relevan.
                        </p>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {affinityCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                                >
                                    <div className={`${category.color} p-4`}>
                                        <h4 className="text-white font-bold text-lg">{category.title}</h4>
                                    </div>
                                    <div className="p-4 space-y-2">
                                        {category.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
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
                        className="text-center"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-12">Bagaimana di Indonesia?</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {statistics.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-blue-500 text-white p-8 rounded-lg relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-90"></div>
                                    <div className="relative z-10">
                                        <div className="text-5xl font-bold mb-4">{stat.percentage}</div>
                                        <p className="text-lg mb-2">{stat.description}</p>
                                        <p className="text-sm opacity-80">({stat.source})</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Define Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Define</h2>
                        <p className="text-xl text-gray-600">Mendefinisikan masalah dan tujuan berdasarkan temuan penelitian</p>
                    </motion.div>

                    {/* User Journey Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">User Journey Map</h3>
                        
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-blue-500 text-white">
                                        <tr>
                                            <th className="px-4 py-4 text-left font-semibold">Stage</th>
                                            <th className="px-4 py-4 text-left font-semibold">Action</th>
                                            <th className="px-4 py-4 text-left font-semibold">Tasks</th>
                                            <th className="px-4 py-4 text-left font-semibold">Pain Points</th>
                                            <th className="px-4 py-4 text-left font-semibold">Emotions</th>
                                            <th className="px-4 py-4 text-left font-semibold">Opportunities</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {userJourneyStages.map((stage, index) => (
                                            <motion.tr
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}
                                            >
                                                <td className="px-4 py-4 font-semibold text-blue-600">{stage.stage}</td>
                                                <td className="px-4 py-4">{stage.action}</td>
                                                <td className="px-4 py-4">
                                                    <ul className="list-disc list-inside space-y-1 text-sm">
                                                        {stage.tasks.map((task, taskIndex) => (
                                                            <li key={taskIndex}>{task}</li>
                                                        ))}
                                                    </ul>
                                                </td>
                                                <td className="px-4 py-4 text-red-600 font-medium">{stage.painPoints}</td>
                                                <td className="px-4 py-4 text-gray-700">{stage.emotions}</td>
                                                <td className="px-4 py-4 text-green-600 font-medium">{stage.opportunities}</td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </motion.div>

                    {/* Enhanced User Persona */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">User Persona</h3>
                        
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6">
                                        <div className="w-36 h-36 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full flex items-center justify-center">
                                            <span className="text-4xl font-bold text-white">B</span>
                                        </div>
                                    </div>
                                    <h4 className="text-2xl font-bold text-blue-500 mb-2">BIMO</h4>
                                    <p className="text-lg text-gray-600 mb-4">Mahasiswa, 20 Tahun</p>
                                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                        <p className="text-gray-700 italic">
                                            "Aku sering lupa minum obat karena jadwalnya beda-beda dan sibuk di kampus. 
                                            Biasanya minum obat tanpa resep untuk sakit ringan, tapi kurang paham risiko campur obat. 
                                            Udah coba taruh obat di tempat yang kelihatan, tapi masih sering lupa."
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <Target className="w-5 h-5 text-red-500" />
                                            Goals
                                        </h5>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Menjaga konsistensi konsumsi obat meskipun jadwalnya padat</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Memantau kondisi kesehatan pribadi tanpa harus ke dokter</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Mendapatkan peringatan otomatis agar tidak lupa minum obat</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div>
                                        <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <AlertTriangle className="w-5 h-5 text-orange-500" />
                                            Frustrations
                                        </h5>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Sering lupa minum obat karena prioritas utama adalah tugas kuliah</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Tidak ada sistem yang bisa otomatis mengingatkan sesuai kebutuhan pribadi</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Tidak paham risiko mencampur obat saat swamedikasi</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700">Kurang tahu mana obat yang aman dikonsumsi tanpa konsultasi</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                                <p className="text-gray-700 leading-relaxed">
                                    Bimo adalah mahasiswa aktif tingkat 3 yang sering terlibat dalam kegiatan organisasi dan kuliah hingga malam hari. 
                                    Ia menderita penyakit kronis asam lambung dan harus rutin minum obat. Meskipun sudah mencoba membawa obat ke kampus 
                                    dan mencatat jadwal minum di notes pribadinya, Bimo tetap sering lupa karena kesibukan akademik yang menyita perhatian. 
                                    Ia merasa butuh bantuan sistem yang bisa membantunya lebih disiplin dalam minum obat dan menjaga kesehatannya.
                                </p>
                            </div>
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
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Problem Statements</h3>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {problemStatements.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg shadow-lg relative"
                                >
                                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                                        {problem.number}
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        {problem.highlight ? (
                                            problem.text.split(' ').map((word, wordIndex) => {
                                                const cleanWord = word.replace(/[.,!?]/g, '');
                                                const isHighlighted = problem.highlight.some(h => 
                                                    cleanWord.toLowerCase().includes(h.toLowerCase())
                                                );
                                                return (
                                                    <span key={wordIndex} className={isHighlighted ? 'font-bold text-gray-900' : ''}>
                                                        {word}{' '}
                                                    </span>
                                                );
                                            })
                                        ) : (
                                            problem.text
                                        )}
                                    </p>
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
                        <h3 className="text-3xl font-bold text-gray-900 mb-12 flex items-center justify-center gap-3">
                            <Target className="w-8 h-8 text-red-500" />
                            Goal Statements
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {goalStatements.map((goal, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-blue-500 text-white p-6 rounded-lg relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-90"></div>
                                    <div className="relative z-10">
                                        <p className="text-lg leading-relaxed">
                                            {goal.highlight ? (
                                                goal.text.split(' ').map((word, wordIndex) => {
                                                    const cleanWord = word.replace(/[.,!?]/g, '');
                                                    const isHighlighted = goal.highlight.some(h => 
                                                        cleanWord.toLowerCase().includes(h.toLowerCase())
                                                    );
                                                    return (
                                                        <span key={wordIndex} className={isHighlighted ? 'font-bold' : ''}>
                                                            {word}{' '}
                                                        </span>
                                                    );
                                                })
                                            ) : (
                                                goal.text
                                            )}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Ideate Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ideate</h2>
                        <p className="text-xl text-gray-600">Menghasilkan ide-ide kreatif untuk solusi yang inovatif</p>
                    </motion.div>

                    {/* Competitor Analysis */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Competitor Analysis</h3>
                        
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-blue-500 text-white">
                                        <tr>
                                            <th className="px-4 py-4 text-left font-semibold">Features</th>
                                            {competitors.map((competitor, index) => (
                                                <th key={index} className="px-4 py-4 text-center font-semibold">
                                                    <div className="flex flex-col items-center gap-2">
                                                        {competitor.isMain && <span className="text-yellow-300">👑</span>}
                                                        <span className="text-lg">{competitor.logo}</span>
                                                        <span className="text-sm">{competitor.name}</span>
                                                    </div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {features.map((feature, featureIndex) => (
                                            <motion.tr
                                                key={featureIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                className={`${featureIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}
                                            >
                                                <td className="px-4 py-4 font-semibold text-gray-900">{feature}</td>
                                                {competitors.map((competitor, competitorIndex) => {
                                                    const hasFeature = competitorFeatures[competitor.name][featureIndex];
                                                    return (
                                                        <td key={competitorIndex} className="px-4 py-4 text-center">
                                                            {hasFeature ? (
                                                                <span className="text-green-500 text-2xl">✓</span>
                                                            ) : (
                                                                <span className="text-red-500 text-2xl">✗</span>
                                                            )}
                                                        </td>
                                                    );
                                                })}
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <div className="mt-8 text-center">
                            <p className="text-lg text-gray-600">
                                <span className="font-bold text-blue-600">Obatku</span> adalah satu-satunya aplikasi yang memiliki semua fitur yang dibandingkan
                            </p>
                        </div>
                    </motion.div>

                    {/* Feature Mapping */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Feature Mapping</h3>
                        
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-blue-500 text-white">
                                        <tr>
                                            <th className="px-4 py-4 text-left font-semibold">Fitur</th>
                                            <th className="px-4 py-4 text-left font-semibold">Manfaat Untuk Pengguna</th>
                                            <th className="px-4 py-4 text-left font-semibold">Manfaat Untuk Bisnis</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {featureMapping.map((feature, index) => (
                                            <motion.tr
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}
                                            >
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-2xl">{feature.icon}</span>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900">{feature.feature}</h4>
                                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-gray-700">{feature.userBenefit}</td>
                                                <td className="px-4 py-4 text-gray-700">{feature.businessBenefit}</td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
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
                        <h3 className="text-3xl font-bold text-gray-900 mb-12 flex items-center justify-center gap-3">
                            <Lightbulb className="w-8 h-8 text-yellow-500" />
                            How Might We?
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {howMightWeQuestions.map((hmw, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg shadow-lg relative"
                                >
                                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                                        🤔
                                    </div>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        {hmw.highlight ? (
                                            hmw.question.split(' ').map((word, wordIndex) => {
                                                const cleanWord = word.replace(/[.,!?]/g, '');
                                                const isHighlighted = hmw.highlight.some(h => 
                                                    cleanWord.toLowerCase().includes(h.toLowerCase())
                                                );
                                                return (
                                                    <span key={wordIndex} className={isHighlighted ? 'font-bold text-gray-900' : ''}>
                                                        {word}{' '}
                                                    </span>
                                                );
                                            })
                                        ) : (
                                            hmw.question
                                        )}
                                    </p>
                                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        {hmw.action}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Prototype Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Prototype</h2>
                        <p className="text-xl text-gray-600">Mengembangkan solusi berdasarkan prinsip-prinsip UX yang terbukti</p>
                    </motion.div>

                    {/* Figma Prototype Link */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                                    <Smartphone className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900">Interactive Prototype</h3>
                            </div>
                            <p className="text-lg text-gray-600 mb-8">
                                Jelajahi prototype interaktif Obatku untuk merasakan pengalaman pengguna yang telah dirancang
                            </p>
                            <motion.a
                                href="https://www.figma.com/proto/w5u4Z5mWb0twh3YytkLq5t/ObatKu---UX-Design?page-id=103%3A15366&node-id=287-7767&p=f&viewport=-295%2C59%2C0.07&t=5JFENNVytrZz5y7z-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=287%3A7697&show-proto-sidebar=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M15.852 8.981h-4.588v-1.25c0-.412.335-.75.75-.75h3.088c.415 0 .75.338.75.75v1.25zm0 0v1.25c0 .412-.335.75-.75.75h-3.838c-.415 0-.75-.338-.75-.75V8.981zm-4.588-1.25v1.25c0 .412-.335.75-.75.75H6.676c-.415 0-.75-.338-.75-.75V7.731c0-.412.335-.75.75-.75h3.838c.415 0 .75.338.75.75zm0 0V6.481c0-.412-.335-.75-.75-.75H6.676c-.415 0-.75.338-.75.75v1.25c0 .412.335.75.75.75h3.838c.415 0 .75-.338.75-.75zm8.5-1.5c0-.828-.672-1.5-1.5-1.5H5.176c-.828 0-1.5.672-1.5 1.5v11.5c0 .828.672 1.5 1.5 1.5h13.088c.828 0 1.5-.672 1.5-1.5V6.231zm-1.5 10H5.176c-.276 0-.5-.224-.5-.5V6.731c0-.276.224-.5.5-.5h13.088c.276 0 .5.224.5.5v9.5c0 .276-.224.5-.5.5z"/>
                                </svg>
                                Buka Prototype di Figma
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* UX Laws Implementation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 flex items-center justify-center gap-3">
                            <span className="text-4xl">⚖️</span>
                            Penerapan UX Laws
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {uxLaws.map((law, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-lg shadow-lg p-6"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-3xl">{law.icon}</span>
                                        <h4 className="text-xl font-bold text-gray-900">{law.name}</h4>
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
                                                            <span className="text-blue-500 mt-1">•</span>
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

                    {/* Key Features Showcase */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-12">Fitur Utama Aplikasi</h3>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Calendar className="w-8 h-8 text-blue-500" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Jadwal Minum Obat</h4>
                                <p className="text-gray-600">
                                    Pengingat otomatis dengan konfirmasi minum obat dan tracking kepatuhan
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Pill className="w-8 h-8 text-green-500" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Manajemen Stok</h4>
                                <p className="text-gray-600">
                                    Pantau stok obat dan dapatkan notifikasi saat mendekati kadaluarsa
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Brain className="w-8 h-8 text-purple-500" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">Chatbot AI</h4>
                                <p className="text-gray-600">
                                    Konsultasi kesehatan dan informasi obat dengan AI yang terpercaya
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testing Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Testing</h2>
                        <p className="text-xl text-gray-600">Menguji solusi dengan pengguna nyata dan mengiterasi berdasarkan feedback</p>
                    </motion.div>

                    {/* Usability Testing Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-12 text-center text-white">
                            <h3 className="text-4xl font-bold mb-4">Usability Testing</h3>
                            <div className="bg-white bg-opacity-20 rounded-lg p-6 inline-block">
                                <span className="text-6xl font-bold">3</span>
                                <p className="text-xl mt-2">Iterasi</p>
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
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Hasil Testing</h3>
                        
                        <div className="space-y-12">
                            {testingResults.map((result, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-lg shadow-lg p-8"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h4 className="text-2xl font-bold text-gray-900">Iterasi {result.iteration}</h4>
                                        <div className="bg-blue-500 text-white px-4 py-2 rounded-full">
                                            <span className="text-lg font-bold">NPS {result.nps}%</span>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                                        {/* SUS Score */}
                                        <div className="text-center">
                                            <div className="relative w-32 h-32 mx-auto mb-4">
                                                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        stroke="#e5e7eb"
                                                        strokeWidth="8"
                                                        fill="none"
                                                    />
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        stroke="#fbbf24"
                                                        strokeWidth="8"
                                                        fill="none"
                                                        strokeDasharray={`${(result.sus / 100) * 251.2} 251.2`}
                                                        className="transition-all duration-1000"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-2xl font-bold text-gray-900">{result.sus}</span>
                                                </div>
                                            </div>
                                            <h5 className="text-lg font-semibold text-gray-900 mb-2">System Usability Scale</h5>
                                            <p className="text-sm text-gray-600">{result.susDescription}</p>
                                        </div>

                                        {/* SEQ Score */}
                                        <div className="text-center">
                                            <div className="relative w-32 h-32 mx-auto mb-4">
                                                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        stroke="#e5e7eb"
                                                        strokeWidth="8"
                                                        fill="none"
                                                    />
                                                    <circle
                                                        cx="50"
                                                        cy="50"
                                                        r="40"
                                                        stroke="#fbbf24"
                                                        strokeWidth="8"
                                                        fill="none"
                                                        strokeDasharray={`${(result.seq / 7) * 251.2} 251.2`}
                                                        className="transition-all duration-1000"
                                                    />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-2xl font-bold text-gray-900">{result.seq}</span>
                                                </div>
                                            </div>
                                            <h5 className="text-lg font-semibold text-gray-900 mb-2">Single Easy Question</h5>
                                            <p className="text-sm text-gray-600">{result.seqDescription}</p>
                                        </div>
                                    </div>

                                    {/* Feedback */}
                                    <div className="mb-6">
                                        <h5 className="text-lg font-semibold text-gray-900 mb-4">Feedback Pengguna:</h5>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {result.feedback.map((item, feedbackIndex) => (
                                                <div key={feedbackIndex} className="bg-gray-50 p-4 rounded-lg">
                                                    <p className="text-sm text-gray-700">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* General Feedback */}
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                        <p className="text-gray-700 font-medium">{result.generalFeedback}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Iterations */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Iterasi Berdasarkan Feedback</h3>
                        
                        <div className="space-y-8">
                            {iterations.map((iteration, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-lg shadow-lg p-6"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                            {iteration.iteration}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h4 className="text-lg font-semibold text-gray-900">{iteration.page}</h4>
                                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                                                    Iterasi {iteration.iteration}
                                                </span>
                                            </div>
                                            
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r">
                                                    <h5 className="font-semibold text-red-800 mb-1">Problem</h5>
                                                    <p className="text-sm text-red-700">{iteration.problem}</p>
                                                </div>
                                                
                                                <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
                                                    <h5 className="font-semibold text-green-800 mb-1">Solution</h5>
                                                    <p className="text-sm text-green-700">{iteration.solution}</p>
                                                </div>
                                                
                                                <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r">
                                                    <h5 className="font-semibold text-blue-800 mb-1">Change</h5>
                                                    <p className="text-sm text-blue-700">{iteration.change}</p>
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
                        <h3 className="text-3xl font-bold text-gray-900 mb-12">Hasil Akhir</h3>
                        
                        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-8 text-white">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2">92.5</div>
                                    <p className="text-lg">SUS Score</p>
                                    <p className="text-sm opacity-90">Excellent</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2">6.1</div>
                                    <p className="text-lg">SEQ Score</p>
                                    <p className="text-sm opacity-90">Very Easy</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2">100%</div>
                                    <p className="text-lg">NPS Score</p>
                                    <p className="text-sm opacity-90">Promoters</p>
                                </div>
                            </div>
                            
                            <div className="mt-8 p-6 bg-white bg-opacity-20 rounded-lg">
                                <p className="text-lg">
                                    Obatku berhasil mencapai tingkat usability yang excellent dengan skor SUS 92.5, 
                                    menunjukkan bahwa aplikasi sangat mudah digunakan dan user-friendly.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-lg">FindIT! | 2025</p>
            </div>
            </footer>
        </div>
    )
}
