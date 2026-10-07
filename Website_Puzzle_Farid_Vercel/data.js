const ARTICLES = [
  {
    "citation": "Liao et al. (2024)",
    "method": "RDPC",
    "year": 2024,
    "family": "CNN",
    "focus": "Menjaga diskriminasi kelas ketika meningkatkan ketahanan terhadap pergeseran gaya.",
    "mechanism": "ASR global/lokal yang dipelajari; keragaman fitur (RD) dan konsistensi prediksi (PC).",
    "setting": "1 sumber: G→C/B/M; S→C/B/M; C→B/G/S. 2: GS→C/B/M; 3: GSI→C/B/M. Retina dipisahkan.",
    "model": "DeepLabV3+; ResNet-50 dan backbone ringan; U-Net tambahan. Prapengetahuan backbone tidak ditemukan dalam PDF; gaya ASR dari sumber.",
    "finding": "ResNet-50 G→C/B/M: Avg mIoU 46,1. Ablation ASR 40,2; +RD 42,9; +PC 44,4; lengkap 46,1 (Tabel 2 dan 6).",
    "limit": "Penulis: variasi atmosfer/hujan belum tercakup memadai (4.7, 4.10). Batas bukti: pembagian data, prapengetahuan, pemilihan model dan simpangan baku belum rinci; atribusi gain GSI yang tidak selaras dengan tabel tidak dipakai (4.1, 4.3).",
    "id": "rdpc"
  },
  {
    "citation": "Z. Li & Liao (2025)",
    "method": "GVRL",
    "year": 2025,
    "family": "CNN",
    "focus": "Generalisasi dan diskriminasi melalui hubungan antar-kelas serta struktur dalam kelas objek.",
    "mechanism": "Prototype contrastive learning; DIERL graf antar-kelas; ITARL graf cluster dalam instance classes. Tugas tetap segmentasi semantik.",
    "setting": "1 sumber per model: G→C/B/M; S→C/B/M; C→B/G/S. Augmentasi tidak menambah sumber.",
    "model": "DeepLabV3+; ResNet-50/101 dan backbone ringan; tiny pyramid Vision GNN. Prapengetahuan backbone tidak ditemukan dalam PDF.",
    "finding": "ResNet-50 G→C/B/M: Avg mIoU 44,8 (Tabel 1). ShuffleNetV2 G→C: DIERL→lengkap mIoU 36,2→36,9; instance 21,4→24,4; stuff 56,6→54,2. Stuff lengkap > baseline 49,4 (Tabel 5).",
    "limit": "Penulis: intra-stuff belum ditambang; biaya GNN (4.8). Batas bukti: tuning target, alur kelas saat inferensi tanpa label dan baseline Avg 30,7 tidak konsisten; gain dari baseline itu tidak dipakai (Tabel 4, 6; 4.6).",
    "id": "gvrl"
  },
  {
    "citation": "Liao, Tian, Zhang, et al. (2025)",
    "method": "CDDG",
    "year": 2025,
    "family": "CNN",
    "focus": "Mempertahankan informasi diskriminatif saat mengurangi sensitivitas terhadap domain.",
    "mechanism": "DIIEM; pemisahan frekuensi tinggi/rendah dengan DCT; prototype contrastive HF memakai teks, LF dari sumber.",
    "setting": "5 pelatihan 1 sumber terpisah: G/S/C/B/M→4 lainnya (20 transfer). 2: GS→C/B/M; 3: GSI→C/B/M. UDA dipisahkan.",
    "model": "DeepLabV3+ ResNet-50/ShuffleNet/MobileNet; CLIP text frozen untuk HF. Prapengetahuan backbone tidak ditemukan. DeepLabV2 ResNet-101 hanya setting tambahan DG–UDA.",
    "finding": "ResNet-50 Mean mIoU 44,2 atas 20 transfer. Ablation ShuffleNet C→B/M/G/S: 39,1→41,1; beberapa kelas turun setelah LPCL (Tabel 1, 4–5).",
    "limit": "Penulis: teks belum diterapkan pada LF (6). Batas bukti: tuning memakai skor target; pembagian data, prapengetahuan, biaya belum rinci. HF-invariant/LF-specific adalah interpretasi bersyarat (4.1; 5.8).",
    "id": "cddg"
  },
  {
    "citation": "Zhang et al. (2025)",
    "method": "PPAR",
    "year": 2025,
    "family": "CNN & VFM",
    "focus": "Mengurangi bias prototype/outlier dan menyesuaikan alignment dengan hierarki fitur.",
    "mechanism": "CLIP OTP/VTP; alignment KL shallow–deep; reweighting pixel berdasarkan entropy terhadap prototype.",
    "setting": "ResNet-50: 20 transfer 1 sumber G/S/C/B/M. 2: GS→C/B/M; 3: GSI→C/B/M. VFM G→C/B/M blok terpisah.",
    "model": "CNN ImageNet pretrained + ASPP; CLIP text frozen. ViT/DINOv2/EVA-02 memakai setup Rein+usulan terpisah.",
    "finding": "ResNet-50 Mean mIoU 43,1 atas 20 transfer; DINOv2 G→C/B/M Avg 64,8 pada setup terpisah. Ablation lengkap menurunkan M/S dibanding kombinasi tertentu (Tabel I, V, VI).",
    "limit": "Penulis: kualitas CLIP, prototype tetap, kelas tak terlihat (VI). Batas bukti: early-stop/pemilihan model belum rinci; biaya Tabel VIII hanya PPA; beberapa target tidak membaik (V.B; Tabel VIII, X).",
    "id": "ppar"
  },
  {
    "citation": "Jiao et al. (2025)",
    "method": "SRHA",
    "year": 2025,
    "family": "CNN",
    "focus": "Variasi gaya per region dan alignment lintas tingkat representasi.",
    "mechanism": "SRM regional AdaIN/Dirichlet; style elimination; HAC global/regional/local ke extractor tetap; JS prediction consistency.",
    "setting": "1 sumber: G→C/B/M; C→B/S/G; G→NighttimeDriving. Fundus 3 sumber leave-one-domain-out dipisahkan.",
    "model": "DeepLabV3+ ResNet-50/101 ImageNet pretrained; extractor ImageNet frozen. Backbone ringan, Mask2Former dan HRDA diuji terpisah.",
    "finding": "ResNet-50 G→C/B/M Avg mIoU 45,71 ±0,156 (3 run). Tanpa local HAC 42,39 vs lengkap 45,71; G→B di bawah TLDR (Tabel 2, 8, 12).",
    "limit": "Penulis: perlu anotasi pixel; malam masih relatif buruk (7.1; 9). Batas bukti: pembagian data/remapping/pemilihan model belum rinci; keterbatasan prapengetahuan medis dipisahkan (7.2).",
    "id": "srha"
  },
  {
    "citation": "Shen et al. (2026)",
    "method": "SADST",
    "year": 2026,
    "family": "CNN",
    "focus": "Menyesuaikan intensitas transfer gaya dengan informasi semantik sumber.",
    "mechanism": "Bank gaya offline sumber dan teks; SEB; DSTM interpolasi channel-wise; konsistensi prediksi dua gaya.",
    "setting": "1 sumber: G→C/B/M/S; C→B/M/G/S; G→Fog/Rain_C dan 4 kondisi ACDC. Mean 4/6/8 target tidak digabungkan.",
    "model": "DeepLabV3+ ResNet-50/101, CLIP visual pretraining; CLIP text frozen untuk mining. Batas freeze mengikuti diagram, bukan kontrol baseline.",
    "finding": "ResNet-101 G→4 target Mean mIoU 48,94. Konsistensi menaikkan mean tetapi S 36,82 < 37,75 pada varian sebelumnya. CLIP saja tidak unggul atas ImageNet (Tabel 1, 4, 5).",
    "limit": "Penulis: mining intensif; bank/noise membawa trade-off (3.2; 4.5, 4.6). Batas bukti: tuning λ target-informed; pembagian data/kelas belum rinci; mean bermasalah Tabel 2/8 tidak dipakai untuk gain.",
    "id": "sadst"
  },
  {
    "citation": "Qiao et al. (2025)",
    "method": "SFANet",
    "year": 2025,
    "family": "VFM",
    "focus": "Task gap VFM dan sensitivitas statistik fitur kategori terhadap domain.",
    "mechanism": "Token low-rank IC; pseudo-mask/CSFR dan instance normalization SFAN; regularisasi kovariansi SFAW.",
    "setting": "1: G→C/B/M; S→C/B/M. 2: GS→C/B/M. Pembanding DIGA berasal dari TTA; akses dalam tabel belum jelas.",
    "model": "DINOv2 frozen + IC/SFA terlatih; Mask2Former. Checkpoint/cakupan prapengetahuan belum rinci; parameter tanpa head berbeda dari termasuk head.",
    "finding": "G Avg mIoU 64,6; GS 67,7. SFAW tidak menaikkan mean tercetak atas residual; B 61,1→60,5 (Tabel 2–3, 7).",
    "limit": "Penulis: kelas kecil/tepi; SFAN dapat memfragmentasi tekstur (5; Gambar 8). Batas bukti: jumlah SYNTHIA dan mean ablation berkonflik; tuning/keadaan internal perlu klarifikasi; gain baseline bermasalah tidak dipakai (4.2; Tabel 7).",
    "id": "sfanet"
  },
  {
    "citation": "Liao et al. (2026)",
    "method": "PIESN",
    "year": 2026,
    "family": "VFM",
    "focus": "Memperkuat relasi invariant dan menyaring relasi sensitif domain pada VFM.",
    "mechanism": "Prototype sumber EMA; PIE relasi intra-kelas; PSN masked inter-class relations. Normalisasi relasi, bukan mean/std target.",
    "setting": "1: G/S→C/B/M; C→B/M. 2: GS→C/B/M. Statistik relasi training disebut disimpan untuk inferensi.",
    "model": "DINOv2 frozen + convolution terlatih + Mask2Former; EVA02/SAM dan Semantic FPN diuji terpisah.",
    "finding": "DINOv2 G Avg mIoU 66,8; PIE 66,1, PSN 65,8, gabungan 66,8. Train 17 vs Rein 13 jam pada eksperimen biaya berpasangan (Tabel 4, 8, 16).",
    "limit": "Penulis: tail classes dan biaya belum real-time (5). Batas bukti: keadaan internal target inferensi, k dan jumlah B/M berkonflik; tuning target-informed (3–4; Tabel 14–15).",
    "id": "piesn"
  },
  {
    "citation": "Lee et al. (2026)",
    "method": "ITSR",
    "year": 2026,
    "family": "CNN",
    "focus": "Variasi gaya lebih berlandaskan visual serta konsistensi lintas/di dalam gaya.",
    "mechanism": "I-PIN image+text mining; DSFL dua jalur; JS inter-style dan total variation class-wise intra-style.",
    "setting": "1: G→C/B/M/S + 4 ACDC (8 target); C→G/B/M/S mengikuti header cetak. ImageNet data gaya, bukan sumber segmentasi kedua.",
    "model": "DeepLabV3+ ResNet-50/101 berawal CLIP visual; mining CLIP image/text frozen + 1.000 style images ImageNet/class names.",
    "finding": "ResNet-101 G→8 target Avg mIoU 42,78. Kedua loss 42,78 vs supervised 41,05; G→S/ACDC Night di bawah FAMix (Tabel 1, 4).",
    "limit": "Penulis: template/nama kelas tetap dan statistik gaya global membatasi atribut/lokalitas (5). Batas bukti: pembagian data sintetis/header C→ berbeda; pemilihan model/biaya belum lengkap; base-only inferensi klaim struktural (4.1–4.2).",
    "id": "itsr"
  },
  {
    "citation": "He et al. (2026)",
    "method": "CER / CPL",
    "year": 2026,
    "family": "CNN & Transformer",
    "focus": "Representasi/prototype stabil terhadap perturbasi, diinspirasi kelengkapan dan independensi kausal.",
    "mechanism": "Perturbasi statistik fitur; CER joint OT/Sinkhorn; prototype embedding benar sumber; CPL consistency dan bobot prototype adaptif.",
    "setting": "1: G/S→C/B/M; C→4 ACDC; C→B/M/ACDC agregat. Dua cabang bukan dua sumber.",
    "model": "ResNet-50/TLDR atau MiT-B5/SegFormer, DAFormer, HRDA; ImageNet pretrained. Framework dipisahkan; baris C-source belum terpetakan pasti.",
    "finding": "G SegFormer Mean mIoU 51,1; lengkap 51,1±0,1 (analytical 3 run). CI+OT 45,9 < OT saja 46,2 (Tabel 3, 6).",
    "limit": "Penulis: keseimbangan akurasi/efisiensi (6). Batas bukti: gain/OT/visualisasi tidak mengidentifikasi sebab; α/default dan skala biaya belum jelas (3–4; Gambar 11, Tabel 9).",
    "id": "cer"
  },
  {
    "citation": "Y. Li et al. (2025)",
    "method": "SGN / SGN+",
    "year": 2025,
    "family": "CNN",
    "focus": "Ketimpangan kelas sumber dan domain gap sintetis–nyata.",
    "mechanism": "Guidance random convolution multiskala + style perturbation; MSFFG; CRW frekuensi kelas sumber.",
    "setting": "1: G→B/C/M/S; C→B/M/G/S; S→B/C/G/M; G/C→Rain/Fog_C; G→ACDC Night.",
    "model": "ResNet-50 + DeepLabV3+; MobileNetV2 terpisah. Prapengetahuan backbone tidak ditemukan. Guidance fitur input, bukan teacher eksternal.",
    "finding": "G SGN+ mIoU B/C/M/S = 40,55/44,39/46,61/31,41; tanpa Avg tercetak. SGN+ lebih rendah dari SGN pada C/M (Tabel 1).",
    "limit": "Penulis: keragaman data/skenario dan keseimbangan distribusi (5). Batas bukti: guidance/keadaan internal inferensi, overlap C→derived-C dan prapengetahuan belum jelas; gain dan half parameters bermasalah (4–5; Tabel 8).",
    "id": "sgn"
  },
  {
    "citation": "Chen et al. (2026)",
    "method": "CLUED",
    "year": 2026,
    "family": "VFM",
    "focus": "Petunjuk tugas sumber, variasi gaya semantik dan detail spasial dalam adaptasi VFM hemat parameter.",
    "mechanism": "TCI low-rank LRLT + cluster SASP; shared fusion; SAPDer spatial/deformable decoder. SASP hanya training.",
    "setting": "1: G→C/B/M; C→B/M dan ACDC. 2: GS→C/B/M. Cluster/token bukan sumber tambahan atau label GT 19 kelas.",
    "model": "VFM frozen: DINOv2/EVA02/CLIP/MAE-L; SAM-H terpisah. TCI/SAPDer/head dilatih; prapengetahuan VFM berbeda antarbaris.",
    "finding": "DINOv2 G Avg mIoU 65,5±0,13 (5 run, Tabel II/III). Lengkap 65,3 vs tanpa SASP 64,9 (Tabel VIII, blok berbeda); EVA02 B di bawah Rein (Tabel II–III, VIII).",
    "limit": "Penulis: kualitas VFM, perangkat dan trade-off kelas (IV-B2; V-A). Batas bukti: supplementary/pembagian data/pemilihan model belum tersedia; params* bukan seluruh model; 74,8% tidak dipakai (Tabel II, IX).",
    "id": "clued"
  }
];
const REFERENCES = [
  {
    "id": "clued",
    "authors": "Chen, X., Zou, Q., Wang, J., Guo, J., Wu, X., Wang, S., & Wu, Z. (2026).",
    "title": "Injecting task-specific clues: efficient adaptation of vision foundation models for domain-generalized semantic segmentation.",
    "journal": "IEEE Transactions on Circuits and Systems for Video Technology, 36(9), 13011–13022.",
    "doi": "10.1109/TCSVT.2026.3689391"
  },
  {
    "id": "cer",
    "authors": "He, P., Li, L., Jiao, L., Liu, X., Liu, F., Shang, R., Guo, Y., Chen, P., & Yang, S. (2026).",
    "title": "Causality-inspired learning semantic segmentation in unseen domain.",
    "journal": "Pattern Recognition, 174, Article 113006.",
    "doi": "10.1016/j.patcog.2025.113006"
  },
  {
    "id": "srha",
    "authors": "Jiao, G., Wu, H., Zhang, C., Yin, H., Mo, Y., & Huang, B. (2025).",
    "title": "Semantic-rearrangement-based hierarchical alignment for domain generalized segmentation.",
    "journal": "Neural Networks, 189, Article 107567.",
    "doi": "10.1016/j.neunet.2025.107567"
  },
  {
    "id": "itsr",
    "authors": "Lee, J., Yoon, J., Kim, J., & Choi, J. W. (2026).",
    "title": "Image-text driven style randomization for domain generalized semantic segmentation.",
    "journal": "Neurocomputing, 676, Article 132953.",
    "doi": "10.1016/j.neucom.2026.132953"
  },
  {
    "id": "sgn",
    "authors": "Li, Y., Shi, J., Cui, Y., Xu, D., Teng, W., & Jiang, Y. (2025).",
    "title": "SGN: stochastic guidance network for sim-to-real generalization.",
    "journal": "Neurocomputing, 657, Article 131468.",
    "doi": "10.1016/j.neucom.2025.131468"
  },
  {
    "id": "gvrl",
    "authors": "Li, Z., & Liao, M. (2025).",
    "title": "Learning generalized visual relations for domain generalization semantic segmentation.",
    "journal": "Expert Systems with Applications, 267, Article 126217.",
    "doi": "10.1016/j.eswa.2024.126217"
  },
  {
    "id": "csds",
    "authors": "Liao, M., Tian, S., Wei, B., Zhang, Y., Zou, W., & Li, X. (2025).",
    "title": "Class-balanced sampling and discriminative stylization for domain generalization semantic segmentation.",
    "journal": "IEEE Transactions on Intelligent Transportation Systems, 26(2), 2596–2608.",
    "doi": "10.1109/TITS.2024.3496538"
  },
  {
    "id": "cddg",
    "authors": "Liao, M., Tian, S., Zhang, Y., Hua, G., You, R., Zou, W., & Li, X. (2025).",
    "title": "Class-discriminative domain generalization for semantic segmentation.",
    "journal": "Image and Vision Computing, 154, Article 105393.",
    "doi": "10.1016/j.imavis.2024.105393"
  },
  {
    "id": "rdpc",
    "authors": "Liao, M., Tian, S., Zhang, Y., Hua, G., Zou, W., & Li, X. (2024).",
    "title": "Considering representation diversity and prediction consistency for domain generalization semantic segmentation.",
    "journal": "Knowledge-Based Systems, 305, Article 112649.",
    "doi": "10.1016/j.knosys.2024.112649"
  },
  {
    "id": "piesn",
    "authors": "Liao, M., Yin, C., Zhang, Y., Yang, H., Huang, W., Peng, Y., & Wang, Y. (2026).",
    "title": "Prototype-guided domain-invariant enhancement and domain-specific normalization for domain generalization semantic segmentation.",
    "journal": "Engineering Applications of Artificial Intelligence, 167, Article 113979.",
    "doi": "10.1016/j.engappai.2026.113979"
  },
  {
    "id": "scsd",
    "authors": "Niu, H., Xie, L., Lin, J., & Zhang, S. (2025).",
    "title": "Exploring semantic consistency and style diversity for domain generalized semantic segmentation.",
    "journal": "Proceedings of the AAAI Conference on Artificial Intelligence, 39(6), 6245–6253.",
    "doi": "10.1609/aaai.v39i6.32668"
  },
  {
    "id": "sfanet",
    "authors": "Qiao, Y., Guan, Y., Yang, W., & Yang, J. (2025).",
    "title": "SFANet: semantic feature aware for domain generalized semantic segmentation.",
    "journal": "Engineering Applications of Artificial Intelligence, 160, Article 111827.",
    "doi": "10.1016/j.engappai.2025.111827"
  },
  {
    "id": "sadst",
    "authors": "Shen, J., Shi, J., Gu, J., Qian, Q., Shu, X., Pang, L., & Zhang, Z. (2026).",
    "title": "SADST: style-aware dynamic style transfer for domain generalized semantic segmentation.",
    "journal": "Neural Networks, 196, Article 108336.",
    "doi": "10.1016/j.neunet.2025.108336"
  },
  {
    "id": "ppar",
    "authors": "Zhang, Y., Zhang, Z., Liao, M., Tian, S., Zou, W., Zhang, L., & Xu, C. (2025).",
    "title": "Prototypical progressive alignment and reweighting for generalizable semantic segmentation.",
    "journal": "IEEE Transactions on Intelligent Transportation Systems, 26(9), 13065–13081.",
    "doi": "10.1109/TITS.2025.3566238"
  }
];
