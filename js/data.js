/**
 * Portfolio Data for Parinya Daengsawat (3D Artist / Character Modeler)
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Parinya Daengsawat",
    thaiName: "ปริญญา แดงสวัสดิ์ (ปอนด์)",
    role: "3D Artist & 3D Character Modeler",
    subRole: "Hard Surface & Prop Artist | Game-Ready Topology",
    email: "pondkerdang3@gmail.com",
    phone: "+66 98 863 9412",
    location: "Nong Suea, Pathum Thani, Thailand",
    artstation: "https://pondker1.artstation.com/",
    sketchfab: "https://sketchfab.com/",
    linkedin: "https://www.linkedin.com/in/parinya-daengsawat",
    resumePdf: "Parinya_Daengsawat_Resume_2026.pdf",
    avatar: "รูปโปรไฟล์/โปรไฟล์ใหม่.webp",
    bio: "บัณฑิตเกียรติประวัติด้านวิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย (KMUTT) ที่มีความเชี่ยวชาญด้านการขึ้นรูปโมเดลตัวละคร 3D Character, สภาพแวดล้อม 3D Prop และผ่านประสบการณ์ฝึกงานในสตูดิโอระดับโลกอย่าง Yannix (Thailand) ในไปป์ไลน์ภาพยนตร์ฮอลลีวูด (Hollywood VFX Pipeline) โดยเน้นการปั้นโมเดลขนาดเสมือนจริง",
    keyBadges: [
      {
        icon: "award",
        title: "Hollywood VFX Pipeline",
        desc: "3D Modeler Intern ที่ Yannix (Thailand) สร้าง 3D Environment สำหรับงานภาพยนตร์ระดับโลก"
      },
      {
        icon: "graduation-cap",
        title: "KMUTT Multimedia",
        desc: "วท.บ. วิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี"
      },
      {
        icon: "gamepad-2",
        title: "Game Developer (Thesis)",
        desc: "ออกแบบและพัฒนาเกม 2.5D Rogue-like ด้วย Godot Engine & Blender"
      },
      {
        icon: "check-circle-2",
        title: "Clean Quad Topology",
        desc: "โมเดล Low-poly / High-poly ที่ผ่านการ Retopology รองรับการ Rig ดัดท่าทางการเคลื่อนไหว 100%"
      }
    ]
  },

  // 3 Flagship Models displayed sequentially with full Slider & Breakdown support
  flagshipModels: [
    {
      id: "muaythai",
      number: "01",
      name: "Muaythai Fighter",
      thaiTitle: "โมเดลนักมวยไทย (Stylized Martial Arts Character)",
      badge: "Stylized Animation Character",
      tagline: "Stylized 3D Animation Character — Sculpting & Clean Retopology",
      description: "การออกแบบโมเดลตัวละครนักมวยไทยในสไตล์ตัวการ์ตูนแอนิเมชัน (Stylized Animation) โดยเน้นกระบวนการปั้นขึ้นรูปด้วยการ Sculpting เพื่อให้ได้รูปทรงและสัดส่วนที่โดดเด่น แล้วนำมาทำ Retopology ให้โครงสร้างเส้นสายโพลีกอน (Clean Quad Topology) มีความสวยงาม เป็นระเบียบ และประณีต เพื่อรองรับการเคลื่อนไหวและการจัดท่าทางในงานแอนิเมชันโดยเฉพาะ (ไม่เน้นสเปกเกม)",
      software: ["Blender", "Substance Painter", "Maya"],
      specs: {
        "สไตล์การออกแบบ": "Stylized 3D Cartoon Animation",
        "เทคนิคหลัก": "Digital Sculpting & Clean Retopology",
        "โครงสร้างเส้น": "Clean Quad Topology (สวยงาม ประณีต)",
        "การกาง UV": "Non-overlapping UVs & PBR Texturing"
      },
      turntableVideo: "ผลงาน Modeling/Muaythai/MuayThaiTurntable.mp4",
      slides: [
        {
          id: "poster",
          mode: "textured",
          type: "image",
          label: "Hero Poster Pose",
          src: "ผลงาน Modeling/Muaythai/Render Muay thai Poster.webp",
          badge: "Textured Render (Poster Pose)",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "ภาพเรนเดอร์โปสเตอร์หลัก ท่าทางเตรียมพร้อมต่อสู้ (PBR Textured Render)"
        },
        {
          id: "fullbody-pbr",
          mode: "textured",
          type: "image",
          label: "Full Body PBR Color",
          src: "ผลงาน Modeling/Muaythai/Muay thai colour.png",
          badge: "Textured Render (Full Body PBR)",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "การจัดแสดงชุดสีและรายละเอียดเท็กซ์เจอร์ PBR เต็มตัว หน้า-หลัง (PBR Texture)"
        },
        {
          id: "wireframe",
          mode: "wireframe",
          type: "image",
          label: "Wireframe Topology",
          src: "ผลงาน Modeling/Muaythai/Muat thai WireFrame.png",
          badge: "Wireframe Topology (Clean Quads)",
          badgeClass: "badge-wireframe",
          badgeColor: "bg-emerald-400",
          description: "โครงสร้างเส้นสายโพลีกอน Clean Quads ออกแบบรองรับการ Rig ดัดท่าเตะ ต่อย ศอก"
        },
        {
          id: "turntable",
          mode: "turntable",
          type: "video",
          label: "360° Turntable",
          src: "ผลงาน Modeling/Muaythai/MuayThaiTurntable.mp4",
          badge: "360° Turntable Video",
          badgeClass: "badge-turntable",
          badgeColor: "bg-purple-400",
          description: "วิดีโอ 360° Turntable หมุนรอบตัวตรวจเช็คแสงเงาและสัดส่วน"
        }
      ]
    },

    {
      id: "demon",
      number: "02",
      name: "Devil",
      thaiTitle: "ตัวละคร Devil (Stylized Anime Character)",
      badge: "Stylized Character & Topology",
      tagline: "Stylized Anime Fantasy Character with 1:1 Matching Quad Wireframe",
      description: "โมเดลตัวละครสไตล์ Stylized Anime / Fantasy ในธีม Devil โดดเด่นด้วยดีไซน์ทรงผมเขาสีขาว ดวงตาสีทอง และชุดคลุมต่อสู้ร่วมสมัย ปั้นขึ้นรูปอย่างประณีตพร้อมทำ Retopology ให้โครงสร้างเส้นสาย Quads เป็นระเบียบเรียบร้อย จุดเด่นสำคัญคือมีภาพเรนเดอร์เทียบกับ Wireframe แบบ 1-to-1 Matching ครบ 3 ท่าทางหลักและมุมมอง Front-Back เพื่อตรวจเช็คความสมบูรณ์ของโครงสร้างได้อย่างชัดเจน",
      software: ["Blender", "Substance Painter", "Maya"],
      specs: {
        "ประเภทโมเดล": "Stylized Anime / Fantasy Character",
        "โครงสร้างเส้น": "1:1 Matching Deformable Quads",
        "การกาง UV": "Multi-tile UDIM / PBR Workflow",
        "เท็กซ์เจอร์": "Subsurface Scattering & Stylized PBR",
        "จุดเด่นพิเศษ": "มี Wireframe เทียบมุมเรนเดอร์ตรงกันครบ 3 ท่า"
      },
      turntableVideo: "ผลงาน Modeling/Demon/Demon_Turntable.mp4",
      slides: [
        {
          id: "pose1-tex",
          mode: "textured",
          type: "image",
          label: "Pose 1 (Textured)",
          src: "ผลงาน Modeling/Demon/Render pose 1.webp",
          badge: "Textured Render (Pose 1)",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "Action Pose 1 - มุมมองแอคชั่นแรก แสดงแนวกล้ามเนื้อหัวไหล่ แขน และโครงหน้าตัวละคร Devil"
        },
        {
          id: "pose1-wire",
          mode: "wireframe",
          type: "image",
          label: "Pose 1 (Wireframe)",
          src: "ผลงาน Modeling/Demon/Wireframe pose 1.jpg",
          badge: "Wireframe Topology (1:1 Matching)",
          badgeClass: "badge-wireframe",
          badgeColor: "bg-emerald-400",
          description: "Wireframe Topology ท่าที่ 1 ตรงมุมเรนเดอร์แบบ 1:1 Matching โชว์เส้นสาย Quads"
        },
        {
          id: "pose2-tex",
          mode: "textured",
          type: "image",
          label: "Pose 2 (Textured)",
          src: "ผลงาน Modeling/Demon/Render pose 2.jpg",
          badge: "Textured Render (Pose 2)",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "Action Pose 2 - ท่าทางทรงพลัง โชว์การกระจายตัวของน้ำหนักและโครงสร้างหลัง"
        },
        {
          id: "pose2-wire",
          mode: "wireframe",
          type: "image",
          label: "Pose 2 (Wireframe)",
          src: "ผลงาน Modeling/Demon/Wireframe pose 2.jpg",
          badge: "Wireframe Topology (1:1 Matching)",
          badgeClass: "badge-wireframe",
          badgeColor: "bg-emerald-400",
          description: "Wireframe Topology ท่าที่ 2 ตรงมุมเรนเดอร์แบบ 1:1 แสดงความยืดหยุ่นของกล้ามเนื้อ"
        },
        {
          id: "pose3-tex",
          mode: "textured",
          type: "image",
          label: "Pose 3 (Textured)",
          src: "ผลงาน Modeling/Demon/Render pose 3.jpg",
          badge: "Textured Render (Pose 3)",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "Action Pose 3 - มุมมอง 3/4 แสดงมิติความลึกของสรีระและใบหน้าตัวละคร"
        },
        {
          id: "pose3-wire",
          mode: "wireframe",
          type: "image",
          label: "Pose 3 (Wireframe)",
          src: "ผลงาน Modeling/Demon/Wireframe pose 3.jpg",
          badge: "Wireframe Topology (1:1 Matching)",
          badgeClass: "badge-wireframe",
          badgeColor: "bg-emerald-400",
          description: "Wireframe Topology ท่าที่ 3 ตรงมุมเรนเดอร์แบบ 1:1 Matching"
        },
        {
          id: "frontback-tex",
          mode: "textured",
          type: "image",
          label: "Front & Back (Textured)",
          src: "ผลงาน Modeling/Demon/Front_Back.png",
          badge: "Textured Render (Front & Back)",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "มุมมองระนาบหน้าและหลัง แสดงความสมมาตรและแสงเงา"
        },
        {
          id: "frontback-wire",
          mode: "wireframe",
          type: "image",
          label: "Front & Back (Wireframe)",
          src: "ผลงาน Modeling/Demon/Wireframe_Front_Back.png",
          badge: "Wireframe Topology (Front & Back)",
          badgeClass: "badge-wireframe",
          badgeColor: "bg-emerald-400",
          description: "โครงสร้าง Wireframe หน้าและหลัง แสดงเส้นรอบตัวที่สมดุล"
        },
        {
          id: "turntable",
          mode: "turntable",
          type: "video",
          label: "360° Turntable",
          src: "ผลงาน Modeling/Demon/Demon_Turntable.mp4",
          badge: "360° Turntable Video",
          badgeClass: "badge-turntable",
          badgeColor: "bg-purple-400",
          description: "วิดีโอ 360° Turntable หมุนตรวจเช็คตัวละคร Devil รอบตัว"
        }
      ]
    },

    {
      id: "robot",
      number: "03",
      name: "Robot No.2",
      thaiTitle: "หุ่นยนต์รบ Sci-Fi (Hard Surface Mecha)",
      badge: "Hard Surface & Mecha",
      tagline: "Precision Mechanical Bevels, Joint Articulation & Realistic Metal Wear",
      description: "โมเดลหุ่นยนต์แนว Sci-Fi Hard Surface ที่เน้นความแม่นยำของเส้นสายเชิงกล ทุกรอยต่อได้รับการออกแบบให้มีกลไกรับแรงและหมุนได้ตามหลักวิศวกรรม มีการเก็บ Bevel ขอบโลหะที่คมชัด การ Bake Normal Map จาก High-Poly ที่แนบเนียน และเท็กซ์เจอร์โลหะถลอกสมจริง พร้อมวิดีโอแอนิเมชัน Turntable",
      software: ["Maya", "Substance Painter", "Blender"],
      specs: {
        "ประเภทโมเดล": "Hard Surface Sci-Fi Combat Mecha",
        "โครงสร้างเส้น": "Optimized Mechanical Bevel Quads",
        "การกาง UV": "High-density Pack / Hard Edge Splits",
        "เท็กซ์เจอร์": "Weathered Steel & Industrial Paint PBR",
        "แอนิเมชัน": "Rigged Joint Articulation พร้อมวิดีโอหมุนรอบตัว"
      },
      turntableVideo: "ผลงาน Modeling/Robot No.2/All.mp4",
      slides: [
        {
          id: "render1-tex",
          mode: "textured",
          type: "image",
          label: "Angle 1 (Close-up)",
          src: "ผลงาน Modeling/Robot No.2/render1 ROBOT No.2.webp",
          badge: "Textured Render (Close-up)",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "มุมมองระยะประชิดเน้นรายละเอียดชิ้นส่วนส่วนหัวและลำตัว (Textured)"
        },
        {
          id: "render2-tex",
          mode: "textured",
          type: "image",
          label: "Angle 2 (Combat Stance)",
          src: "ผลงาน Modeling/Robot No.2/render 2 Robot No.2.jpg",
          badge: "Textured Render (Combat Stance)",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "มุมมองเฉียงแสดงความหนาและเลเยอร์เกราะป้องกันด้านหน้า (Textured)"
        },
        {
          id: "render3-tex",
          mode: "textured",
          type: "image",
          label: "Angle 3 (Full Profile)",
          src: "ผลงาน Modeling/Robot No.2/render 3 Robot No.2.jpg",
          badge: "Textured Render (Full Profile)",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "มุมมองด้านข้างเน้นระบบไฮดรอลิกและข้อต่อแขน-ขา (Textured)"
        },
        {
          id: "render4-tex",
          mode: "textured",
          type: "image",
          label: "Angle 4 (Rear View)",
          src: "ผลงาน Modeling/Robot No.2/render 4 Robot No.2.jpg",
          badge: "Textured Render (Rear View)",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "มุมมองด้านหลังแสดงระบบระบายความร้อนและแพ็คพลังงาน (Textured)"
        },
        {
          id: "wireframe",
          mode: "wireframe",
          type: "image",
          label: "Wireframe Topology",
          src: "ผลงาน Modeling/Robot No.2/Wireframe Robot No.2.jpg",
          badge: "Wireframe Topology (Mechanical Quads)",
          badgeClass: "badge-wireframe",
          badgeColor: "bg-emerald-400",
          description: "โครงสร้าง Wireframe เชิงกล Hard Surface Bevels & Optimized Quads"
        },
        {
          id: "turntable",
          mode: "turntable",
          type: "video",
          label: "360° Turntable",
          src: "ผลงาน Modeling/Robot No.2/All.mp4",
          badge: "360° Turntable Video",
          badgeClass: "badge-turntable",
          badgeColor: "bg-purple-400",
          description: "วิดีโอแอนิเมชันและเรนเดอร์หมุนรอบตัวของ Robot No.2"
        }
      ]
    },

    {
      id: "kid-hero",
      number: "04",
      name: "Kid Hero (Game-Ready Character)",
      thaiTitle: "โมเดลตัวละครสไตล์ Stylized Game-Ready พร้อมทดสอบใน Unity Engine",
      badge: "Game-Ready & Real-time Topology",
      tagline: "Low-Poly Stylized Hero — Clean Real-Time Quads & Unity In-Engine Test",
      description: "โมเดลตัวละครฮีโร่เด็กสไตล์ Stylized Game-Ready โดดเด่นด้วยหมวกถังน้ำ เสื้อคลุมสีแดง และกล่องเกราะรูปดาว ปั้นขึ้นรูปและทำ Retopology ให้โครงสร้างเส้นสายโพลีกอน (Clean Quad Topology) เป็นระเบียบเรียบร้อย เหมาะสมสำหรับการใช้งานในเกมเอนจิน ผ่านการทำ Rigging และนำไปรันบน Unity Engine จริงเพื่อทดสอบการเคลื่อนไหวและการตอบสนองของแสงเงาแบบ Real-time",
      software: ["Blender", "Substance Painter", "Unity 3D"],
      specs: {
        "ประเภทโมเดล": "Stylized Game-Ready Character",
        "สไตล์ศิลปะ": "Stylized Low-to-Mid Poly Cartoon Hero",
        "โครงสร้างเส้น": "Game-Optimized Deformable Quads",
        "การกาง UV": "Clean Non-Overlapping UV Layout",
        "การทดสอบ": "Unity Real-time In-Engine Gameplay & Animation"
      },
      turntableVideo: "ผลงาน Modeling/CharacterStylizeforGame/Ture_table_hero.mp4",
      slides: [
        {
          id: "hero-tex",
          mode: "textured",
          type: "image",
          label: "Hero Pose (Textured)",
          src: "ผลงาน Modeling/CharacterStylizeforGame/_Hero_Pose.webp",
          badge: "Hero Pose (Textured Render)",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "Hero Pose หลัก ท่าทางแอคชั่นเต็มตัว ถ่ายทอดความน่ารักสดใสและเอกลักษณ์ของตัวละคร Kid Hero"
        },
        {
          id: "front-tex",
          mode: "textured",
          type: "image",
          label: "Front View (Textured)",
          src: "ผลงาน Modeling/CharacterStylizeforGame/Front.png",
          badge: "Orthographic Front View",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "มุมมองด้านหน้าตรง แสดงสัดส่วนและความสมมาตรของตัวละคร Kid Hero"
        },
        {
          id: "angle45-tex",
          mode: "textured",
          type: "image",
          label: "45° View (Textured)",
          src: "ผลงาน Modeling/CharacterStylizeforGame/45.png",
          badge: "Three-Quarter Perspective View",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "มุมมอง 45 องศา แสดงมิติความลึกของกล่องดาวและหมวกถังน้ำ"
        },
        {
          id: "side-tex",
          mode: "textured",
          type: "image",
          label: "Side View (Textured)",
          src: "ผลงาน Modeling/CharacterStylizeforGame/side.png",
          badge: "Profile Side View",
          badgeClass: "badge-textured",
          badgeColor: "bg-orange-400",
          description: "มุมมองด้านข้าง แสดงความหนาของผ้าคลุมและส่วนประกอบต่างๆ"
        },
        {
          id: "front-wire",
          mode: "wireframe",
          type: "image",
          label: "Front (Wireframe)",
          src: "ผลงาน Modeling/CharacterStylizeforGame/WireframeFront.png",
          badge: "Front Wireframe Topology",
          badgeClass: "badge-wireframe",
          badgeColor: "bg-emerald-400",
          description: "โครงสร้าง Wireframe หน้าตรง แสดง Quad Loops บริเวณใบหน้าและข้อต่อต่างๆ"
        },
        {
          id: "angle45-wire",
          mode: "wireframe",
          type: "image",
          label: "45° (Wireframe)",
          src: "ผลงาน Modeling/CharacterStylizeforGame/Wireframe45.png",
          badge: "45° Wireframe Topology",
          badgeClass: "badge-wireframe",
          badgeColor: "bg-emerald-400",
          description: "โครงสร้าง Wireframe มุม 45 องศา เส้นสายโพลีกอนประณีต สะอาด พร้อมสำหรับการ Rig"
        },
        {
          id: "side-wire",
          mode: "wireframe",
          type: "image",
          label: "Side (Wireframe)",
          src: "ผลงาน Modeling/CharacterStylizeforGame/WireframeSildepng.png",
          badge: "Side Wireframe Topology",
          badgeClass: "badge-wireframe",
          badgeColor: "bg-emerald-400",
          description: "โครงสร้าง Wireframe ด้านข้าง ความหนาแน่นของโพลีกอนสมดุลทั่วทั้งโมเดล"
        },
        {
          id: "unity-test",
          mode: "turntable",
          type: "video",
          label: "Unity In-Engine Test",
          src: "ผลงาน Modeling/CharacterStylizeforGame/TestOnUnity.mp4",
          badge: "Unity Real-time Test Video",
          badgeClass: "badge-turntable",
          badgeColor: "bg-purple-400",
          description: "วิดีโอบันทึกการทดสอบโมเดลและแอนิเมชันการวิ่งใน Unity Engine จริง (Real-time In-Engine)"
        },
        {
          id: "turntable",
          mode: "turntable",
          type: "video",
          label: "360° Turntable",
          src: "ผลงาน Modeling/CharacterStylizeforGame/Ture_table_hero.mp4",
          badge: "360° Turntable Video",
          badgeClass: "badge-turntable",
          badgeColor: "bg-purple-400",
          description: "วิดีโอ 360° Turntable หมุนตรวจเช็คตัวละคร Kid Hero รอบทิศทาง"
        }
      ]
    }
  ],

  // Simplified Skills with Program SVG Logos
  skillsWithLogos: [
    {
      name: "Blender",
      category: "Primary DCC",
      level: "เชี่ยวชาญสูง (Expert)",
      description: "ขึ้นรูป 3D Modeling, Digital Sculpting, Clean Retopology, UV Unwrapping, Eevee / Cycles Lighting & Rendering",
      color: "#EA7600",
      bgTint: "rgba(234, 118, 0, 0.12)",
      borderColor: "rgba(234, 118, 0, 0.35)",
      logo: "blender-icon.png"
    },
    {
      name: "Autodesk Maya",
      category: "VFX & Hard Surface",
      level: "เชี่ยวชาญ (Advanced)",
      description: "Hard Surface Modeling, Clean Quad Topology, Scene Assembly, Rigging & Skinning สำหรับ Hollywood VFX Pipeline",
      color: "#00C2D6",
      bgTint: "rgba(0, 194, 214, 0.12)",
      borderColor: "rgba(0, 194, 214, 0.35)",
      logo: "Maya_Logo.avif"
    },
    {
      name: "Substance 3D Painter",
      category: "PBR Texturing",
      level: "เชี่ยวชาญ (Advanced)",
      description: "การเพ้นท์พื้นผิว PBR ตามหลักฟิสิกส์, Smart Materials, High-to-Low Bake Maps (Normal, Curvature, AO)",
      color: "#E23727",
      bgTint: "rgba(226, 55, 39, 0.12)",
      borderColor: "rgba(226, 55, 39, 0.35)",
      logo: "adobe-substance-3d LOGO.png"
    },
    {
      name: "Godot Engine",
      category: "Game Dev Thesis",
      level: "เชี่ยวชาญ (Advanced)",
      description: "พัฒนาเกม 2.5D Rogue-like (ปริญญานิพนธ์), ประกอบฉาก 3D Environment, GDScript และระบบแสงเงา Real-time",
      color: "#478CBF",
      bgTint: "rgba(71, 140, 191, 0.12)",
      borderColor: "rgba(71, 140, 191, 0.35)",
      logo: "godot-game-engine-icon.png"
    },
    {
      name: "Unity 3D",
      category: "Real-time & AR",
      level: "คล่องแคล่ว (Proficient)",
      description: "Real-time Asset Pipeline, Prefab Setup, Shader Graph, Material Tuning และ Augmented Reality (AR) ด้วย Vuforia",
      color: "#FFFFFF",
      bgTint: "rgba(255, 255, 255, 0.08)",
      borderColor: "rgba(255, 255, 255, 0.25)",
      logo: "Unity_LOGO.png"
    },
    {
      name: "Adobe After Effects",
      category: "Motion & Compositing",
      level: "คล่องแคล่ว (Proficient)",
      description: "งาน Visual Compositing, Motion Graphics สำหรับพรีเซนต์ 3D Breakdown และเอฟเฟกต์นำเสนอผลงาน",
      color: "#9999FF",
      bgTint: "rgba(153, 153, 255, 0.12)",
      borderColor: "rgba(153, 153, 255, 0.35)",
      logo: "adobe-after-effects-icon.png"
    },
    {
      name: "Adobe Premiere Pro",
      category: "Video Editing",
      level: "คล่องแคล่ว (Proficient)",
      description: "ตัดต่อ Showreel ผลงาน 3D Turntable, Sync เสียงประกอบ และ Export วิดีโอความละเอียดสูงสำหรับพอร์ตโฟลิโอ",
      color: "#EA77FF",
      bgTint: "rgba(234, 119, 255, 0.12)",
      borderColor: "rgba(234, 119, 255, 0.35)",
      logo: "adobe-premiere-pro-icon.png"
    }
  ],

  // Other Works & Projects for the Filterable Portfolio Grid
  gallery: [
    {
      id: "game-thesis-ror",
      title: "Rise of Realm (ROR) — 2.5D Rogue-like Game",
      category: "games",
      categoryName: "Game Dev & 3D",
      image: "รวมผลงานเกม/Project_Game_Thesis_ROR/รูปปกเกม.webp",
      software: ["Godot Engine", "Blender", "Substance Painter", "Photoshop"],
      description: "ผลงานปริญญานิพนธ์ (Senior Thesis Project) พัฒนาเกม 2.5D Action Rogue-like บน Godot Engine โดยรับหน้าที่เป็น Game Developer & 3D Artist ออกแบบและสร้างฉากสภาพแวดล้อม 3D Environment ให้เชื่อมต่อกับระบบ 2D Character Sprites อย่างลื่นไหล พร้อมบริหารจัดการ Optimization สเปกโมเดลให้เกมรันได้อย่างมีประสิทธิภาพสูงสุด",
      slides: [
        {
          type: "image",
          title: "Rise of Realm - Game Cover & Title Screen",
          src: "รวมผลงานเกม/Project_Game_Thesis_ROR/รูปปกเกม.webp",
          description: "ภาพหน้าปกและไตเติ้ลหลักของเกม Rise of Realm (Senior Thesis Project)"
        },
        {
          type: "image",
          title: "Rise of Realm - In-Game Action",
          src: "รวมผลงานเกม/Project_Game_Thesis_ROR/ตัวอย่างเกม 1.jpg",
          description: "ภาพบรรยากาศการเล่นจริงในเกม 2.5D Action ผสานฉากสภาพแวดล้อม 3D เข้ากับระบบต่อสู้"
        },
        {
          type: "image",
          title: "Rise of Realm - Level Exploration",
          src: "รวมผลงานเกม/Project_Game_Thesis_ROR/ตัวอย่างเกม 2.jpg",
          description: "การจัดแสงและองค์ประกอบฉาก 3D Environment ภายในดันเจี้ยน"
        },
        {
          type: "image",
          title: "Rise of Realm - Dungeon Depths",
          src: "รวมผลงานเกม/Project_Game_Thesis_ROR/ตัวอย่างเกม 3.jpg",
          description: "มุมมองระบบต่อสู้และเอฟเฟกต์แสงเงาแบบ Real-time บน Godot Engine"
        },
        {
          type: "image",
          title: "Rise of Realm - Combat Stance",
          src: "รวมผลงานเกม/Project_Game_Thesis_ROR/ตัวอย่างเกม 4.jpg",
          description: "ระบบอนิเมชันและการควบคุมตัวละครในฉากต่อสู้"
        },
        {
          type: "image",
          title: "Rise of Realm - Boss Arena",
          src: "รวมผลงานเกม/Project_Game_Thesis_ROR/ตัวอย่างเกม 5.jpg",
          description: "การจัดวางพื้นที่สังเวียนต่อสู้บอส (Arena Layout & Lighting)"
        },
        {
          type: "image",
          title: "บรรยากาศการจัดแสดงผลงานปริญญานิพนธ์",
          src: "รวมผลงานเกม/Project_Game_Thesis_ROR/รูปถ่ายบรรยากาศโชว์เกม.png",
          description: "ภาพบรรยากาศการนำเสนอและจัดแสดงผลงานเกมจริงในงานนิทรรศการ Thesis มหาวิทยาลัย"
        }
      ]
    },
    {
      id: "game-siamgarden",
      title: "SiamGarden — Thailand's Soft Power Roblox Game",
      category: "games",
      categoryName: "Roblox Game & 3D",
      image: "รวมผลงานเกม/Project_Game_Siamgarden/ปกเกม Siam Garden.webp",
      youtubeUrl: "https://www.youtube.com/watch?v=N4hKWEeT_Uk",
      software: ["Roblox Studio", "Blender", "Substance Painter"],
      description: "กิจกรรมการแข่งขัน Thailand's Soft Power Roblox Game Creation Festival (ระดับอุดมศึกษา) — รับหน้าที่เป็น 3D Artist ในทีม ผลิต 3D Assets, Environment และ Animation Character สื่อสารอัตลักษณ์วัฒนธรรมไทยสู่แพลตฟอร์มระดับโลก พร้อมได้รับเกียรติบัตรการแข่งขัน",
      slides: [
        {
          type: "youtube",
          title: "Siam Garden Gameplay Showcase (YouTube)",
          src: "https://www.youtube.com/embed/N4hKWEeT_Uk",
          description: "วิดีโอตัวอย่างเกมเพลย์ Siam Garden บน YouTube การแข่งขัน Thailand's Soft Power Roblox Game"
        },
        {
          type: "image",
          title: "Siam Garden Game Poster",
          src: "รวมผลงานเกม/Project_Game_Siamgarden/ปกเกม Siam Garden.webp",
          description: "ภาพโปสเตอร์หลักเกม Siam Garden ถ่ายทอดความงดงามและเสน่ห์ของตลาดและสถาปัตยกรรมไทย"
        },
        {
          type: "image",
          title: "Siam Garden In-Game View #1",
          src: "รวมผลงานเกม/Project_Game_Siamgarden/ภาพตัวอย่าง 1.png",
          description: "บรรยากาศฉากภายในเกมจำลองเมืองและร้านค้าสไตล์ไทยบน Roblox"
        },
        {
          type: "image",
          title: "Siam Garden In-Game View #2",
          src: "รวมผลงานเกม/Project_Game_Siamgarden/ภาพตัวอย่าง 2.png",
          description: "การจัดวางพร็อพส์ 3D Model ผัก ผลไม้ และอาหารไทยโบราณ"
        },
        {
          type: "image",
          title: "Siam Garden In-Game View #3",
          src: "รวมผลงานเกม/Project_Game_Siamgarden/ภาพตัวอย่าง 3.png",
          description: "มุมมองสถาปัตยกรรมเรือนไทยและสภาพแวดล้อมริมน้ำ"
        },
        {
          type: "image",
          title: "รูปถ่ายสมาชิกทีมผู้พัฒนา",
          src: "รวมผลงานเกม/Project_Game_Siamgarden/รูปภาะถ่ายสมาชิกทีม.jpg",
          description: "ภาพถ่ายทีมผู้พัฒนาในการแข่งขัน Thailand's Soft Power Game Festival"
        },
        {
          type: "image",
          title: "เกียรติบัตรการเข้าร่วมแข่งขัน",
          src: "รวมผลงานเกม/Project_Game_Siamgarden/เกียรติบัตร.png",
          description: "เกียรติบัตรรับรองการเข้าร่วมการแข่งขัน Thailand's Soft Power Roblox Game Creation Festival"
        }
      ]
    },
    {
      id: "game-jim-adventure",
      title: "Jim Adventure — Global Game Jam 2024 (48 Hrs)",
      category: "games",
      categoryName: "Game Jam (48h)",
      image: "รวมผลงานเกม/Project_Game_Jam_2024_Jim_Adventure/ภาพปกเกม Jim Adventure.webp",
      software: ["Blender", "Unity 3D", "Photoshop"],
      description: "ผลงานพัฒนาเกมในการแข่งขันระดับสากล Global Game Jam 2024 ภายในเวลาจำกัด 48 ชั่วโมง รับหน้าที่ออกแบบ 2D/3D Assets, โมเดลสภาพแวดล้อม และ Animation การเคลื่อนไหวของตัวละคร Jim ในภารกิจผจญภัยสุดท้าทาย",
      slides: [
        {
          type: "image",
          title: "Jim Adventure Game Cover",
          src: "รวมผลงานเกม/Project_Game_Jam_2024_Jim_Adventure/ภาพปกเกม Jim Adventure.webp",
          description: "ภาพปกเกม Jim Adventure ผลงานสร้างสรรค์ใน Global Game Jam 2024"
        },
        {
          type: "image",
          title: "Gameplay Screenshot #1",
          src: "รวมผลงานเกม/Project_Game_Jam_2024_Jim_Adventure/ภาพตัวอย่าง 1.png",
          description: "ภาพตัวอย่างเกมเพลย์และฉากการผจญภัยของตัวละคร"
        },
        {
          type: "image",
          title: "Gameplay Screenshot #2",
          src: "รวมผลงานเกม/Project_Game_Jam_2024_Jim_Adventure/ภาพตัวอย่าง 2.png",
          description: "การจัดวาง Level Design และสิ่งกีดขวางในด่าน"
        },
        {
          type: "image",
          title: "Gameplay Screenshot #3",
          src: "รวมผลงานเกม/Project_Game_Jam_2024_Jim_Adventure/ภาพตัวอย่าง 3.png",
          description: "มุมมองการเล่นและการเคลื่อนไหวฝ่าอุปสรรค"
        },
        {
          type: "image",
          title: "Gameplay Screenshot #4",
          src: "รวมผลงานเกม/Project_Game_Jam_2024_Jim_Adventure/ภาพตัวอย่าง 4.png",
          description: "การแสดงผล UI และระบบการเล่นภายในเกม"
        },
        {
          type: "image",
          title: "ภาพถ่ายสมาชิกทีม Game Jam",
          src: "รวมผลงานเกม/Project_Game_Jam_2024_Jim_Adventure/ภาพถ่ายสมาชิกทีม.jpg",
          description: "ภาพบรรยากาศการร่วมมือกันพัฒนาเกมแบบ Hackathon 48 ชั่วโมงของทีม"
        }
      ]
    },
    {
      id: "game-jeak-jump",
      title: "Jeak Jump — Jump Platformer Game Jam 2023",
      category: "games",
      categoryName: "Game Jam (48h)",
      image: "รวมผลงานเกม/Project_Game_Jam_2023_Jeak_Jump/ปกเกม.webp",
      youtubeUrl: "https://www.youtube.com/watch?v=YfdHdEaFzw4",
      software: ["Unity 3D", "Blender", "Photoshop"],
      description: "เกมแนว Jump Platformer สุดท้าทาย พัฒนาขึ้นในงานแข่งขัน Game Jam 2023 ภายใต้เวลาจำกัด 48 ชั่วโมง รับหน้าที่ออกแบบ 2D/3D Assets, Animation ตัวละคร และออกแบบเส้นทางกระโดดไต่ระดับความยาก",
      slides: [
        {
          type: "youtube",
          title: "Jeak Jump Gameplay Showcase (YouTube)",
          src: "https://www.youtube.com/embed/YfdHdEaFzw4",
          description: "วิดีโอตัวอย่างเกมเพลย์ Jeak Jump บน YouTube การแข่งขัน Game Jam 2023"
        },
        {
          type: "image",
          title: "Jeak Jump Cover",
          src: "รวมผลงานเกม/Project_Game_Jam_2023_Jeak_Jump/ปกเกม.webp",
          description: "ภาพปกเกม Jeak Jump เกมกระโดดตะลุยด่านสุดเร้าใจ"
        },
        {
          type: "image",
          title: "In-Game View #1",
          src: "รวมผลงานเกม/Project_Game_Jam_2023_Jeak_Jump/ตัวอย่่างเกม 1.png",
          description: "จุดเริ่มต้นการปีนป่ายและระบบ Physics การกระโดด"
        },
        {
          type: "image",
          title: "In-Game View #2",
          src: "รวมผลงานเกม/Project_Game_Jam_2023_Jeak_Jump/ตัวอย่่างเกม 3.png",
          description: "การกระโดดผ่านสิ่งกีดขวางระดับความสูงต่างๆ"
        },
        {
          type: "image",
          title: "In-Game View #3",
          src: "รวมผลงานเกม/Project_Game_Jam_2023_Jeak_Jump/ตัวอย่่างเกม 4.png",
          description: "มุมมองไต่ระดับความสูงและการจับจังหวะการเคลื่อนที่"
        },
        {
          type: "image",
          title: "In-Game View #4",
          src: "รวมผลงานเกม/Project_Game_Jam_2023_Jeak_Jump/ตัวอย่่างเกม 5.png",
          description: "ความท้าทายของแพลตฟอร์มและฉากสภาพแวดล้อม"
        },
        {
          type: "image",
          title: "In-Game View #5",
          src: "รวมผลงานเกม/Project_Game_Jam_2023_Jeak_Jump/ตัวอย่่างเกม 6.png",
          description: "การคำนวณระยะตกและมุมกระโดด"
        },
        {
          type: "image",
          title: "In-Game View #6",
          src: "รวมผลงานเกม/Project_Game_Jam_2023_Jeak_Jump/ตัวอย่่างเกม 7.png",
          description: "ภาพรวมระดับความสูงที่ผู้เล่นต้องฝ่าฟันขึ้นไปให้ถึงจุดหมาย"
        }
      ]
    },
    {
      id: "game-ar-card",
      title: "Interactive AR Card Game — Unity & Vuforia",
      category: "games",
      categoryName: "AR & Interactive",
      image: "รวมผลงานเกม/Project_Game_AR_Card/ตัวอย่างเกม 1.webp",
      software: ["Unity 3D", "Vuforia AR", "Blender", "Photoshop"],
      description: "โปรเจกต์ผลิตการ์ดเกมต่อสู้ผสานเทคโนโลยี Augmented Reality (AR) บน Unity 3D และ Vuforia SDK โดยเมื่อส่องกล้องไปยังการ์ดจริง ตัวละคร 3D จะปรากฏขึ้นมาพร้อมแอนิเมชันการต่อสู้ รับหน้าที่ขึ้นโมเดลตัวละคร 3D, Rigging, Animation และตั้งค่าระบบตรวจจับ Image Target AR Marker",
      slides: [
        {
          type: "image",
          title: "AR Card Gameplay Showcase",
          src: "รวมผลงานเกม/Project_Game_AR_Card/ตัวอย่างเกม 1.webp",
          description: "การแสดงผลโมเดล 3D แบบ Real-time บนการ์ดจริงผ่านเทคโนโลยี AR"
        },
        {
          type: "image",
          title: "Unity In-Engine AR Setup",
          src: "รวมผลงานเกม/Project_Game_AR_Card/ตัวอย่างในUnity.png",
          description: "การจัดเตรียม Scene, กล้อง AR Camera และการตั้งค่า Vuforia Image Targets ใน Unity"
        },
        {
          type: "image",
          title: "AR Card: Devil Monster",
          src: "รวมผลงานเกม/Project_Game_AR_Card/ตัวอย่างการ์ด/Devil 1.jpg",
          description: "การ์ดมอนสเตอร์เผ่าปีศาจ (Devil Type) พร้อมภาพอิลลัสต์และค่าพลัง"
        },
        {
          type: "image",
          title: "AR Card: Devil Slayer",
          src: "รวมผลงานเกม/Project_Game_AR_Card/ตัวอย่างการ์ด/Devil 2.jpg",
          description: "การ์ดตัวละครเผ่าปีศาจสายโจมตีระยะประชิด"
        },
        {
          type: "image",
          title: "AR Card: Beast Hunter",
          src: "รวมผลงานเกม/Project_Game_AR_Card/ตัวอย่างการ์ด/Beasts 1.jpg",
          description: "การ์ดมอนสเตอร์เผ่าอสูร (Beast Type)"
        },
        {
          type: "image",
          title: "AR Card: Human Knight",
          src: "รวมผลงานเกม/Project_Game_AR_Card/ตัวอย่างการ์ด/Human 1 (1).jpg",
          description: "การ์ดอัศวินเผ่ามนุษย์ (Human Type)"
        },
        {
          type: "image",
          title: "AR Card: Plant Elemental",
          src: "รวมผลงานเกม/Project_Game_AR_Card/ตัวอย่างการ์ด/Plants 1.jpg",
          description: "การ์ดมอนสเตอร์ธาตุพืชและธรรมชาติ (Plant Type)"
        }
      ]
    },
    {
      id: "animation-cgam15",
      title: "CGAM 15 — Opening Animation for Sport Event",
      category: "animation",
      categoryName: "3D Animation",
      image: "รวมผลงานAnimation/thumbnail.webp",
      youtubeUrl: "https://www.youtube.com/watch?v=82q_IqmJ4uM",
      software: ["Blender", "Maya", "Adobe After Effects", "Adobe Premiere Pro"],
      description: "วิดีโอแอนิเมชันเปิดตัวงานแข่งขันกีฬา CGAM ครั้งที่ 15 (Applied Computer Science - Multimedia KMUTT) ถ่ายทอดความน่ารักสดใสของมาสคอตประจำสาขาในรูปแบบ 3D Character Animation, Keyframe Motion และ Visual Compositing",
      slides: [
        {
          type: "youtube",
          title: "CGAM 15 Opening Animation (YouTube)",
          src: "https://www.youtube.com/embed/82q_IqmJ4uM",
          description: "วิดีโอแอนิเมชันเปิดตัวงานแข่งขันกีฬา CGAM 15 ตัวละคร 3D มาสคอตพร้อมเสียงดนตรีประกอบบน YouTube"
        },
        {
          type: "image",
          title: "CGAM 15 Title Frame",
          src: "รวมผลงานAnimation/thumbnail.webp",
          description: "ซีนเปิดตัวไตเติ้ล CGAM 15 พร้อมมาสคอตและมิติความลึกของแสงเงา 3D สตูดิโอ"
        }
      ]
    },
    {
      id: "mascot-sculpture",
      title: "Mascot Sculpture & Urban Bench Design",
      category: "props",
      categoryName: "Mascot & Sculpture",
      image: "ผลงาน Modeling/Other_Model/Modeling_For_Mascot/45_View_Version_2.webp",
      youtubeUrl: "https://www.youtube.com/watch?v=8iRX5fyX-Ds",
      software: ["Blender", "Substance Painter"],
      description: "การออกแบบและขึ้นรูป 3D โมเดลประติมากรรมสัตว์แฟนตาซีม้านั่งสาธารณะ (Urban Bench Sculpture) ผสานลวดลายศิลปะเสือ ยีราฟ และม้าลาย พร้อมสเกลเปรียบเทียบขนาดกับสัดส่วนมนุษย์จริง และวิดีโอ 360° Turntable",
      slides: [
        {
          type: "image",
          title: "45° Perspective View",
          src: "ผลงาน Modeling/Other_Model/Modeling_For_Mascot/45_View_Version_2.webp",
          description: "มุมมอง 45 องศา แสดงรูปทรง ลวดลายศิลปะ และพื้นผิวโค้งมนของม้านั่งประติมากรรม"
        },
        {
          type: "image",
          title: "Front View",
          src: "ผลงาน Modeling/Other_Model/Modeling_For_Mascot/Front_View_Version_2.png",
          description: "มุมมองด้านหน้าตรง แสดงโครงสร้างใบหน้า เขาแฟนตาซี และลวดลายบริเวณอก"
        },
        {
          type: "image",
          title: "Side View",
          src: "ผลงาน Modeling/Other_Model/Modeling_For_Mascot/Side_View_Version_2.png",
          description: "มุมมองด้านข้าง แสดงแนวม้านั่งและความยาวของลำตัวที่รองรับการใช้งาน"
        },
        {
          type: "image",
          title: "Top View",
          src: "ผลงาน Modeling/Other_Model/Modeling_For_Mascot/Top_View_Version_2.png",
          description: "มุมมองด้านบน (Top View) แสดงพื้นที่สำหรับนั่งพักผ่อนและเส้นสายลายทาง"
        },
        {
          type: "image",
          title: "Back View",
          src: "ผลงาน Modeling/Other_Model/Modeling_For_Mascot/Back_View_Version_2.png",
          description: "มุมมองด้านหลัง แสดงหางก้นหอยและลวดลายด้านหลัง"
        },
        {
          type: "image",
          title: "Human Scale Comparison",
          src: "ผลงาน Modeling/Other_Model/Modeling_For_Mascot/Model_with_people.png",
          description: "การจำลองสัดส่วนกับคนจริง (Scale Reference) เพื่อแสดงฟังก์ชันการเป็นม้านั่งพักผ่อนในพื้นที่สาธารณะ"
        },
        {
          type: "image",
          title: "Original 2D Concept Sketch",
          src: "ผลงาน Modeling/Other_Model/Modeling_For_Mascot/Ori.jpg",
          description: "ภาพสเก็ตช์คอนเซ็ปต์ 2D ต้นฉบับก่อนนำมาขึ้นรูปโมเดล 3D"
        },
        {
          type: "youtube",
          title: "360° Turntable Video (YouTube)",
          src: "https://www.youtube.com/embed/8iRX5fyX-Ds",
          description: "วิดีโอ 360° Turntable แสดงภาพรวมของชิ้นงานรอบทิศทางบน YouTube"
        }
      ]
    },
    {
      id: "line-sticker-3d",
      title: "LINE 3D Stickers — Multiman Series",
      category: "characters",
      categoryName: "3D Character & Stickers",
      image: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 1.webp",
      software: ["Blender", "Photoshop"],
      description: "โปรเจกต์ออกแบบสติกเกอร์ LINE ชุด 3D คาแรคเตอร์ 'Multiman' ฮีโร่ตัวจิ๋วสุดกวน ครบทั้ง 16 แอคชั่น แสดงอารมณ์ ข้อความ 3D และเอฟเฟกต์สร้างสรรค์",
      slides: [
        { type: "image", title: "Multiman #1 - รวยโว้ย", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 1.webp", description: "แอคชั่นยืนบนกองเงิน พร้อมข้อความ 3D 'รวยโว้ย'" },
        { type: "image", title: "Multiman #2", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 2.png", description: "แอคชั่นแสดงอารมณ์ Multiman #2" },
        { type: "image", title: "Multiman #3", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 3.png", description: "แอคชั่นแสดงอารมณ์ Multiman #3" },
        { type: "image", title: "Multiman #3 (Alternative)", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 3 (2).png", description: "แอคชั่นแสดงอารมณ์ Multiman #3 ท่าทางทางเลือก" },
        { type: "image", title: "Multiman #4", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 4.png", description: "แอคชั่นแสดงอารมณ์ Multiman #4" },
        { type: "image", title: "Multiman #5", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 5.png", description: "แอคชั่นแสดงอารมณ์ Multiman #5" },
        { type: "image", title: "Multiman #6", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 6.png", description: "แอคชั่นแสดงอารมณ์ Multiman #6" },
        { type: "image", title: "Multiman #7", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 7.png", description: "แอคชั่นแสดงอารมณ์ Multiman #7" },
        { type: "image", title: "Multiman #8", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 8.png", description: "แอคชั่นแสดงอารมณ์ Multiman #8" },
        { type: "image", title: "Multiman #9", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 9.png", description: "แอคชั่นแสดงอารมณ์ Multiman #9" },
        { type: "image", title: "Multiman #10", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 10.png", description: "แอคชั่นแสดงอารมณ์ Multiman #10" },
        { type: "image", title: "Multiman #11", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 11.png", description: "แอคชั่นแสดงอารมณ์ Multiman #11" },
        { type: "image", title: "Multiman #12", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 12.png", description: "แอคชั่นแสดงอารมณ์ Multiman #12" },
        { type: "image", title: "Multiman #13", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 13.png", description: "แอคชั่นแสดงอารมณ์ Multiman #13" },
        { type: "image", title: "Multiman #14", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 14.png", description: "แอคชั่นแสดงอารมณ์ Multiman #14" },
        { type: "image", title: "Multiman #15", src: "ผลงาน Modeling/Other_Model/สติกเกอร์ไลน์ line 3D/multiman 15.png", description: "แอคชั่นแสดงอารมณ์ Multiman #15" }
      ]
    },
    {
      id: "isometric-restroom",
      title: "Isometric Restroom — 3-Lighting Study",
      category: "environments",
      categoryName: "Environments & Lighting",
      image: "ผลงาน Modeling/Other_Model/Isometic_Room/Render Night - Copy.webp",
      software: ["Blender", "Cycles / Eevee"],
      description: "โปรเจกต์ศึกษาการจัดแสง (Lighting Study) สภาพแวดล้อมห้องน้ำสไตล์สตรีทอาร์ตกราฟฟิตี้ เปรียบเทียบแสง 3 สภาพแวดล้อม: ยามเช้า (Morning), ยามเย็น (Evening) และยามค่ำคืนนีออน (Night)",
      slides: [
        {
          type: "image",
          title: "Night Lighting (แสงนีออนยามค่ำคืน)",
          src: "ผลงาน Modeling/Other_Model/Isometic_Room/Render Night - Copy.webp",
          description: "การจัดแสงนีออนยามค่ำคืน ให้ความรู้สึกลึกลับและโดดเด่นด้วยโทนสีสตรีทอาร์ต"
        },
        {
          type: "image",
          title: "Morning Lighting (แสงแดดธรรมชาติยามเช้า)",
          src: "ผลงาน Modeling/Other_Model/Isometic_Room/Render Morning - Copy.jpg",
          description: "การจัดแสงยามเช้า แสงแดดกระจายโปร่งตา เน้นรายละเอียดรอยเปื้อนและเท็กซ์เจอร์กระเบื้อง"
        },
        {
          type: "image",
          title: "Evening Lighting (แสงสีส้มยามอาทิตย์อัสดง)",
          src: "ผลงาน Modeling/Other_Model/Isometic_Room/Render Evening - Copy.jpg",
          description: "การจัดแสงยามเย็น แสงโทนอุ่นส่องกระทบโถสุขภัณฑ์และผนังอิฐอย่างมีมิติ"
        }
      ]
    },
    {
      id: "yasuo",
      title: "Yasuo Champion Fan-Art",
      category: "characters",
      categoryName: "Characters",
      image: "ผลงาน Modeling/Yasuo/Yasuo 1.webp",
      extraImages: ["ผลงาน Modeling/Yasuo/Yasuo 2.png"],
      video: "ผลงาน Modeling/Yasuo/Yasuo.mp4",
      software: ["Blender", "Substance Painter"],
      description: "3D Character Fan-Art ของแชมเปี้ยน Yasuo จาก League of Legends ถ่ายทอดความพลิ้วไหวของเส้นผมและผ้าคลุม รวมถึงดาบคาตานะคู่ใจ",
      slides: [
        { type: "image", title: "Yasuo Hero Render", src: "ผลงาน Modeling/Yasuo/Yasuo 1.webp", description: "ภาพเรนเดอร์หลัก แสดงความสง่างามของ Yasuo" },
        { type: "image", title: "Yasuo Action Angle", src: "ผลงาน Modeling/Yasuo/Yasuo 2.png", description: "มุมมองแอคชั่นเสริม แสดงรายละเอียดดาบและผ้าคลุม" },
        { type: "video", title: "Yasuo 360° Turntable Video", src: "ผลงาน Modeling/Yasuo/Yasuo.mp4", description: "วิดีโอ 360° แสดงความพลิ้วไหวรอบตัว" }
      ]
    },
    {
      id: "rpg-character",
      title: "RPG Fantasy Game Character",
      category: "characters",
      categoryName: "Characters",
      image: "ผลงาน Modeling/GameCharracter/Character RPG 2.webp",
      extraImages: ["ผลงาน Modeling/GameCharracter/Character RPG.jpg", "ผลงาน Modeling/GameCharracter/Character game 2.jpg"],
      software: ["Blender", "Maya"],
      description: "ตัวละครแนว Fantasy RPG สไตล์สากล ออกแบบมาสำหรับการใช้งานแบบ Real-time ในเกมเอนจิน",
      slides: [
        { type: "image", title: "RPG Character Main Render", src: "ผลงาน Modeling/GameCharracter/Character RPG 2.webp", description: "ภาพเรนเดอร์ตัวละครหลักสไตล์ Fantasy RPG" },
        { type: "image", title: "RPG Character Angle 2", src: "ผลงาน Modeling/GameCharracter/Character RPG.jpg", description: "มุมมองแอคชั่นพร้อมอาวุธ" },
        { type: "image", title: "RPG Character In-Game Angle", src: "ผลงาน Modeling/GameCharracter/Character game 2.jpg", description: "มุมมองทดสอบสำหรับการใช้งานในเกมเอนจิน" }
      ]
    },
    {
      id: "mustang-car",
      title: "Ford Mustang GT - Hard Surface Vehicle",
      category: "hardsurface",
      categoryName: "Hard Surface",
      image: "ผลงาน Modeling/Other_Model/Mustang evee.webp",
      software: ["Blender", "Eevee Render"],
      description: "โมเดลรถสปอร์ต Hard Surface เน้นส่วนโค้งเว้าของบอดี้รถสะท้อนแสงไฟสตูดิโอได้อย่างแม่นยำ พร้อมยางล้อและสปอยเลอร์หลัง"
    },
    {
      id: "mazinger-z",
      title: "Mazinger Z Classic Mecha",
      category: "hardsurface",
      categoryName: "Hard Surface",
      image: "ผลงาน Modeling/Other_Model/Mazinger Z.webp",
      software: ["Blender"],
      description: "โมเดลหุ่นยนต์คลาสสิกระดับตำนาน ถ่ายทอดสัดส่วนและความคลาสสิกของลายเส้นอะนิเมะยุคทองในรูปแบบ 3D"
    },
    {
      id: "fantasy-axe",
      title: "Fantasy Battle Axe Prop",
      category: "props",
      categoryName: "Props & Weapons",
      image: "ผลงาน Modeling/Other_Model/AXE Circle.webp",
      software: ["Blender", "Substance Painter"],
      description: "ขวานศึกแฟนตาซีพร้อมรายละเอียดรอยฟัน รอยสึกหรอ และการฝังอัญมณีเวทมนตร์บนตัวใบมีด"
    },
    {
      id: "ps4-console",
      title: "PlayStation 4 Console & DualShock",
      category: "props",
      categoryName: "Props & Weapons",
      image: "ผลงาน Modeling/Other_Model/PS4.webp",
      software: ["Blender", "Substance Painter"],
      description: "โมเดลอุปกรณ์อิเล็กทรอนิกส์ Hard Surface ความแม่นยำระดับ 1:1 กับของจริง ทั้งพอร์ตเชื่อมต่อและผิวสัมผัสจอยสติ๊ก"
    },
    {
      id: "coke-packshot",
      title: "Product Packshot - Coca-Cola",
      category: "props",
      categoryName: "Props & Weapons",
      image: "ผลงาน Modeling/Other_Model/CoKe Pack shot.webp",
      software: ["Blender"],
      description: "การจัดแสงและการเรนเดอร์ผลิตภัณฑ์กระป๋องโค้กพร้อมหยดน้ำเกาะรอบกระป๋อง (Condensation) เพื่อความสดชื่นสมจริง"
    },
    {
      id: "night-tower",
      title: "Fantasy Tower Night Environment",
      category: "environments",
      categoryName: "Environments",
      image: "ผลงาน Modeling/Other_Model/tower Night circle.webp",
      software: ["Blender"],
      description: "หอคอยแฟนตาซียามค่ำคืนในรูปแบบทรงกลม Diorama การจัดแสงนีออนเรืองแสงสร้างบรรยากาศลึกลับน่าค้นหา"
    },
    {
      id: "isometric-room",
      title: "Cozy Afternoon Room Environment",
      category: "environments",
      categoryName: "Environments",
      image: "ผลงาน Modeling/Other_Model/HomeWork  Afternoon.webp",
      software: ["Blender"],
      description: "สภาพแวดล้อมห้องนอนสไตล์ Isometric อบอุ่น แสงแดดยามบ่ายส่องผ่านหน้าต่างลงบนเฟอร์นิเจอร์สไตล์มินิมอล"
    },
    {
      id: "kaneki-bust",
      title: "Tokyo Ghoul - Kaneki Ken 3D Bust",
      category: "characters",
      categoryName: "Characters",
      image: "ผลงาน Modeling/Other_Model/Kaneki Ken 3D.webp",
      software: ["Blender"],
      description: "งานปั้นครึ่งตัว (Bust Sculpt) ของ Kaneki Ken จาก Tokyo Ghoul ถ่ายทอดหน้ากากหนังและดวงตาสีแดงอันเป็นเอกลักษณ์"
    }
  ],

  // 3D Production Workflow
  workflow: [
    { step: "01", title: "Concept & Blockout", desc: "วิเคราะห์แบบอ้างอิงและขึ้นโครงร่างรูปทรงหลัก (Primary Shapes) กำหนดสัดส่วนและ Silhouette ให้ถูกต้องแม่นยำ" },
    { step: "02", title: "High-Poly Sculpting", desc: "ลงรายละเอียดระดับสูง (Secondary & Tertiary Details) ปั้นกล้ามเนื้อ รอยพับผ้า และพื้นผิวเชิงลึก" },
    { step: "03", title: "Clean Retopology & UVs", desc: "เกลี่ยเส้นสาย Quads ให้เป็นระเบียบ สะอาดตา พร้อมคลี่ UV แบบจัดสรรพื้นที่คุ้มค่า ปราศจากรอยยับ" },
    { step: "04", title: "PBR Baking & Texturing", desc: "Bake Normal, Curvature, AO จาก High-Poly สู่ Low-Poly และเพ้นท์เท็กซ์เจอร์ตามหลักฟิสิกส์ PBR" },
    { step: "05", title: "Rigging & Turntable Render", desc: "เซ็ตโครงกระดูก (Bone Rigging) ตรวจสอบการ Deform และจัดไฟสตูดิโอเรนเดอร์ 360° Turntable ตรวจเช็คทุกมุมมอง" },
    { step: "06", title: "Game Engine & VFX Integration", desc: "นำเข้าสู่ Unity / Godot / DCC เพื่อปรับแต่ง Material Shader และทดสอบประสิทธิภาพการใช้งานจริง" }
  ],

  // Work Experience & Education
  experience: [
    {
      period: "2025",
      role: "3D Modeler Intern",
      company: "Yannix (Thailand) Co., Ltd.",
      type: "Hollywood VFX Production",
      bullets: [
        "สร้างสรรค์โมเดลสภาพแวดล้อม 3 มิติ (3D Environment Models) ความละเอียดและความถูกต้องตามสเกลจริง สำหรับกระบวนการ VFX ภาพยนตร์ระดับฮอลลีวูด",
        "รับผิดชอบความแม่นยำของ Geometry เพื่อใช้เป็นพื้นผิวเชื่อมต่อและสะท้อนผลลัพธ์ของ Visual Effects (Integration Surfaces)",
        "ทำงานร่วมกับทีม Production ภายใต้มาตรฐานและ Pipeline ระดับสากล"
      ]
    },
    {
      period: "2025 – 2026",
      role: "Game Developer & 3D Artist",
      company: "Rise of Realm (Senior Thesis Project)",
      type: "2.5D Rogue-like Game",
      bullets: [
        "ออกแบบและพัฒนาเกม 2.5D Rogue-like บน Godot Engine (ปริญญานิพนธ์)",
        "ผสานฉากสภาพแวดล้อม 3D เข้ากับระบบ 2D Character Sprites อย่างลื่นไหล",
        "บริหารจัดการสเปกโมเดลและ Optimization เพื่อให้เกมรันได้อย่างมีประสิทธิภาพสูงสุด"
      ]
    },
    {
      period: "2026",
      role: "3D Modeler & Animator",
      company: "SiamGarden – Thailand's Soft Power Festival",
      type: "Roblox Game Creation Event",
      bullets: [
        "ออกแบบและสร้าง 3D Character Assets สื่อสารอัตลักษณ์วัฒนธรรมไทยสำหรับแพลตฟอร์ม Roblox",
        "สร้าง Animation การเคลื่อนไหวของตัวละครให้ลื่นไหลและเหมาะสมกับข้อจำกัดของ Engine"
      ]
    },
    {
      period: "2022 – 2023",
      role: "Game Jam Artist & AR Developer",
      company: "Global Game Jam & CGAM Event",
      type: "Game Jams & Interactive AR",
      bullets: [
        "ออกแบบ 2D/3D Assets และ Animation ภายใต้เวลาจำกัด 48 ชั่วโมง (เกม Tim Adventure และ Jeak Jump)",
        "พัฒนา 3D AR Model และ Interaction ด้วย Unity + Vuforia สำหรับการแข่งขันกีฬาความสัมพันธ์ 3 สถาบัน (CGAM)"
      ]
    }
  ],

  education: [
    {
      period: "2022 – 2026",
      institution: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี (KMUTT)",
      degree: "วิทยาศาสตรบัณฑิต (วท.บ.) วิทยาการคอมพิวเตอร์ประยุกต์-มัลติมีเดีย (Applied Computer Science-Multimedia)",
      gpax: "เกรดเฉลี่ยสะสม GPAX 2.93"
    },
    {
      period: "2016 – 2022",
      institution: "โรงเรียนสารสาสน์วิเทศรังสิต",
      degree: "มัธยมศึกษาตอนปลาย (แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์)",
      gpax: "เกรดเฉลี่ยสะสม GPAX 3.35"
    }
  ]
};
