// Generated public camera dictionary. Edit the parser, not this file.
window.SHOTS = [
  {
    "id": "001",
    "category": "景别",
    "categoryKey": "size",
    "keywordsZh": "大远景 / 极远景",
    "keywordsEn": "Extreme Long Shot（ELS）/ Extreme Wide Shot（EWS）",
    "title": "大远景 / 极远景 Extreme Long Shot（ELS）/ Extreme Wide Shot（EWS）",
    "effect": "环境占绝大部分，人物很小，尺度悬殊",
    "conditions": "建立世界、孤独或宏大尺度",
    "unsuitable": "微表情、关键手势需看清时",
    "prompts": {
      "seedance": {
        "text": "Extreme wide shot, the figure is small but readable within the vast environment.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Extreme wide shot, the figure is small but readable within the vast environment.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "固定白色焦距，后退相机；留能辨认人物的光区与轮廓",
    "confusable": "“广角”是焦段，极远景是取景范围",
    "relatedIds": [
      "026"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/001_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/size_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "001",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        0.9
      ],
      "camera_end": [
        0,
        -8,
        0.9
      ],
      "target_start": [
        0,
        0,
        0.9
      ],
      "target_end": [
        0,
        0,
        0.9
      ],
      "lens_start": 50,
      "lens_end": 50,
      "crop": {
        "enabled": true,
        "frameHeight": 18,
        "centerZ": 0.9,
        "reason": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
      },
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明极远景里主体尺度很小，可用于呈现环境和建立空间。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "002",
    "category": "景别",
    "categoryKey": "size",
    "keywordsZh": "远景 / 环境全景",
    "keywordsEn": "Long Shot（LS）/ Wide Shot（WS）",
    "title": "远景 / 环境全景 Long Shot（LS）/ Wide Shot（WS）",
    "effect": "人物及周围空间都可辨，环境关系明显",
    "conditions": "路线、人与建筑关系、行动全貌",
    "unsuitable": "细节决定剧情时",
    "prompts": {
      "seedance": {
        "text": "Wide shot of the full figure and the surrounding passage.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Wide shot of the full figure and the surrounding passage.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "后退相机，保留头脚、通路和环境参照",
    "confusable": "FS 与 WS 的裁切范围可分别表述，见下行",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/002_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/size_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "002",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        0.9
      ],
      "camera_end": [
        0,
        -8,
        0.9
      ],
      "target_start": [
        0,
        0,
        0.9
      ],
      "target_end": [
        0,
        0,
        0.9
      ],
      "lens_start": 50,
      "lens_end": 50,
      "crop": {
        "enabled": true,
        "frameHeight": 5,
        "centerZ": 0.9,
        "reason": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
      },
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
  },
  {
    "id": "003",
    "category": "景别",
    "categoryKey": "size",
    "keywordsZh": "全身景 / 全景",
    "keywordsEn": "Full Shot（FS）",
    "title": "全身景 / 全景 Full Shot（FS）",
    "effect": "人物从头到脚完整入画，仍以身体为重点",
    "conditions": "姿态、舞步、服装、悬空双脚",
    "unsuitable": "面部细微反应",
    "prompts": {
      "seedance": {
        "text": "Full shot, show the subject from head to toe with room for movement.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Full shot, show the subject from head to toe with room for movement.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "移相机控制占比；物体平面方块摆位，脚下留动作空间",
    "confusable": "“全身完整”不等于人物一定很小；与远景可交叠",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/003_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/size_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "003",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        0.9
      ],
      "camera_end": [
        0,
        -8,
        0.9
      ],
      "target_start": [
        0,
        0,
        0.9
      ],
      "target_end": [
        0,
        0,
        0.9
      ],
      "lens_start": 50,
      "lens_end": 50,
      "crop": {
        "enabled": true,
        "frameHeight": 2.3,
        "centerZ": 0.9,
        "reason": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
      },
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材以站立人形接近画框高度说明全身范围，并提醒术语裁切并非统一标准。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "004",
    "category": "景别",
    "categoryKey": "size",
    "keywordsZh": "中全景",
    "keywordsEn": "Medium Full Shot",
    "title": "中全景 Medium Full Shot",
    "effect": "通常膝部以上，能读较多肢体动作",
    "conditions": "站姿、走位、拿取动作",
    "unsuitable": "脚步接触或头脚全貌",
    "prompts": {
      "seedance": {
        "text": "Medium full shot, frame the subject from the knees upward.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Medium full shot, frame the subject from the knees upward.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "移相机到膝上裁切，检查动作后膝部不意外断开",
    "confusable": "Cowboy Shot 的大腿 / 枪套范围；边界随来源变化",
    "relatedIds": [
      "005"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/004_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/size_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "004",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。 代理没有膝关节，按原表膝上范围对应的主体平面高度裁切；身体裁切含义须结合文字读。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        0.9
      ],
      "camera_end": [
        0,
        -8,
        0.9
      ],
      "target_start": [
        0,
        0,
        0.9
      ],
      "target_end": [
        0,
        0,
        0.9
      ],
      "lens_start": 50,
      "lens_end": 50,
      "crop": {
        "enabled": true,
        "frameHeight": 1.6,
        "centerZ": 1.15,
        "reason": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
      },
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。 代理没有膝关节，按原表膝上范围对应的主体平面高度裁切；身体裁切含义须结合文字读。"
  },
  {
    "id": "005",
    "category": "景别",
    "categoryKey": "size",
    "keywordsZh": "牛仔景",
    "keywordsEn": "Cowboy Shot / American Shot",
    "title": "牛仔景 Cowboy Shot / American Shot",
    "effect": "通常大腿附近以上，脸与腰侧手势同框",
    "conditions": "掏物、持枪套、强调手与脸的关系",
    "unsuitable": "完整脚步、极细表情",
    "prompts": {
      "seedance": {
        "text": "Cowboy shot, frame from mid-thigh upward, keeping both hands visible.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Cowboy shot, frame from mid-thigh upward, keeping both hands visible.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "以大腿附近为下边界；摆手与道具，使其不贴画边",
    "confusable": "中景并不一定保留腰侧动作",
    "relatedIds": [
      "006"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/005_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/size_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "005",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。 代理没有大腿和枪套，按原表大腿上方范围对应的主体平面高度裁切；手与脸关系不由代理验证。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        0.9
      ],
      "camera_end": [
        0,
        -8,
        0.9
      ],
      "target_start": [
        0,
        0,
        0.9
      ],
      "target_end": [
        0,
        0,
        0.9
      ],
      "lens_start": 50,
      "lens_end": 50,
      "crop": {
        "enabled": true,
        "frameHeight": 1.5,
        "centerZ": 1.2,
        "reason": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
      },
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。 代理没有大腿和枪套，按原表大腿上方范围对应的主体平面高度裁切；手与脸关系不由代理验证。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材解释美式景别与保留牛仔武器的取景关系。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "006",
    "category": "景别",
    "categoryKey": "size",
    "keywordsZh": "中景",
    "keywordsEn": "Medium Shot（MS）",
    "title": "中景 Medium Shot（MS）",
    "effect": "通常腰部以上，动作与表情兼顾",
    "conditions": "对话、操作、稳定观察",
    "unsuitable": "大环境定位或非常细小细节",
    "prompts": {
      "seedance": {
        "text": "Medium shot, waist-up, with the hands and face clearly visible.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Medium shot, waist-up, with the hands and face clearly visible.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "粉色点放胸脸区域，移相机到腰上裁切",
    "confusable": "“中景”不是“中等焦距”",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/006_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/size_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "006",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        0.9
      ],
      "camera_end": [
        0,
        -8,
        0.9
      ],
      "target_start": [
        0,
        0,
        0.9
      ],
      "target_end": [
        0,
        0,
        0.9
      ],
      "lens_start": 50,
      "lens_end": 50,
      "crop": {
        "enabled": true,
        "frameHeight": 1.25,
        "centerZ": 1.3,
        "reason": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
      },
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
  },
  {
    "id": "007",
    "category": "景别",
    "categoryKey": "size",
    "keywordsZh": "中近景",
    "keywordsEn": "Medium Close-Up（MCU）",
    "title": "中近景 Medium Close-Up（MCU）",
    "effect": "肩胸至头部，反应更突出",
    "conditions": "说话、情绪变化，仍需少量身体语言",
    "unsuitable": "腰部动作或空间路线",
    "prompts": {
      "seedance": {
        "text": "Medium close-up, chest-up, keep the face and shoulders in frame.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Medium close-up, chest-up, keep the face and shoulders in frame.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "以胸肩为下缘；目标点放脸，检查头顶余量",
    "confusable": "不同来源写“头肩以上”或“保留肩胸”，需注明裁切",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/007_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/size_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "007",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        0.9
      ],
      "camera_end": [
        0,
        -8,
        0.9
      ],
      "target_start": [
        0,
        0,
        0.9
      ],
      "target_end": [
        0,
        0,
        0.9
      ],
      "lens_start": 50,
      "lens_end": 50,
      "crop": {
        "enabled": true,
        "frameHeight": 0.85,
        "centerZ": 1.5,
        "reason": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
      },
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材把中近景解释为胸部以上的人物取景。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "008",
    "category": "景别",
    "categoryKey": "size",
    "keywordsZh": "近景 / 面部特写",
    "keywordsEn": "Close-Up（CU）",
    "title": "近景 / 面部特写 Close-Up（CU）",
    "effect": "脸或单个物体占主要画面，背景退居次要",
    "conditions": "微表情、读信反应、产品信息",
    "unsuitable": "尚未建立人物位置时连续使用",
    "prompts": {
      "seedance": {
        "text": "Close-up of the face, eyes sharp, only a small amount of shoulder visible.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Close-up of the face, eyes sharp, only a small amount of shoulder visible.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "粉色点吸附面部；移相机收紧，必要时再改白色焦距",
    "confusable": "中文“近景”有时更宽；不要仅凭词名推定裁切",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/008_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/size_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "008",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        0.9
      ],
      "camera_end": [
        0,
        -8,
        0.9
      ],
      "target_start": [
        0,
        0,
        0.9
      ],
      "target_end": [
        0,
        0,
        0.9
      ],
      "lens_start": 50,
      "lens_end": 50,
      "crop": {
        "enabled": true,
        "frameHeight": 0.6,
        "centerZ": 1.6,
        "reason": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
      },
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明面部或相近尺度物体占据画框，并指出特写尺度依语境而定。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "009",
    "category": "景别",
    "categoryKey": "size",
    "keywordsZh": "面部紧特写",
    "keywordsEn": "Choker Shot",
    "title": "面部紧特写 Choker Shot",
    "effect": "脸部极紧，头顶 / 下颌可能裁掉，眼嘴变化突出",
    "conditions": "高强度反应、压迫、细微表演",
    "unsuitable": "需看肩颈姿态或自然宽松对话",
    "prompts": {
      "seedance": {
        "text": "Choker shot, tightly frame the face and emphasize the eyes and mouth.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Choker shot, tightly frame the face and emphasize the eyes and mouth.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "收紧取景，逐帧核对刻意裁切的位置",
    "confusable": "ECU 通常取一个局部；Choker 仍主要读脸",
    "relatedIds": [
      "010"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/009_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/size_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "009",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        0.9
      ],
      "camera_end": [
        0,
        -8,
        0.9
      ],
      "target_start": [
        0,
        0,
        0.9
      ],
      "target_end": [
        0,
        0,
        0.9
      ],
      "lens_start": 50,
      "lens_end": 50,
      "crop": {
        "enabled": true,
        "frameHeight": 0.48,
        "centerZ": 1.64,
        "reason": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
      },
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
  },
  {
    "id": "010",
    "category": "景别",
    "categoryKey": "size",
    "keywordsZh": "大特写 / 极近景",
    "keywordsEn": "Extreme Close-Up（ECU）",
    "title": "大特写 / 极近景 Extreme Close-Up（ECU）",
    "effect": "只剩眼睛、指尖、汗滴或物体细部",
    "conditions": "关键线索、触碰、纹理",
    "unsuitable": "初次交代空间、完整动作",
    "prompts": {
      "seedance": {
        "text": "Extreme close-up of the fingertip touching the surface.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Extreme close-up of the fingertip touching the surface.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "近距离摆相机，焦点落在关键接触处；检查近裁剪",
    "confusable": "“微距”是近距离成像方法，ECU 是画框范围",
    "relatedIds": [
      "032"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/010_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/size_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "010",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        0.9
      ],
      "camera_end": [
        0,
        -8,
        0.9
      ],
      "target_start": [
        0,
        0,
        0.9
      ],
      "target_end": [
        0,
        0,
        0.9
      ],
      "lens_start": 50,
      "lens_end": 50,
      "crop": {
        "enabled": true,
        "frameHeight": 0.2,
        "centerZ": 1.63,
        "reason": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。"
      },
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定真实透视机位和50mm光学焦距，通过有效画框等效数字裁切比较景别；不是移动相机或变焦。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明大特写常取身体局部或小物体细节。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "011",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "平视",
    "keywordsEn": "Eye-Level Shot",
    "title": "平视 Eye-Level Shot",
    "effect": "与眼睛高度相近，不明显俯仰，观看关系平等",
    "conditions": "对话、日常、客观观察",
    "unsuitable": "需要明显尺度压迫时",
    "prompts": {
      "seedance": {
        "text": "Eye-level shot, the camera is at the subject's eye height.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Eye-level shot, the camera is at the subject's eye height.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机升降到眼高，粉色点放眼部附近",
    "confusable": "正面是方位，平视是高度 / 俯仰关系",
    "relatedIds": [
      "017",
      "045"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/011_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "011",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "与眼睛高度相近，不明显俯仰，观看关系平等",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -5,
        1.62
      ],
      "camera_end": [
        0,
        -5,
        1.62
      ],
      "target_start": [
        0,
        0,
        1.62
      ],
      "target_end": [
        0,
        0,
        1.62
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "与眼睛高度相近，不明显俯仰，观看关系平等",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材介绍相机与主体高度相近的常用观看位置。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "012",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "俯拍",
    "keywordsEn": "High-Angle Shot",
    "title": "俯拍 High-Angle Shot",
    "effect": "高处向下看，露顶面，人物可能更弱小",
    "conditions": "空间布局、弱势处境、观察桌面",
    "unsuitable": "需要人物挺拔、眼神对等时",
    "prompts": {
      "seedance": {
        "text": "High-angle shot, looking down at the subject from above eye level.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "High-angle shot, looking down at the subject from above eye level.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "升高相机，粉色点放较低的主体；不加运动帧就是静态俯拍",
    "confusable": "Pedestal 是运动；高机位不自动等于俯拍",
    "relatedIds": [
      "037"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/012_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "012",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "高处向下看，露顶面，人物可能更弱小",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -5,
        5
      ],
      "camera_end": [
        0,
        -5,
        5
      ],
      "target_start": [
        0,
        0,
        0.9
      ],
      "target_end": [
        0,
        0,
        0.9
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "高处向下看，露顶面，人物可能更弱小",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材解释高角度机位及其可能表达的弱势关系，强调含义依语境而定。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "013",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "仰拍",
    "keywordsEn": "Low-Angle Shot",
    "title": "仰拍 Low-Angle Shot",
    "effect": "低处向上看，主体高大，背景多为天空 / 上方结构",
    "conditions": "英雄、敬畏、巨物",
    "unsuitable": "自然平等对话、近距离面部比例需中性时",
    "prompts": {
      "seedance": {
        "text": "Low-angle shot, looking upward at the shoulders and head.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Low-angle shot, looking upward at the shoulders and head.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "降低相机，把粉色点放高处肩头；留动作上方空间",
    "confusable": "Tilt Up 是从一个角度转到另一个角度",
    "relatedIds": [
      "045"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/013_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "013",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "低处向上看，主体高大，背景多为天空 / 上方结构",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -4,
        0.35
      ],
      "camera_end": [
        0,
        -4,
        0.35
      ],
      "target_start": [
        0,
        0,
        1.2
      ],
      "target_end": [
        0,
        0,
        1.2
      ],
      "lens_start": 40,
      "lens_end": 40,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "低处向上看，主体高大，背景多为天空 / 上方结构",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材解释低角度机位及其可能表达的力量关系，强调含义依语境而定。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "014",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "虫视 / 极低仰拍",
    "keywordsEn": "Worm's-Eye View",
    "title": "虫视 / 极低仰拍 Worm's-Eye View",
    "effect": "接近地面明显上仰，透视更夸张",
    "conditions": "巨物、运动脚步、建筑尺度",
    "unsuitable": "靠脸太近、需要完整路线",
    "prompts": {
      "seedance": {
        "text": "Worm's-eye view from near ground level, looking steeply upward.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Worm's-eye view from near ground level, looking steeply upward.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机贴近地面，目标点升高；检查地面穿模",
    "confusable": "普通低机位、贴地水平跟拍",
    "relatedIds": [
      "038"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/014_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "014",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "接近地面明显上仰，透视更夸张",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -2.6,
        0.09
      ],
      "camera_end": [
        0,
        -2.6,
        0.09
      ],
      "target_start": [
        0,
        0,
        1.5
      ],
      "target_end": [
        0,
        0,
        1.5
      ],
      "lens_start": 28,
      "lens_end": 28,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "接近地面明显上仰，透视更夸张"
  },
  {
    "id": "015",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "鸟瞰",
    "keywordsEn": "Bird's-Eye View",
    "title": "鸟瞰 Bird's-Eye View",
    "effect": "从高处俯览，人物成为尺度参照",
    "conditions": "地形、场地、行动路线",
    "unsuitable": "表情与私密交流",
    "prompts": {
      "seedance": {
        "text": "Bird's-eye view of the site, with the figure small in the layout.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Bird's-eye view of the site, with the figure small in the layout.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "把相机升高，目标点放场地中心，可斜俯看",
    "confusable": "Bird's-eye 也可用于正上方，应写明倾角",
    "relatedIds": [
      "016"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/015_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "015",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "从高处俯览，人物成为尺度参照",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        8,
        -10,
        13
      ],
      "camera_end": [
        8,
        -10,
        13
      ],
      "target_start": [
        0,
        2,
        0
      ],
      "target_end": [
        0,
        2,
        0
      ],
      "lens_start": 28,
      "lens_end": 28,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "从高处俯览，人物成为尺度参照"
  },
  {
    "id": "016",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "顶拍",
    "keywordsEn": "Overhead Shot / Top-Down / God's-Eye View",
    "title": "顶拍 Overhead Shot / Top-Down / God's-Eye View",
    "effect": "几乎垂直向下，地面布局呈图形化",
    "conditions": "桌面、路径、排列、棋盘式关系",
    "unsuitable": "高度与面部表情需要可读时",
    "prompts": {
      "seedance": {
        "text": "Top-down overhead shot, the camera looks vertically down at the table.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Top-down overhead shot, the camera looks vertically down at the table.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机放正上方、粉色点放正下方；检查朝向是否翻转",
    "confusable": "航拍可斜看，顶拍不要求空中飞行",
    "relatedIds": [
      "059"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/016_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "016",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "几乎垂直向下，地面布局呈图形化",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        0,
        9
      ],
      "camera_end": [
        0,
        0,
        9
      ],
      "target_start": [
        0,
        0,
        0
      ],
      "target_end": [
        0,
        0,
        0
      ],
      "lens_start": 35,
      "lens_end": 35,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "几乎垂直向下，地面布局呈图形化"
  },
  {
    "id": "017",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "正面",
    "keywordsEn": "Head-On / Frontal Shot",
    "title": "正面 Head-On / Frontal Shot",
    "effect": "面向主体正面，关系直接，容易形成对称",
    "conditions": "产品、肖像、迎面行动",
    "unsuitable": "想保留侧面体积或回避对视时",
    "prompts": {
      "seedance": {
        "text": "Frontal shot facing the subject directly.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Frontal shot facing the subject directly.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "移相机到正前方，目标点对主体；物体方块调整正面朝向",
    "confusable": "正面不保证平视，也不等于主体居中",
    "relatedIds": [
      "011",
      "086"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/017_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "017",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "面向主体正面，关系直接，容易形成对称",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -5,
        1.2
      ],
      "camera_end": [
        0,
        -5,
        1.2
      ],
      "target_start": [
        0,
        0,
        1.2
      ],
      "target_end": [
        0,
        0,
        1.2
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "面向主体正面，关系直接，容易形成对称",
    "references": [
      {
        "title": "Film Analysis: Mise-en-scene",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/mise-en-scene/",
        "note": "教材说明人物正面朝向相机的布置及其观看关系。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "018",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "斜侧面 / 四分之三视角",
    "keywordsEn": "Three-Quarter View",
    "title": "斜侧面 / 四分之三视角 Three-Quarter View",
    "effect": "正面与侧面同时可见，体积较易读",
    "conditions": "身体凝形、肖像、产品形体",
    "unsuitable": "必须比较两侧对称或纯剪影时",
    "prompts": {
      "seedance": {
        "text": "Three-quarter rear view of the curled figure, keep the head, back and knees readable.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Three-quarter rear view of the curled figure, keep the head, back and knees readable.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "把相机摆在侧后方；静态就不加帧，短弧才加相机帧",
    "confusable": "这里是方位角，不是三分法构图",
    "relatedIds": [
      "088"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/018_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "018",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "三分之四是机位方位；保持能读正面和侧面体积，不用三分法构图替代。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        4,
        -5,
        1.2
      ],
      "camera_end": [
        4,
        -5,
        1.2
      ],
      "target_start": [
        0,
        0,
        1.1
      ],
      "target_end": [
        0,
        0,
        1.1
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "三分之四是机位方位；保持能读正面和侧面体积，不用三分法构图替代。"
  },
  {
    "id": "019",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "侧面 / 侧脸",
    "keywordsEn": "Profile / Side View",
    "title": "侧面 / 侧脸 Profile / Side View",
    "effect": "主体侧轮廓、朝向和肢体关系突出",
    "conditions": "走路、悬浮姿态、侧面形体",
    "unsuitable": "依赖双眼细微变化时",
    "prompts": {
      "seedance": {
        "text": "Side view, keep the face silhouette and body outline separated from the background.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Side view, keep the face silhouette and body outline separated from the background.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机摆侧面；物体方块拉开前后轮廓",
    "confusable": "侧向跟拍必须有主体和相机同行",
    "relatedIds": [
      "038"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/019_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "019",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "主体侧轮廓、朝向和肢体关系突出",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        5,
        0,
        1.2
      ],
      "camera_end": [
        5,
        0,
        1.2
      ],
      "target_start": [
        0,
        0,
        1.1
      ],
      "target_end": [
        0,
        0,
        1.1
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "主体侧轮廓、朝向和肢体关系突出"
  },
  {
    "id": "020",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "背面",
    "keywordsEn": "Rear View / Back Shot",
    "title": "背面 Rear View / Back Shot",
    "effect": "观众与人物一起面向未知，脸被隐藏",
    "conditions": "探索、悬念、强调眼前环境",
    "unsuitable": "表情是主要信息",
    "prompts": {
      "seedance": {
        "text": "Rear view of the figure facing the doorway.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Rear view of the figure facing the doorway.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机放背后，粉色点指肩背 / 前方路径",
    "confusable": "Following Shot 还需要相机跟着走",
    "relatedIds": [
      "040"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/020_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "020",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "观众与人物一起面向未知，脸被隐藏",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        5,
        1.3
      ],
      "camera_end": [
        0,
        5,
        1.3
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "观众与人物一起面向未知，脸被隐藏"
  },
  {
    "id": "021",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "过肩",
    "keywordsEn": "Over-the-Shoulder（OTS）",
    "title": "过肩 Over-the-Shoulder（OTS）",
    "effect": "前景肩背与另一人物 / 对象同框，关系清楚",
    "conditions": "对话、观察、对峙、正反打",
    "unsuitable": "前景肩背挡住表情或重要道具",
    "prompts": {
      "seedance": {
        "text": "Over-the-shoulder shot, keep a soft foreground shoulder and the other person's face clear.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Over-the-shoulder shot, keep a soft foreground shoulder and the other person's face clear.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "用物体方块摆前景肩背，粉色点吸附后方主脸；检查轴线",
    "confusable": "POV 通常不以完整肩背作为第三人称参照",
    "relatedIds": [
      "022"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/021_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "021",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "前景 ACTOR_A 的肩背形体与后方 ACTOR_B 的正面同框；双方朝向彼此，保持同侧对话关系。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -0.45,
        -1.05,
        1.5
      ],
      "camera_end": [
        -0.45,
        -1.05,
        1.5
      ],
      "target_start": [
        2.2,
        1.25,
        1.5
      ],
      "target_end": [
        2.2,
        1.25,
        1.5
      ],
      "lens_start": 40,
      "lens_end": 40,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "turn_start": 2.0874914655571737,
          "turn_end": 2.0874914655571737
        },
        "ACTOR_B": {
          "turn_start": -1.0541011880326194,
          "turn_end": -1.0541011880326194
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "前景 ACTOR_A 的肩背形体与后方 ACTOR_B 的正面同框；双方朝向彼此，保持同侧对话关系。"
  },
  {
    "id": "022",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "主观视角",
    "keywordsEn": "Point-of-View（POV）/ First-Person View",
    "title": "主观视角 Point-of-View（POV）/ First-Person View",
    "effect": "看到角色此刻所看的内容，可露手而不露完整身体",
    "conditions": "代入、开门、驾驶、检查物体",
    "unsuitable": "想同时读角色自身表情",
    "prompts": {
      "seedance": {
        "text": "First-person view from the character's eye position, the hand enters the lower frame.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "First-person view from the character's eye position, the hand enters the lower frame.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "相机摆到角色眼位，物体方块摆手 / 道具",
    "confusable": "FPV 常指飞行路径；POV 可以静止",
    "relatedIds": [
      "060"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/022_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "022",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "机位位于代理眼位，隐藏自身遮挡；这是所见空间的主观视点，代理没有可入画的手。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        0.3,
        1.62
      ],
      "camera_end": [
        0,
        0.3,
        1.62
      ],
      "target_start": [
        2.2,
        1.25,
        1.45
      ],
      "target_end": [
        2.2,
        1.25,
        1.45
      ],
      "lens_start": 35,
      "lens_end": 35,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "机位位于代理眼位，隐藏自身遮挡；这是所见空间的主观视点，代理没有可入画的手。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材把主观镜头解释为接近角色眼睛位置的观看视角。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "023",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "主观移动",
    "keywordsEn": "Moving POV / POV Walk",
    "title": "主观移动 Moving POV / POV Walk",
    "effect": "主观视点随角色行进，带适量步伐起伏",
    "conditions": "穿走廊、探索、旅行代入",
    "unsuitable": "路线不清、频繁无缘由滚转",
    "prompts": {
      "seedance": {
        "text": "POV walking along the corridor, with slight step sway and a clear forward path.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "POV walking along the corridor, with slight step sway and a clear forward path.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机与角色走位同向加帧，目标点沿视线前进",
    "confusable": "角色在画里走动的普通跟拍",
    "relatedIds": [
      "038"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/023.mp4",
      "poster": "media/023_poster.webp",
      "diagram": "media/023_diagram.mp4",
      "sideDiagram": "media/023_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "023",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "眼位随路线前进并带小幅步伐起伏；与固定视点 POV 区分。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -0.6,
        -6,
        1.6
      ],
      "camera_end": [
        -0.6,
        -1,
        1.6
      ],
      "target_start": [
        -0.6,
        2,
        1.6
      ],
      "target_end": [
        -0.6,
        7,
        1.6
      ],
      "lens_start": 35,
      "lens_end": 35,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "walk"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "眼位随路线前进并带小幅步伐起伏；与固定视点 POV 区分。"
  },
  {
    "id": "024",
    "category": "机位角度",
    "categoryKey": "angle",
    "keywordsZh": "荷兰角",
    "keywordsEn": "Dutch Angle / Canted Angle",
    "title": "荷兰角 Dutch Angle / Canted Angle",
    "effect": "地平线和立柱整体倾斜，制造失衡",
    "conditions": "紧张、迷乱、追逐、喜剧失衡",
    "unsuitable": "稳定阅读、端正建筑展示",
    "prompts": {
      "seedance": {
        "text": "Dutch angle, keep the frame tilted slightly while the subject remains readable.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Dutch angle, keep the frame tilted slightly while the subject remains readable.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "拖青色滚转手柄到所需角度；保持该角度就是荷兰角",
    "confusable": "Roll 是角度随时间变化；Tilt 是向上 / 下看",
    "relatedIds": [
      "045",
      "047"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/024_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "024",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "地平线和立柱整体倾斜，制造失衡",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40,
      "lens_end": 40,
      "roll_start": 0.3490658503988659,
      "roll_end": 0.3490658503988659
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "地平线和立柱整体倾斜，制造失衡",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材解释倾斜画框及其产生的不稳定感。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "025",
    "category": "焦距",
    "categoryKey": "lens",
    "keywordsZh": "超广角",
    "keywordsEn": "Ultra-Wide（约 14–20mm）",
    "title": "超广角 Ultra-Wide（约 14–20mm）",
    "effect": "视野很宽；近机位时近大远小明显，边缘易拉伸",
    "conditions": "巨物、狭窄室内、强纵深",
    "unsuitable": "近距离中性面部肖像",
    "prompts": {
      "seedance": {
        "text": "14mm ultra-wide lens, emphasize the near foreground and towering background.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "14mm ultra-wide lens, emphasize the near foreground and towering background.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "白色手柄调短焦；移动相机决定透视夸张程度",
    "confusable": "超广角不必是鱼眼；桶形畸变不是短焦必然结果",
    "relatedIds": [
      "031"
    ],
    "media": {
      "status": "ready",
      "kind": "lens",
      "video": "",
      "poster": "media/025_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/lens_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "lens",
      "recipe": "025",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "16mm 超广角专项；共享对照另列 24/35/50/85/135mm，各自移动距离保持主体大小。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -2.56,
        1
      ],
      "camera_end": [
        0,
        -2.56,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 16,
      "lens_end": 16,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "16mm 超广角专项；共享对照另列 24/35/50/85/135mm，各自移动距离保持主体大小。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材讨论极广角边缘形变与空间呈现；不为固定毫米数提供统一分类标准。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "026",
    "category": "焦距",
    "categoryKey": "lens",
    "keywordsZh": "广角 / 广角空间",
    "keywordsEn": "Wide-Angle / Wide Angle Space（约 24–35mm）",
    "title": "广角 / 广角空间 Wide-Angle / Wide Angle Space（约 24–35mm）",
    "effect": "环境纳入较多，近处参照突出",
    "conditions": "环境叙事、多人、穿行、空间层次",
    "unsuitable": "想把远景压到主体背后",
    "prompts": {
      "seedance": {
        "text": "24–35mm wide-angle lens, retain the foreground frame and deep corridor.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "24–35mm wide-angle lens, retain the foreground frame and deep corridor.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "短焦配较近机位，摆前景、中景、远景参照",
    "confusable": "Wide Shot 是景别；广角也能拍局部",
    "relatedIds": [
      "002"
    ],
    "media": {
      "status": "ready",
      "kind": "lens",
      "video": "",
      "poster": "media/026_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/lens_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "lens",
      "recipe": "026",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "24mm 广角专项；维持主体大小的对比必须同步改变机位距离。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -3.84,
        1
      ],
      "camera_end": [
        0,
        -3.84,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 24,
      "lens_end": 24,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "24mm 广角专项；维持主体大小的对比必须同步改变机位距离。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明短焦距广角取景与前后空间关系的呈现。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "027",
    "category": "焦距",
    "categoryKey": "lens",
    "keywordsZh": "标准焦段",
    "keywordsEn": "Normal / Standard Lens（约 40–60mm）",
    "title": "标准焦段 Normal / Standard Lens（约 40–60mm）",
    "effect": "常用于较克制的空间比例，视野适中",
    "conditions": "日常、对话、较中性的形体",
    "unsuitable": "需要极宽环境或远距离细节",
    "prompts": {
      "seedance": {
        "text": "50mm standard lens, eye-level medium shot with natural-looking proportions.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "50mm standard lens, eye-level medium shot with natural-looking proportions.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "白色手柄设焦距，再用相机距离确定景别",
    "confusable": "“50mm 等于人眼”是简化比喻，不是保证",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "lens",
      "video": "",
      "poster": "media/027_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/lens_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "lens",
      "recipe": "027",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "50mm 标准焦段专项；不宣称等同人眼或零畸变。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8.0,
        1
      ],
      "camera_end": [
        0,
        -8.0,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "50mm 标准焦段专项；不宣称等同人眼或零畸变。"
  },
  {
    "id": "028",
    "category": "焦距",
    "categoryKey": "lens",
    "keywordsZh": "人像中长焦",
    "keywordsEn": "Portrait / Short Telephoto（约 75–105mm）",
    "title": "人像中长焦 Portrait / Short Telephoto（约 75–105mm）",
    "effect": "同等主体占比时机位较远，面部较平，背景容易集中",
    "conditions": "肖像、反应、细节",
    "unsuitable": "小室内、需要大幅环境交代",
    "prompts": {
      "seedance": {
        "text": "85mm portrait lens, close-up, keep the eyes clear and background soft.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "85mm portrait lens, close-up, keep the eyes clear and background soft.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "调长白色焦距并后退相机；粉色点放眼部",
    "confusable": "焦距不直接决定景深，光圈和距离也参与",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "lens",
      "video": "",
      "poster": "media/028_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/lens_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "lens",
      "recipe": "028",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "85mm 人像中长焦专项；距离调整后主体大小与焦距总览一致。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -13.6,
        1
      ],
      "camera_end": [
        0,
        -13.6,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 85,
      "lens_end": 85,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "85mm 人像中长焦专项；距离调整后主体大小与焦距总览一致。"
  },
  {
    "id": "029",
    "category": "焦距",
    "categoryKey": "lens",
    "keywordsZh": "长焦 / 长焦压缩",
    "keywordsEn": "Telephoto / Telephoto Compression（约 135–200mm）",
    "title": "长焦 / 长焦压缩 Telephoto / Telephoto Compression（约 135–200mm）",
    "effect": "同等主体大小、远机位时，背景相对更大，远近距离看着更挤",
    "conditions": "对峙、人群锁人、窥视、排列压缩",
    "unsuitable": "想突出前后视差、近距离大空间",
    "prompts": {
      "seedance": {
        "text": "Telephoto compression, keep the subject the same frame size while distant objects appear closer behind.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Telephoto compression, keep the subject the same frame size while distant objects appear closer behind.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "后退相机，同时增大白色焦距，比较同等人物大小的两幅",
    "confusable": "只在原地变焦不会改变机位透视；长焦不必自动虚化",
    "relatedIds": [
      "054"
    ],
    "media": {
      "status": "ready",
      "kind": "lens",
      "video": "",
      "poster": "media/029_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/lens_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "lens",
      "recipe": "029",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "135mm 长焦压缩专项；和广角用不同距离、相同主体大小比对背景关系。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -21.6,
        1
      ],
      "camera_end": [
        0,
        -21.6,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 135,
      "lens_end": 135,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "135mm 长焦压缩专项；和广角用不同距离、相同主体大小比对背景关系。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材展示长焦取景下背景与主体显得贴近的空间压缩效果。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "030",
    "category": "焦距",
    "categoryKey": "lens",
    "keywordsZh": "超长焦",
    "keywordsEn": "Super Telephoto（约 200mm 以上）",
    "title": "超长焦 Super Telephoto（约 200mm 以上）",
    "effect": "很窄视野；远距离观察，细微角度漂移影响大",
    "conditions": "远处细节、监视感、隔空间观察",
    "unsuitable": "狭小场景、快速多主体动作",
    "prompts": {
      "seedance": {
        "text": "200mm telephoto view from a distant position, hold the subject steadily.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "200mm telephoto view from a distant position, hold the subject steadily.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "长焦配远机位，目标点稳定锁主体",
    "confusable": "Stabilized Telephoto 是稳定要求，不是另一焦段",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "lens",
      "video": "",
      "poster": "media/030_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/lens_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "lens",
      "recipe": "030",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "250mm 超长焦专项；视野窄、远距离，不能用135mm总览替代本条。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -40.0,
        1
      ],
      "camera_end": [
        0,
        -40.0,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 250,
      "lens_end": 250,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "250mm 超长焦专项；视野窄、远距离，不能用135mm总览替代本条。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材讨论极长焦镜头的取景与空间压缩；不规定超长焦的统一毫米阈值。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "031",
    "category": "焦距",
    "categoryKey": "lens",
    "keywordsZh": "鱼眼",
    "keywordsEn": "Fisheye Lens",
    "title": "鱼眼 Fisheye Lens",
    "effect": "直线明显弯曲，球面式空间，边缘夸张",
    "conditions": "滑板、窥视、喜剧、心理变形",
    "unsuitable": "真实端正建筑、产品形状准确",
    "prompts": {
      "seedance": {
        "text": "Fisheye lens, curved straight lines and exaggerated edge perspective.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Fisheye lens, curved straight lines and exaggerated edge perspective.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "仅缩短白色焦距不能模拟鱼眼；需另选支持的鱼眼投影，当前手柄支持未经验证",
    "confusable": "普通超广角仍可保持直线，非鱼眼",
    "relatedIds": [
      "025"
    ],
    "media": {
      "status": "ready",
      "kind": "lens",
      "video": "",
      "poster": "media/031_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/lens_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "031",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "后期径向变形模拟鱼眼外观，是近似；不是实际鱼眼相机投影或真实镜头光学。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -3.84,
        1
      ],
      "camera_end": [
        0,
        -3.84,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 24,
      "lens_end": 24,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "optical": "radial_fisheye_approximation"
    },
    "review": {
      "uncertain": true,
      "reason": "后期径向变形模拟鱼眼外观，是近似；不是实际鱼眼相机投影或真实镜头光学。；普通透视渲染后的径向变形近似；不是等距/等立体角鱼眼光学投影。"
    },
    "demoNote": "后期径向变形模拟鱼眼外观，是近似；不是实际鱼眼相机投影或真实镜头光学。 普通透视渲染后的径向变形近似；不是等距/等立体角鱼眼光学投影。"
  },
  {
    "id": "032",
    "category": "焦距",
    "categoryKey": "lens",
    "keywordsZh": "微距",
    "keywordsEn": "Macro / Macro Close-Up",
    "title": "微距 Macro / Macro Close-Up",
    "effect": "微小表面占满画面，细小移动和焦点差更明显",
    "conditions": "水滴、材质、食品、精密产品",
    "unsuitable": "还需交代整体位置",
    "prompts": {
      "seedance": {
        "text": "Macro close-up of the droplets, keep the surface detail sharp.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Macro close-up of the droplets, keep the surface detail sharp.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机靠近小物体，粉色点吸附细节；检查近裁剪、景深和模型精度",
    "confusable": "“微距”并非某个固定 mm；微距滑动另见运镜",
    "relatedIds": [
      "067"
    ],
    "media": {
      "status": "ready",
      "kind": "lens",
      "video": "",
      "poster": "media/032_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [
        "media/lens_overview.webp"
      ],
      "reason": ""
    },
    "render": {
      "mode": "lens",
      "recipe": "032",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "使用代理几何局部示意近距放大；无法据此验证真实微距镜头、材质纹理或成像质量。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -1.05,
        0.8,
        1.04
      ],
      "camera_end": [
        -1.05,
        0.8,
        1.04
      ],
      "target_start": [
        -1.05,
        2.5,
        1.04
      ],
      "target_end": [
        -1.05,
        2.5,
        1.04
      ],
      "lens_start": 100,
      "lens_end": 100,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "focus": {
        "enabled": true,
        "f_stop": 1.0,
        "distance_start": 1.38,
        "distance_end": 1.38
      }
    },
    "review": {
      "uncertain": true,
      "reason": "使用代理几何局部示意近距放大；无法据此验证真实微距镜头、材质纹理或成像质量。"
    },
    "demoNote": "使用代理几何局部示意近距放大；无法据此验证真实微距镜头、材质纹理或成像质量。"
  },
  {
    "id": "033",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "固定镜头",
    "keywordsEn": "Static / Locked-Off Shot",
    "title": "固定镜头 Static / Locked-Off Shot",
    "effect": "取景稳定，变化来自主体",
    "conditions": "克制表演、等待、稳定阅读",
    "unsuitable": "关键动作走出画外而无人重构图",
    "prompts": {
      "seedance": {
        "text": "固定机位、朝向与焦距，人物自然变化。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera holds a static shot as the subject moves.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "相机、目标点、焦距都不加运动帧；主体可加帧",
    "confusable": "定格把主体时间也停住；锁主体允许相机动",
    "relatedIds": [
      "077"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/033.mp4",
      "poster": "media/033_poster.webp",
      "diagram": "media/033_diagram.mp4",
      "sideDiagram": "media/033_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "engine": "BLENDER_WORKBENCH",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "hold_start_frames": [
        1,
        12
      ],
      "hold_end_frames": [
        85,
        96
      ],
      "camera_start": [
        0,
        -8,
        1.0
      ],
      "target_start": [
        0,
        0,
        1.0
      ],
      "target_end": [
        0,
        0,
        1.0
      ],
      "lens_start": 40,
      "roll_start": 0,
      "roll_end": 0,
      "easing": "smoothstep, motion frames 13–84",
      "shared_actor_motion": "small yaw gesture；identical in all five shots",
      "kind": "static",
      "camera_end": [
        0,
        -8,
        1.0
      ],
      "lens_end": 40,
      "note": "保留已确认的第一阶段主视频、海报和首中末拼图；只增加动态俯视与侧视机位示意。",
      "mode": "video",
      "recipe": "033",
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "preserve_main": true
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "保留已确认的第一阶段主视频、海报和首中末拼图；只增加动态俯视与侧视机位示意。"
  },
  {
    "id": "034",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "移动摄影镜头·推近",
    "keywordsEn": "Dolly Shot / Dolly In / Push In",
    "title": "移动摄影镜头·推近 Dolly Shot / Dolly In / Push In",
    "effect": "视点接近，主体放大，前后景关系改变",
    "conditions": "靠近反应、强调线索",
    "unsuitable": "只想均匀收紧画框",
    "prompts": {
      "seedance": {
        "text": "沿直线缓缓推近，焦距不变，最后停稳。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera pushes in with small amplitude at slow speed toward the folded letter in her hands.",
        "evidence": [
          "官方指南"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "给相机沿观看轴前进加帧；白色焦距保持；检查目标点是否引入转向",
    "confusable": "Zoom In 改焦距；白色手柄不是推轨手柄",
    "relatedIds": [
      "054"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/034.mp4",
      "poster": "media/034_poster.webp",
      "diagram": "media/034_diagram.mp4",
      "sideDiagram": "media/034_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "engine": "BLENDER_WORKBENCH",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "hold_start_frames": [
        1,
        12
      ],
      "hold_end_frames": [
        85,
        96
      ],
      "camera_start": [
        0,
        -8,
        1.0
      ],
      "target_start": [
        0,
        0,
        1.0
      ],
      "target_end": [
        0,
        0,
        1.0
      ],
      "lens_start": 40,
      "roll_start": 0,
      "roll_end": 0,
      "easing": "smoothstep, motion frames 13–84",
      "shared_actor_motion": "small yaw gesture；identical in all five shots",
      "kind": "dolly_in",
      "camera_end": [
        0,
        -4.5,
        1.0
      ],
      "lens_end": 40,
      "note": "保留第一阶段3.5米推近和固定40mm的主视频；只升级示意图。",
      "mode": "video",
      "recipe": "034",
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "preserve_main": true
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "保留第一阶段3.5米推近和固定40mm的主视频；只升级示意图。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明移动摄影机向前行进的取景变化，与改变焦距的变焦分开讨论。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "035",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "拉远",
    "keywordsEn": "Dolly Out / Pull Out / Pull Back",
    "title": "拉远 Dolly Out / Pull Out / Pull Back",
    "effect": "视点后退，主体变小，环境逐步展开",
    "conditions": "孤独、处境揭示、细节回整体",
    "unsuitable": "重要表情需一直可读",
    "prompts": {
      "seedance": {
        "text": "从特写后退至带环境的全景，焦距稳定。",
        "evidence": [],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera pulls out slowly, revealing the surrounding hall.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "相机后退加帧；焦距保持，摆近景边界作参照",
    "confusable": "Zoom Out；从近景硬切到远景",
    "relatedIds": [
      "054"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/035.mp4",
      "poster": "media/035_poster.webp",
      "diagram": "media/035_diagram.mp4",
      "sideDiagram": "media/035_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "035",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "后退机位、固定焦距；主体缩小且遮挡和透视关系改变。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -12,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "后退机位、固定焦距；主体缩小且遮挡和透视关系改变。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明移动摄影机向后行进，并展示轨道或载具形成的后退视点。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "036",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "横移",
    "keywordsEn": "Truck Left / Right / Lateral Move",
    "title": "横移 Truck Left / Right / Lateral Move",
    "effect": "整机横走，近景经过更快",
    "conditions": "横向空间、橱窗、层次",
    "unsuitable": "只需原地转看另一侧",
    "prompts": {
      "seedance": {
        "text": "人物站定，整机右移，朝向与焦距不变。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera trucks right while the subject stays still.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "相机左右位置加帧；保持朝向，必要时目标点同向移，避免自动变成环绕",
    "confusable": "Pan；如果主体同行则可同时是跟拍",
    "relatedIds": [
      "038",
      "044"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/036.mp4",
      "poster": "media/036_poster.webp",
      "diagram": "media/036_diagram.mp4",
      "sideDiagram": "media/036_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "engine": "BLENDER_WORKBENCH",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "hold_start_frames": [
        1,
        12
      ],
      "hold_end_frames": [
        85,
        96
      ],
      "camera_start": [
        0,
        -8,
        1.0
      ],
      "target_start": [
        0,
        0,
        1.0
      ],
      "target_end": [
        2,
        0,
        1.0
      ],
      "lens_start": 40,
      "roll_start": 0,
      "roll_end": 0,
      "easing": "smoothstep, motion frames 13–84",
      "shared_actor_motion": "small yaw gesture；identical in all five shots",
      "kind": "truck_right",
      "camera_end": [
        2,
        -8,
        1.0
      ],
      "lens_end": 40,
      "note": "保留第一阶段纯横移；主体站定，目标同向补偿保持朝向。",
      "mode": "video",
      "recipe": "036",
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "preserve_main": true
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "保留第一阶段纯横移；主体站定，目标同向补偿保持朝向。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材展示相机沿轨道侧向移动的横移镜头。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "037",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "升降",
    "keywordsEn": "Pedestal Up / Down",
    "title": "升降 Pedestal Up / Down",
    "effect": "整机高度改变，顶面 / 遮挡关系变化",
    "conditions": "越过桌沿或矮墙、跟起身",
    "unsuitable": "想只上看楼顶",
    "prompts": {
      "seedance": {
        "text": "整机垂直升高，朝向与焦距不变，露出桌面。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The whole camera pedestals upward without tilting.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "相机高度加帧；要固定朝向时目标点作相同高度补偿",
    "confusable": "Tilt Up 转朝向；Crane 可有弧线、横向位移",
    "relatedIds": [
      "042",
      "045",
      "058"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/037.mp4",
      "poster": "media/037_poster.webp",
      "diagram": "media/037_diagram.mp4",
      "sideDiagram": "media/037_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "037",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "整机高度和目标点高度同时改变，保持观看朝向；与045共用首帧。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        4
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        4
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "整机高度和目标点高度同时改变，保持观看朝向；与045共用首帧。"
  },
  {
    "id": "038",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "跟拍",
    "keywordsEn": "Tracking / Follow Shot / Side Tracking",
    "title": "跟拍 Tracking / Follow Shot / Side Tracking",
    "effect": "主体与相机同行，主体大小位置大致稳定，背景经过",
    "conditions": "陪伴、行走、运动展示",
    "unsuitable": "主体不动、纯扫描空间",
    "prompts": {
      "seedance": {
        "text": "侧面同向并行跟拍，保持距离、高度、焦距。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera tracks alongside the moving subject.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "主体平面方块与相机同向加帧，目标点随主体；检查速度匹配",
    "confusable": "横移是路径，跟拍是相机与主体关系，可同时成立",
    "relatedIds": [
      "036"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/038.mp4",
      "poster": "media/038_poster.webp",
      "diagram": "media/038_diagram.mp4",
      "sideDiagram": "media/038_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "038",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "与036共用首帧；相机与主体同速横移4米，形成跟拍。036主体站定且相机横移2米，路径长度不同须结合机位示意读。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        4,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        4,
        0,
        1
      ],
      "lens_start": 40,
      "lens_end": 40,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "start": [
            0,
            0,
            0
          ],
          "end": [
            4,
            0,
            0
          ],
          "turn_start": -0.12,
          "turn_end": 1.5707963267948966
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "与036共用首帧；相机与主体同速横移4米，形成跟拍。036主体站定且相机横移2米，路径长度不同须结合机位示意读。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明跟随主体保持其入画的镜头，并区分跟随功能与具体运动方式。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "039",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "前方引导",
    "keywordsEn": "Leading Shot",
    "title": "前方引导 Leading Shot",
    "effect": "相机在人物前方后退，人物迎面走来",
    "conditions": "旅程、对话、看表情的行走",
    "unsuitable": "后退路线不安全 / 不清晰",
    "prompts": {
      "seedance": {
        "text": "The camera retreats ahead of the walking subject, keeping a steady distance.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera retreats ahead of the walking subject, keeping a steady distance.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机与主体同向位移，目标点锁脸；预留相机退行路线",
    "confusable": "拉远会增大两者距离，引导通常维持距离",
    "relatedIds": [
      "035"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/039.mp4",
      "poster": "media/039_poster.webp",
      "diagram": "media/039_diagram.mp4",
      "sideDiagram": "media/039_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "039",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "相机在主体前方退行，主体迎面行进；二者距离基本保持。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -5,
        1
      ],
      "camera_end": [
        0,
        -9,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        -4,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "start": [
            0,
            0,
            0
          ],
          "end": [
            0,
            -4,
            0
          ]
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "相机在主体前方退行，主体迎面行进；二者距离基本保持。"
  },
  {
    "id": "040",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "背后跟随",
    "keywordsEn": "Following Shot",
    "title": "背后跟随 Following Shot",
    "effect": "从后方陪主体进入未知",
    "conditions": "探索、悬念、路线代入",
    "unsuitable": "主要信息是脸部反应",
    "prompts": {
      "seedance": {
        "text": "Follow from behind, maintaining distance and showing the route ahead.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Follow from behind, maintaining distance and showing the route ahead.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机在主体后方同速移动，目标点指肩背 / 路线",
    "confusable": "静态背面镜头、原地摇摄追人",
    "relatedIds": [
      "020",
      "044"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/040.mp4",
      "poster": "media/040_poster.webp",
      "diagram": "media/040_diagram.mp4",
      "sideDiagram": "media/040_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "040",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "从主体背后同速行进；身体背面、通路和背景继续变化。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -5,
        1.3
      ],
      "camera_end": [
        0,
        0,
        1.3
      ],
      "target_start": [
        0,
        0,
        1.3
      ],
      "target_end": [
        0,
        5,
        1.3
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "start": [
            0,
            0,
            0
          ],
          "end": [
            0,
            5,
            0
          ],
          "turn_start": 3.141592653589793,
          "turn_end": 3.141592653589793
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "从主体背后同速行进；身体背面、通路和背景继续变化。"
  },
  {
    "id": "041",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "环绕",
    "keywordsEn": "Orbit Shot / Circular Path",
    "title": "环绕 Orbit Shot / Circular Path",
    "effect": "相机绕主体换方位，主体不同侧面与背景显露",
    "conditions": "造型、关键时刻、周围关系",
    "unsuitable": "主体自转替代相机运动、无理由绕满圈",
    "prompts": {
      "seedance": {
        "text": "相机从正前沿圆弧绕到右侧，距离 / 高度 / 焦距保持，主体不转身。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera arcs around the stationary subject, staying aimed at it.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "相机沿圆周加帧，粉色点保持主体；注明从哪边到哪边及弧度",
    "confusable": "Roll 转画框；转台转的是物体；180° 环绕不是轴线规则",
    "relatedIds": [
      "047",
      "100"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/041.mp4",
      "poster": "media/041_poster.webp",
      "diagram": "media/041_diagram.mp4",
      "sideDiagram": "media/041_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "041",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "与044共用起幅；相机位置沿恒半径弧线换方位，主体与背景显露不同侧面。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "orbit",
        "center": [
          0,
          0,
          1
        ],
        "radius_start": 8,
        "radius_end": 8,
        "angle_start": 0,
        "angle_end": 6.283185307179586,
        "height_start": 1,
        "height_end": 1
      },
      "actors": {
        "ACTOR_A": {
          "turn_start": -0.12,
          "turn_end": -0.12
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "与044共用起幅；相机位置沿恒半径弧线换方位，主体与背景显露不同侧面。"
  },
  {
    "id": "042",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "弧线",
    "keywordsEn": "Arc Shot / Arc Path",
    "title": "弧线 Arc Shot / Arc Path",
    "effect": "沿一小段曲线换视点，不必完整绕圈",
    "conditions": "局部形体、侧后到侧前揭示",
    "unsuitable": "简单直移足够、曲线遮掉主体",
    "prompts": {
      "seedance": {
        "text": "The camera moves along a short arc from the rear side to the front side.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera moves along a short arc from the rear side to the front side.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "相机沿弧线放起、中、落关键帧，目标点指叙事重点",
    "confusable": "来源常并称 Arc / Orbit；弧线可含高度变化，不必恒半径",
    "relatedIds": [
      "041"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/042.mp4",
      "poster": "media/042_poster.webp",
      "diagram": "media/042_diagram.mp4",
      "sideDiagram": "media/042_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "042",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "短弧线换视点，保持目标主体，不声称完成整圈。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "orbit",
        "center": [
          0,
          0,
          1
        ],
        "radius_start": 8,
        "radius_end": 8,
        "angle_start": 0,
        "angle_end": 1.0471975511965976,
        "height_start": 1,
        "height_end": 1
      },
      "actors": {
        "ACTOR_A": {
          "turn_start": -0.12,
          "turn_end": -0.12
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "短弧线换视点，保持目标主体，不声称完成整圈。"
  },
  {
    "id": "043",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "视差",
    "keywordsEn": "Parallax",
    "title": "视差 Parallax",
    "effect": "机位换位使远近层错开，近处移动更快",
    "conditions": "空间深度、遮挡揭示、旅行",
    "unsuitable": "只有平面背景无纵深参照",
    "prompts": {
      "seedance": {
        "text": "近门框、中人物、远墙，相机横移，三层错开。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Move laterally so the near frame passes faster than the distant wall.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "平面方块摆前中后三层；相机横移 / 环绕，焦距保持",
    "confusable": "独立滤镜、物体不同速度自转",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/043.mp4",
      "poster": "media/043_poster.webp",
      "diagram": "media/043_diagram.mp4",
      "sideDiagram": "media/043_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "043",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "近柱、中景人物、远楼三层，横移使近层划过更快；不是独立滤镜。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        2,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        2,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "近柱、中景人物、远楼三层，横移使近层划过更快；不是独立滤镜。"
  },
  {
    "id": "044",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "水平摇摄",
    "keywordsEn": "Pan Left / Right",
    "title": "水平摇摄 Pan Left / Right",
    "effect": "原地左右转看，新环境从一侧进来",
    "conditions": "视线引导、搜寻、横向揭示",
    "unsuitable": "想产生明显近远遮挡变化",
    "prompts": {
      "seedance": {
        "text": "守住机位向右摇，高度 / 焦距不变，地平线水平。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera pans right from one fixed position.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "相机位置固定，粉色目标点水平改方向加帧；距离尽量保持",
    "confusable": "Truck 横移；对象在屏幕里滑动",
    "relatedIds": [
      "036"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/044.mp4",
      "poster": "media/044_poster.webp",
      "diagram": "media/044_diagram.mp4",
      "sideDiagram": "media/044_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "engine": "BLENDER_WORKBENCH",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "hold_start_frames": [
        1,
        12
      ],
      "hold_end_frames": [
        85,
        96
      ],
      "camera_start": [
        0,
        -8,
        1.0
      ],
      "target_start": [
        0,
        0,
        1.0
      ],
      "target_end": [
        0,
        0,
        1.0
      ],
      "lens_start": 40,
      "roll_start": 0,
      "roll_end": 0,
      "easing": "smoothstep, motion frames 13–84",
      "shared_actor_motion": "small yaw gesture；identical in all five shots",
      "kind": "pan_right",
      "camera_end": [
        0,
        -8,
        1.0
      ],
      "lens_end": 40,
      "target_mode": "pan_arc",
      "pan_radians": 0.24,
      "pan_radius": 8,
      "note": "保留第一阶段固定机位的目标点水平弧线摇摄；只升级动态示意。",
      "mode": "video",
      "recipe": "044",
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "preserve_main": true,
      "motion": {
        "type": "pan",
        "yaw_start": 0,
        "yaw_end": 0.24,
        "pitch_start": 0,
        "pitch_end": 0,
        "radius": 8,
        "easing": "smooth"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "保留第一阶段固定机位的目标点水平弧线摇摄；只升级动态示意。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材解释相机机身左右转动，使取景在水平方向扫描空间。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "045",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "俯仰摇摄",
    "keywordsEn": "Tilt Up / Down",
    "title": "俯仰摇摄 Tilt Up / Down",
    "effect": "原地向上 / 下转看",
    "conditions": "鞋到脸、楼体尺度、沿上下线索揭示",
    "unsuitable": "想越过前景顶部看背后",
    "prompts": {
      "seedance": {
        "text": "机位高度不变，从鞋上摇到脸和头顶空间。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera tilts upward from the shoes to the face.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "相机固定，粉色点上下改方向加帧",
    "confusable": "Pedestal 升降；Dutch 是滚转",
    "relatedIds": [
      "024",
      "037",
      "047"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/045.mp4",
      "poster": "media/045_poster.webp",
      "diagram": "media/045_diagram.mp4",
      "sideDiagram": "media/045_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "045",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "相机位置不动，目标点仰角改变；与037同首帧但不改变观看高度。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "pan",
        "yaw_start": 0,
        "yaw_end": 0,
        "pitch_start": 0,
        "pitch_end": 0.34,
        "radius": 8
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "相机位置不动，目标点仰角改变；与037同首帧但不改变观看高度。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材解释相机在固定支撑上向上或向下转动。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "046",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "甩镜",
    "keywordsEn": "Whip Pan / Swish Pan",
    "title": "甩镜 Whip Pan / Swish Pan",
    "effect": "极快转向跨过中间空间，落点重新清楚",
    "conditions": "突发声响、喜剧反应、运动转场",
    "unsuitable": "落点没有阅读时间、长时间乱晃",
    "prompts": {
      "seedance": {
        "text": "快速右甩到杯子，停稳看清。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera whip-pans right, then settles on the fallen cup.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "固定相机，目标点在短帧段大幅换向，落点留足帧数",
    "confusable": "随机 Shake；甩镜可一镜内完成，并非必然剪切",
    "relatedIds": [
      "068"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/046.mp4",
      "poster": "media/046_poster.webp",
      "diagram": "media/046_diagram.mp4",
      "sideDiagram": "media/046_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "046",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "极短运动段快转目标方向，落点停稳；不是随机震动。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "pan",
        "yaw_start": -0.26,
        "yaw_end": 0.23349957551440234,
        "pitch_start": 0,
        "pitch_end": 0,
        "radius": 8,
        "easing": "fast"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "极短运动段快转目标方向，落点停稳；不是随机震动。 Workbench 5个子帧平均合成曝光，示意运动模糊；不是EEVEE物理运动模糊。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明极快的水平转向会短暂产生模糊条纹。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "047",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "滚转",
    "keywordsEn": "Roll / Barrel Roll",
    "title": "滚转 Roll / Barrel Roll",
    "effect": "画框绕观看轴旋转，天地倾斜 / 倒置",
    "conditions": "失衡、眩晕、超现实、短时强调",
    "unsuitable": "文字阅读、需要稳定方向的长段",
    "prompts": {
      "seedance": {
        "text": "位置、朝向、焦距不变，绕观看轴滚转。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera rolls clockwise around the lens axis.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "青色滚转手柄在起、终帧设角度；大角度要检查中间旋转路径",
    "confusable": "荷兰角是某个倾斜状态；360° 环绕位置会换",
    "relatedIds": [
      "024",
      "041"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/047.mp4",
      "poster": "media/047_poster.webp",
      "diagram": "media/047_diagram.mp4",
      "sideDiagram": "media/047_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "047",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "位置、目标点和焦距固定，仅画框绕光轴滚转。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 6.283185307179586
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "位置、目标点和焦距固定，仅画框绕光轴滚转。"
  },
  {
    "id": "048",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "揭示摇镜",
    "keywordsEn": "Reveal Pan",
    "title": "揭示摇镜 Reveal Pan",
    "effect": "原地摇到起幅看不见的新信息",
    "conditions": "期待到答案、危险 / 人物揭示",
    "unsuitable": "答案一开始已在画里",
    "prompts": {
      "seedance": {
        "text": "顺人物视线右摇，窗边人最后才完整入画。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Pan right to reveal the waiting person, initially outside the frame.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "粉色点从线索转向答案加帧；检查答案何时入画",
    "confusable": "普通 Pan 是动作，Reveal 额外规定信息顺序",
    "relatedIds": [
      "044"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/048.mp4",
      "poster": "media/048_poster.webp",
      "diagram": "media/048_diagram.mp4",
      "sideDiagram": "media/048_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "048",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "将答案主体放在起幅外，水平摇摄后才显露；开头已经可见答案就不符合本条。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "pan",
        "yaw_start": -0.34,
        "yaw_end": 0.23349957551440234,
        "pitch_start": 0,
        "pitch_end": 0,
        "radius": 8,
        "easing": "smooth"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "将答案主体放在起幅外，水平摇摄后才显露；开头已经可见答案就不符合本条。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材举例说明摇镜可揭示原先未入画的人物，改变场景含义。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "049",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "倾斜揭示",
    "keywordsEn": "Tilt Reveal",
    "title": "倾斜揭示 Tilt Reveal",
    "effect": "用上 / 下摇把局部接到上下文",
    "conditions": "帽子到脸到屋檐、鞋到人物",
    "unsuitable": "要让地平线侧歪",
    "prompts": {
      "seedance": {
        "text": "从湿帽子上摇到脸，再露屋檐，焦距不变。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Tilt up from the wet hat to the face, then reveal the dripping roof.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机固定，粉色点按上下三个落点加帧",
    "confusable": "“倾斜”在此是俯仰，不是青色滚转",
    "relatedIds": [
      "045",
      "047"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/049.mp4",
      "poster": "media/049_poster.webp",
      "diagram": "media/049_diagram.mp4",
      "sideDiagram": "media/049_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "049",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "固定低机位、3米距离与50mm焦距，由主体低处局部向上揭示头部及上方空间；仰角由-0.2变为0.22弧度，动作是俯仰。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -3,
        0.8
      ],
      "camera_end": [
        0,
        -3,
        0.8
      ],
      "target_start": [
        0,
        0,
        0.2
      ],
      "target_end": [
        0,
        0,
        0.2
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "pan",
        "yaw_start": 0,
        "yaw_end": 0,
        "pitch_start": -0.2,
        "pitch_end": 0.22,
        "radius": 3
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定低机位、3米距离与50mm焦距，由主体低处局部向上揭示头部及上方空间；仰角由-0.2变为0.22弧度，动作是俯仰。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明俯仰摇摄逐步带入画外空间，形成对新信息的期待。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "050",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "追逐",
    "keywordsEn": "Chase Shot",
    "title": "追逐 Chase Shot",
    "effect": "快速随主体行进，距离有起伏，路线连续",
    "conditions": "赶车、逃跑、迫切相见",
    "unsuitable": "目标和路线总消失、方向跳变",
    "prompts": {
      "seedance": {
        "text": "后侧追随人物和帽子，转弯仍带住路线。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Chase from behind, keeping the subject, target and route readable.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "主体与相机连续加帧，目标点跟主角；弯道加中间帧",
    "confusable": "普通跟拍并不必然紧迫，Shake 不是追逐路径",
    "relatedIds": [
      "038",
      "068"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/050.mp4",
      "poster": "media/050_poster.webp",
      "diagram": "media/050_diagram.mp4",
      "sideDiagram": "media/050_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "050",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "主体与相机沿有拐点的可读路线追随，可少量扰动，不靠乱晃代表追逐。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -5,
        1.3
      ],
      "camera_end": [
        1,
        1,
        1.3
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        1,
        6,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "easing": "accelerate"
      },
      "actors": {
        "ACTOR_A": {
          "start": [
            0,
            0,
            0
          ],
          "end": [
            1,
            6,
            0
          ],
          "turn_start": 3.141592653589793,
          "turn_end": 3.141592653589793
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "主体与相机沿有拐点的可读路线追随，可少量扰动，不靠乱晃代表追逐。"
  },
  {
    "id": "051",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "甩镜变焦",
    "keywordsEn": "Whip Pan + Zoom",
    "title": "甩镜变焦 Whip Pan + Zoom",
    "effect": "先转向找目标，再收紧细节",
    "conditions": "突然发现、证据 / 喜剧强调",
    "unsuitable": "把两动作无顺序堆在一起",
    "prompts": {
      "seedance": {
        "text": "先右甩到钥匙，随后变焦收紧标记，机位不前冲。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "First whip-pan to the key, then zoom in on its mark.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "先给目标点快换向加帧，到位后才给白色焦距加帧",
    "confusable": "Crash Zoom 不含甩镜；同一时刻做不是此例顺序",
    "relatedIds": [
      "046",
      "055"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/051.mp4",
      "poster": "media/051_poster.webp",
      "diagram": "media/051_diagram.mp4",
      "sideDiagram": "media/051_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "051",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "先快速摇到目标，再改变焦距收紧；顺序不能同时堆叠。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 30,
      "lens_end": 65,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "pan",
        "yaw_start": -0.26,
        "yaw_end": 0.23349957551440234,
        "pitch_start": 0,
        "pitch_end": 0,
        "radius": 8,
        "easing": "fast"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "先快速摇到目标，再改变焦距收紧；顺序不能同时堆叠。 Workbench 5个子帧平均合成曝光，示意运动模糊；不是EEVEE物理运动模糊。"
  },
  {
    "id": "052",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "环绕变焦",
    "keywordsEn": "Orbit Zoom",
    "title": "环绕变焦 Orbit Zoom",
    "effect": "背景方位改变，取景同时收紧 / 打开",
    "conditions": "决定形成、压力集中、造型细节",
    "unsuitable": "路径和主体占比都没交代",
    "prompts": {
      "seedance": {
        "text": "恒半径绕到侧面，同时增加焦距，中景收紧上身。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Orbit at a constant radius while increasing focal length.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机圆弧加帧，同时白色焦距加帧，目标点锁主体",
    "confusable": "螺旋移动改变距离；Dolly Zoom 通常前后走",
    "relatedIds": [
      "057",
      "066"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/052.mp4",
      "poster": "media/052_poster.webp",
      "diagram": "media/052_diagram.mp4",
      "sideDiagram": "media/052_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "052",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "恒半径环绕同时改变焦距，背景方位和主体占比都变化；不是螺旋移位。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 30,
      "lens_end": 60,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "orbit",
        "center": [
          0,
          0,
          1
        ],
        "radius_start": 6,
        "radius_end": 6,
        "angle_start": -0.35,
        "angle_end": 0.95,
        "height_start": 1.3,
        "height_end": 1.3
      },
      "actors": {
        "ACTOR_A": {
          "turn_start": -0.12,
          "turn_end": -0.12
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "恒半径环绕同时改变焦距，背景方位和主体占比都变化；不是螺旋移位。"
  },
  {
    "id": "053",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "子弹时间",
    "keywordsEn": "Bullet Time",
    "title": "子弹时间 Bullet Time",
    "effect": "主体动作近乎冻结，视点继续绕行，随后恢复",
    "conditions": "扣篮、接住物体、决定性瞬间",
    "unsuitable": "只做慢动作、只转人物而背景不变",
    "prompts": {
      "seedance": {
        "text": "接触姿态近乎冻结，视点绕向侧面，随后动作继续。",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Freeze the action briefly while the camera orbits, then resume it.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "主体 / 道具动作帧暂时保持；相机仍沿弧线加帧，再接续动作",
    "confusable": "固定镜头、定格、普通慢动作",
    "relatedIds": [
      "033",
      "074",
      "077"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/053.mp4",
      "poster": "media/053_poster.webp",
      "diagram": "media/053_diagram.mp4",
      "sideDiagram": "media/053_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "053",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "代理动作暂缓或保持，机位继续绕行，随后主体恢复动作；不能只绕静止人物。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "orbit",
        "center": [
          0,
          0,
          1
        ],
        "radius_start": 8,
        "radius_end": 8,
        "angle_start": 0,
        "angle_end": 3.141592653589793,
        "height_start": 1,
        "height_end": 1
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "代理动作暂缓或保持，机位继续绕行，随后主体恢复动作；不能只绕静止人物。"
  },
  {
    "id": "054",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "变焦",
    "keywordsEn": "Zoom In / Out",
    "title": "变焦 Zoom In / Out",
    "effect": "机位不动，焦距改变，取景收紧 / 打开",
    "conditions": "有意观察、收紧重点、纪实强调",
    "unsuitable": "希望靠近时看到新的遮挡关系",
    "prompts": {
      "seedance": {
        "text": "The camera stays in place while the lens zooms in.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera stays in place while the lens zooms in.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "只给白色焦距加帧；相机位置 / 朝向固定",
    "confusable": "中文“推”有歧义；变焦不是转焦",
    "relatedIds": [
      "081"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/054.mp4",
      "poster": "media/054_poster.webp",
      "diagram": "media/054_diagram.mp4",
      "sideDiagram": "media/054_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "engine": "BLENDER_WORKBENCH",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "hold_start_frames": [
        1,
        12
      ],
      "hold_end_frames": [
        85,
        96
      ],
      "camera_start": [
        0,
        -8,
        1.0
      ],
      "target_start": [
        0,
        0,
        1.0
      ],
      "target_end": [
        0,
        0,
        1.0
      ],
      "lens_start": 40,
      "roll_start": 0,
      "roll_end": 0,
      "easing": "smoothstep, motion frames 13–84",
      "shared_actor_motion": "small yaw gesture；identical in all five shots",
      "kind": "zoom_in",
      "camera_end": [
        0,
        -8,
        1.0
      ],
      "lens_end": 71.11111111111111,
      "note": "保留第一阶段固定机位40→71.111mm变焦主视频；只升级示意。",
      "mode": "video",
      "recipe": "054",
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "preserve_main": true
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "保留第一阶段固定机位40→71.111mm变焦主视频；只升级示意。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明变焦通过改变镜头焦距调整画面范围。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "055",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "快速变焦",
    "keywordsEn": "Crash Zoom / Snap Zoom",
    "title": "快速变焦 Crash Zoom / Snap Zoom",
    "effect": "很短时间大幅收紧或打开，冲击强",
    "conditions": "惊讶、笑点、MV 拍点",
    "unsuitable": "克制自然表演、细节无法读清",
    "prompts": {
      "seedance": {
        "text": "A sudden crash zoom frames the face, then holds.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "A sudden crash zoom frames the face, then holds.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "白色焦距在短帧段改变，之后保持",
    "confusable": "“急推”有来源指 Zoom，有来源指快速 Dolly，明确驱动",
    "relatedIds": [
      "034",
      "054"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/055.mp4",
      "poster": "media/055_poster.webp",
      "diagram": "media/055_diagram.mp4",
      "sideDiagram": "media/055_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "055",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "固定机位短时大幅改变焦距，给落幅停留。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 30,
      "lens_end": 70,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "easing": "fast"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定机位短时大幅改变焦距，给落幅停留。"
  },
  {
    "id": "056",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "脉冲变焦",
    "keywordsEn": "Pulse Zoom",
    "title": "脉冲变焦 Pulse Zoom",
    "effect": "固定机位反复小幅收放",
    "conditions": "节奏性压力、音乐强调",
    "unsuitable": "稳定阅读、需要恒定尺度",
    "prompts": {
      "seedance": {
        "text": "Small repeated zoom pulses from one fixed position.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Small repeated zoom pulses from one fixed position.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "白色焦距按重复拍点设往复帧",
    "confusable": "呼吸感机位、镜头呼吸 Focus Breathing",
    "relatedIds": [
      "085"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/056.mp4",
      "poster": "media/056_poster.webp",
      "diagram": "media/056_diagram.mp4",
      "sideDiagram": "media/056_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "056",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "固定机位反复小幅收放焦距；区别于对焦平面游移。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "pulse_zoom"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定机位反复小幅收放焦距；区别于对焦平面游移。"
  },
  {
    "id": "057",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "滑动变焦",
    "keywordsEn": "Dolly Zoom / Hitchcock Zoom / Vertigo Effect",
    "title": "滑动变焦 Dolly Zoom / Hitchcock Zoom / Vertigo Effect",
    "effect": "主体大小近似不变，背景透视变化，空间不安",
    "conditions": "震惊、顿悟、失衡",
    "unsuitable": "只想普通推近、没有纵深参照",
    "prompts": {
      "seedance": {
        "text": "相机后退同时增加焦距，保持头肩大小，让背景变大贴近。",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Dolly backward while zooming in, holding the subject's frame size.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机距离与白色焦距同时加帧；沿视线移动时可按焦距 / 主体距离比近似恒定，再逐帧校正",
    "confusable": "相机前进应减短焦距；Orbit Zoom、只变焦",
    "relatedIds": [
      "052",
      "054"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/057.mp4",
      "poster": "media/057_poster.webp",
      "diagram": "media/057_diagram.mp4",
      "sideDiagram": "media/057_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "057",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "与034/054共用首帧；机位后退同时加长焦距，保持主体大小，背景相对变大。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -12,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40,
      "lens_end": 60,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "dolly_zoom"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "与034/054共用首帧；机位后退同时加长焦距，保持主体大小，背景相对变大。",
    "references": [
      {
        "title": "Vertigo: Hitchcock’s Acrophobic Vision",
        "publisher": "American Society of Cinematographers",
        "url": "https://theasc.com/article/flashback-vertigo/",
        "note": "协会文章确认《迷魂记》以向前变焦配合向后移动相机改变透视感。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "058",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "摇臂 / 吊臂",
    "keywordsEn": "Crane / Jib / Crane Sweep",
    "title": "摇臂 / 吊臂 Crane / Jib / Crane Sweep",
    "effect": "机位沿带高度变化的弧线升起 / 降下，可横扫",
    "conditions": "人到场地、舞台 / 城市宏大揭示",
    "unsuitable": "只需几厘米直上直下",
    "prompts": {
      "seedance": {
        "text": "The camera rises backward in a broad arc, revealing the whole theatre.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera rises backward in a broad arc, revealing the whole theatre.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机沿后上方弧线加帧，目标点保持主体 / 场地；不必搭实体机械臂",
    "confusable": "有词典把 Crane 简写垂直升降；Pedestal 明确整机垂直，路径另写",
    "relatedIds": [
      "037"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/058.mp4",
      "poster": "media/058_poster.webp",
      "diagram": "media/058_diagram.mp4",
      "sideDiagram": "media/058_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "058",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "机位后上方走宽弧而非单纯垂直升降；主体到场地逐步揭示。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "path",
        "points": [
          [
            0,
            -8,
            1
          ],
          [
            1,
            -6,
            3
          ],
          [
            0,
            -3,
            7
          ]
        ],
        "target_points": [
          [
            0,
            0,
            1
          ],
          [
            0,
            0,
            1
          ],
          [
            0,
            1,
            0
          ]
        ]
      },
      "diagram_fit": {
        "diagram": {
          "projected_width": 11.161905828863382,
          "projected_height": 8.054240599274635,
          "aspect": 1.7777777777777777,
          "ortho_scale": 16.896007537841797,
          "margin_factor": 1.18
        },
        "side_diagram": {
          "projected_width": 12.726340083628891,
          "projected_height": 8.536114864051342,
          "aspect": 1.7777777777777777,
          "ortho_scale": 17.906871795654297,
          "margin_factor": 1.18
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "机位后上方走宽弧而非单纯垂直升降；主体到场地逐步揭示。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材解释摇臂让相机离地并在空中改变位置。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "059",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "航拍 / 无人机",
    "keywordsEn": "Aerial / Drone Shot",
    "title": "航拍 / 无人机 Aerial / Drone Shot",
    "effect": "空中斜俯或顶视，地理与人物尺度明显",
    "conditions": "海岸、道路、场地路线",
    "unsuitable": "面部反应、室内局部操作",
    "prompts": {
      "seedance": {
        "text": "空中斜俯沿海岸前进，交代道路和汽车。",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "An aerial camera glides along the coast, keeping the road visible.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机高位摆放，沿路线位置加帧；粉色点锁路线 / 车",
    "confusable": "航拍是机位 / 支撑，不必运动；顶拍也可室内固定",
    "relatedIds": [
      "016"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/059.mp4",
      "poster": "media/059_poster.webp",
      "diagram": "media/059_diagram.mp4",
      "sideDiagram": "media/059_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "059",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "高位斜俯沿场地前进；展示尺度与路线，不靠航拍一词强行规定运动。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        8,
        -14,
        11
      ],
      "camera_end": [
        5,
        0,
        11
      ],
      "target_start": [
        0,
        4,
        0
      ],
      "target_end": [
        0,
        10,
        0
      ],
      "lens_start": 24,
      "lens_end": 24,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "高位斜俯沿场地前进；展示尺度与路线，不靠航拍一词强行规定运动。"
  },
  {
    "id": "060",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "FPV / 第一人称飞行",
    "keywordsEn": "FPV Drone",
    "title": "FPV / 第一人称飞行 FPV Drone",
    "effect": "沿路线高速穿行，转弯可侧倾，代入强",
    "conditions": "峡谷、建筑穿越、赛事、游戏",
    "unsuitable": "路线不连贯、无意义连续翻滚",
    "prompts": {
      "seedance": {
        "text": "从入口贴地飞入，穿空隙、右转、桥下掠过，最后升起。",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Fly through the gap, bank slightly right, then rise beyond the bridge.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机按路径起、中、落加帧，目标点沿路线领先；青色只加所需侧倾",
    "confusable": "FPV 不必翻滚；只写“飞酷一点”没有路线",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/060.mp4",
      "poster": "media/060_poster.webp",
      "diagram": "media/060_diagram.mp4",
      "sideDiagram": "media/060_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "060",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "沿明确空隙穿行，转弯有适量侧倾；不以持续翻滚代替路线。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 24,
      "lens_end": 24,
      "roll_start": 0.0,
      "roll_end": -0.15,
      "motion": {
        "type": "path",
        "points": [
          [
            -4,
            -10,
            2
          ],
          [
            -2,
            -5,
            1.2
          ],
          [
            0,
            2,
            1.2
          ],
          [
            4,
            7,
            2.5
          ]
        ],
        "target_points": [
          [
            -2,
            -5,
            1.2
          ],
          [
            0,
            2,
            1.2
          ],
          [
            4,
            7,
            2.5
          ],
          [
            4,
            13,
            2.5
          ]
        ]
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "沿明确空隙穿行，转弯有适量侧倾；不以持续翻滚代替路线。"
  },
  {
    "id": "061",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "俯冲",
    "keywordsEn": "Dive / Nosedive",
    "title": "俯冲 Dive / Nosedive",
    "effect": "从高位沿向下路线快速接近低处目标，速度与纵深明显",
    "conditions": "天空到地面、峡谷、巨物到细节的落点揭示",
    "unsuitable": "不清楚落点、把俯冲写成仅向下摇头",
    "prompts": {
      "seedance": {
        "text": "Dive from above the canyon toward the visible path, then level out.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Dive from above the canyon toward the visible path, then level out.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机高→低的位置加帧，目标点沿落点提前引导；需要侧倾时才动青色滚转，检查不穿地面",
    "confusable": "Tilt Down 只转方向；Pedestal Down 是垂直升降，Dive 可斜冲",
    "relatedIds": [
      "037",
      "045"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/061.mp4",
      "poster": "media/061_poster.webp",
      "diagram": "media/061_diagram.mp4",
      "sideDiagram": "media/061_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "061",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "高→低的斜向位移接近落点再平缓收束；不是原地向下摇。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -10,
        12
      ],
      "camera_end": [
        0,
        -3,
        1.1
      ],
      "target_start": [
        0,
        0,
        0.8
      ],
      "target_end": [
        0,
        0,
        0.8
      ],
      "lens_start": 24,
      "lens_end": 24,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "easing": "accelerate"
      },
      "diagram_fit": {
        "diagram": {
          "projected_width": 14.276640750697773,
          "projected_height": 8.50407612323761,
          "aspect": 1.7777777777777777,
          "ortho_scale": 17.839662551879883,
          "margin_factor": 1.18
        },
        "side_diagram": {
          "projected_width": 14.719969677031038,
          "projected_height": 14.885550037026405,
          "aspect": 1.7777777777777777,
          "ortho_scale": 31.22657585144043,
          "margin_factor": 1.18
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "高→低的斜向位移接近落点再平缓收束；不是原地向下摇。"
  },
  {
    "id": "062",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "穿越空间",
    "keywordsEn": "Fly-Through / Through Space / Doorway Pass / Tunnel Pass / Crowd Pass",
    "title": "穿越空间 Fly-Through / Through Space / Doorway Pass / Tunnel Pass / Crowd Pass",
    "effect": "沿真实门洞、窗口、隧道或人群空隙连接空间",
    "conditions": "导览、探索、空间转场",
    "unsuitable": "没有足够空间、路径穿过实体",
    "prompts": {
      "seedance": {
        "text": "Move continuously through the doorway into the room, then reveal the far exit.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Move continuously through the doorway into the room, then reveal the far exit.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机沿空隙加帧，中间帧检查门框与主体穿模",
    "confusable": "Pass-Through Objects 可是超现实穿实体；需要分别说明",
    "relatedIds": [
      "063"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/062.mp4",
      "poster": "media/062_poster.webp",
      "diagram": "media/062_diagram.mp4",
      "sideDiagram": "media/062_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "062",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "沿新建可读门洞开口连续穿行，避免相机穿过实体。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -10,
        1.4
      ],
      "camera_end": [
        0,
        4,
        1.4
      ],
      "target_start": [
        0,
        3,
        1.4
      ],
      "target_end": [
        0,
        16,
        1.4
      ],
      "lens_start": 24,
      "lens_end": 24,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "start": [
            -1.2,
            0.5,
            0
          ],
          "end": [
            -1.2,
            0.5,
            0
          ]
        },
        "ACTOR_B": {
          "start": [
            1.2,
            2,
            0
          ],
          "end": [
            1.2,
            2,
            0
          ]
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "沿新建可读门洞开口连续穿行，避免相机穿过实体。"
  },
  {
    "id": "063",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "穿过实体",
    "keywordsEn": "Pass-Through Objects",
    "title": "穿过实体 Pass-Through Objects",
    "effect": "穿入表面 / 障碍再来到其后空间，可为不可能视点",
    "conditions": "超现实转场、微观进入、概念展示",
    "unsuitable": "需要严格真实摄影物理",
    "prompts": {
      "seedance": {
        "text": "Move toward the visible surface and pass through it into the space beyond.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Move toward the visible surface and pass through it into the space beyond.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机穿过代理表面加帧，只是路径演示；最终透明 / 转场需另设计",
    "confusable": "普通 Fly-Through 走的是开口；不要默认所有“穿越”都穿墙",
    "relatedIds": [
      "062"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/063.mp4",
      "poster": "media/063_poster.webp",
      "diagram": "media/063_diagram.mp4",
      "sideDiagram": "media/063_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "063",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "穿入表面 / 障碍再来到其后空间，可为不可能视点；门厅走廊场景，穿墙瞬间用 3 帧剖面填屏",
      "engine": "WORKBENCH",
      "preserve_main": false
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "穿入表面 / 障碍再来到其后空间，可为不可能视点"
  },
  {
    "id": "064",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "掠过",
    "keywordsEn": "Fly-By / Ground Pass / Pass Over",
    "title": "掠过 Fly-By / Ground Pass / Pass Over",
    "effect": "接近、越过，再把主体留在身后；贴地 / 越顶是路径高度变体",
    "conditions": "速度、场地巡游、改变观看侧",
    "unsuitable": "需要一直读主体反应",
    "prompts": {
      "seedance": {
        "text": "Fly past the subject on its left, then continue toward the far gate.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Fly past the subject on its left, then continue toward the far gate.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机跨过主体侧面或上方加帧，目标点决定越过后继续看谁",
    "confusable": "Orbit 保持围绕对象；不能仅以人物出画判断掠过",
    "relatedIds": [
      "041"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/064.mp4",
      "poster": "media/064_poster.webp",
      "diagram": "media/064_diagram.mp4",
      "sideDiagram": "media/064_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "064",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "从主体一侧越过并继续前行，主体留在身后；不保持环绕关系。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -6,
        -4,
        2.8
      ],
      "camera_end": [
        6,
        -4,
        2.8
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 28,
      "lens_end": 28,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "从主体一侧越过并继续前行，主体留在身后；不保持环绕关系。"
  },
  {
    "id": "065",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "斜向移 / 斜退",
    "keywordsEn": "Diagonal Path",
    "title": "斜向移 / 斜退 Diagonal Path",
    "effect": "同时改变左右与前后距离，层次自然展开",
    "conditions": "全身接环境",
    "unsuitable": "必须纯横移或恒定主体大小",
    "prompts": {
      "seedance": {
        "text": "Move diagonally backward, keeping the full figure readable as the space opens.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Move diagonally backward, keeping the full figure readable as the space opens.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机横向 + 前后位置加帧，可带少量高度变化；白色焦距保持",
    "confusable": "不是仅让二维物体沿斜线出画",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/065.mp4",
      "poster": "media/065_poster.webp",
      "diagram": "media/065_diagram.mp4",
      "sideDiagram": "media/065_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "065",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "机位同时横向与后退，固定焦距，完整主体缩小而环境展开。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        4,
        -13,
        3
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        1,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "机位同时横向与后退，固定焦距，完整主体缩小而环境展开。"
  },
  {
    "id": "066",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "螺旋",
    "keywordsEn": "Spiral Path",
    "title": "螺旋 Spiral Path",
    "effect": "绕行同时改变半径，越来越近 / 远",
    "conditions": "包围、聚焦、打开关系",
    "unsuitable": "要恒定观察距离",
    "prompts": {
      "seedance": {
        "text": "Spiral inward around the stationary subject, with focal length unchanged.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Spiral inward around the stationary subject, with focal length unchanged.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机不同半径的弧线加帧，粉色点锁主体",
    "confusable": "Orbit Zoom 改焦距而非半径",
    "relatedIds": [
      "052"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/066.mp4",
      "poster": "media/066_poster.webp",
      "diagram": "media/066_diagram.mp4",
      "sideDiagram": "media/066_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "066",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "绕主体同时改变半径，固定焦距；与052区分。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "orbit",
        "center": [
          0,
          0,
          1
        ],
        "radius_start": 8,
        "radius_end": 3.7,
        "angle_start": 0,
        "angle_end": 3.141592653589793,
        "height_start": 1,
        "height_end": 2.8
      },
      "actors": {
        "ACTOR_A": {
          "turn_start": -0.12,
          "turn_end": -0.12
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "绕主体同时改变半径，固定焦距；与052区分。"
  },
  {
    "id": "067",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "微距滑动",
    "keywordsEn": "Macro Slide / Macro Slider / Tabletop Path",
    "title": "微距滑动 Macro Slide / Macro Slider / Tabletop Path",
    "effect": "近距小幅位移，表面前后层变化明显",
    "conditions": "产品纹理、珠宝、桌面操作",
    "unsuitable": "大幅移动、无法维持焦点",
    "prompts": {
      "seedance": {
        "text": "Slide a short distance across the surface, keeping the key detail in focus.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Slide a short distance across the surface, keeping the key detail in focus.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机毫米 / 厘米级位移加帧；粉色点吸附关键表面",
    "confusable": "Slider 是支撑方式，动作仍可是横移 / 推拉",
    "relatedIds": [
      "036"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/067.mp4",
      "poster": "media/067_poster.webp",
      "diagram": "media/067_diagram.mp4",
      "sideDiagram": "media/067_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "067",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "近距小幅横移扫描代理球面的3条经线、2条纬线和2个立体小标记；只说明近物扫动，不代表真实微距纹理、镜头光学或成像质量。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -1.3,
        1.5,
        1.05
      ],
      "camera_end": [
        -0.8,
        1.5,
        1.05
      ],
      "target_start": [
        -1.3,
        2.5,
        1.05
      ],
      "target_end": [
        -0.8,
        2.5,
        1.05
      ],
      "lens_start": 85,
      "lens_end": 85,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "focus": {
        "enabled": true,
        "f_stop": 2.8,
        "distance_start": 0.72,
        "distance_end": 0.72
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "近距小幅横移扫描代理球面的3条经线、2条纬线和2个立体小标记；只说明近物扫动，不代表真实微距纹理、镜头光学或成像质量。"
  },
  {
    "id": "068",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "手持",
    "keywordsEn": "Handheld / Shoulder-Cam Drift",
    "title": "手持 Handheld / Shoulder-Cam Drift",
    "effect": "轻微漂移、步伐起伏、反应惯性，现场感强",
    "conditions": "纪实、争吵、克制紧张、追逐",
    "unsuitable": "清晰文字阅读、极稳产品展示",
    "prompts": {
      "seedance": {
        "text": "克制手持，从左后方随人走，保留轻微脚步起伏。",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "The camera tracks the subject and shakes slightly.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "主轨迹外给相机 / 目标点少量偏移帧；先确定跟随路线",
    "confusable": "手持是质感，不自动说明路径；轻微晃也不等于运镜正确",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/068.mp4",
      "poster": "media/068_poster.webp",
      "diagram": "media/068_diagram.mp4",
      "sideDiagram": "media/068_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "068",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "主路线之外保留轻微漂移和反应惯性；没有随机大幅滚转。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "handheld"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "主路线之外保留轻微漂移和反应惯性；没有随机大幅滚转。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明手持支撑带来的微晃、灵活性与不稳定观感。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "069",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "稳定器",
    "keywordsEn": "Steadicam / Gimbal / Stabilized Shot",
    "title": "稳定器 Steadicam / Gimbal / Stabilized Shot",
    "effect": "移动平顺，抑制无意震动，可保留惯性",
    "conditions": "连续跟随、餐厅 / 走廊导览",
    "unsuitable": "需要故意强失衡或冲击",
    "prompts": {
      "seedance": {
        "text": "Smooth stabilized follow, maintaining distance with restrained natural inertia.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Smooth stabilized follow, maintaining distance with restrained natural inertia.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机、目标点关键帧平顺接续；不要额外随机加抖动",
    "confusable": "Steadicam 与 Gimbal 是不同设备，画面要求可相近",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/069.mp4",
      "poster": "media/069_poster.webp",
      "diagram": "media/069_diagram.mp4",
      "sideDiagram": "media/069_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "069",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "主体由地面(0,0)行进到(4,3)米，相机同量平顺跟随；落幅机位为(4,-5,1.3)米。可与068比较扰动方式，二者路线不同。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        4,
        -5,
        1.3
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        4,
        3,
        1.3
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "start": [
            0,
            0,
            0
          ],
          "end": [
            4,
            3,
            0
          ],
          "turn_start": -0.12,
          "turn_end": -0.12
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "主体由地面(0,0)行进到(4,3)米，相机同量平顺跟随；落幅机位为(4,-5,1.3)米。可与068比较扰动方式，二者路线不同。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材讨论稳定装置如何获得平顺跟拍；设备本身不规定唯一运动路线。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "070",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "身体固定机",
    "keywordsEn": "Snorricam / Body-Mounted",
    "title": "身体固定机 Snorricam / Body-Mounted",
    "effect": "相机相对脸 / 躯干固定，背景随人移动晃荡",
    "conditions": "主观焦虑、奔跑反应、身体体验",
    "unsuitable": "自然旁观或要看全身路线",
    "prompts": {
      "seedance": {
        "text": "Keep the camera fixed relative to the subject's torso as the subject moves.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Keep the camera fixed relative to the subject's torso as the subject moves.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "人物与相机保持相对位置加同组帧，目标点锁脸 / 胸",
    "confusable": "普通跟拍仅大致保持主体，不必固定在身体坐标",
    "relatedIds": [
      "038"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/070.mp4",
      "poster": "media/070_poster.webp",
      "diagram": "media/070_diagram.mp4",
      "sideDiagram": "media/070_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "070",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "相机与主体固定相对身体坐标，主体运动时背景变化；不同于普通大致跟随。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -2.5,
        1.3
      ],
      "camera_end": [
        2,
        2.5,
        1.3
      ],
      "target_start": [
        0,
        0,
        1.3
      ],
      "target_end": [
        2,
        5,
        1.3
      ],
      "lens_start": 24,
      "lens_end": 24,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "start": [
            0,
            0,
            0
          ],
          "end": [
            2,
            5,
            0
          ],
          "turn_start": 0,
          "turn_end": 0
        }
      },
      "motion": {
        "type": "body_mounted"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "相机与主体固定相对身体坐标，主体运动时背景变化；不同于普通大致跟随。"
  },
  {
    "id": "071",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "前景擦过",
    "keywordsEn": "Foreground Wipe / Occlusion Transition",
    "title": "前景擦过 Foreground Wipe / Occlusion Transition",
    "effect": "很近物体短暂覆盖画面，移开后新信息出现",
    "conditions": "有空间来由的转场、藏切镜",
    "unsuitable": "遮挡无缘无故生成、遮完没有新信息",
    "prompts": {
      "seedance": {
        "text": "Move behind the near pillar; cut while it fills the frame, then continue in the same direction.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Move behind the near pillar; cut while it fills the frame, then continue in the same direction.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "物体方块摆遮挡物，相机移动；完全覆盖时再设切点",
    "confusable": "普通横移可能不填屏；字幕蒙版不是摄影遮挡",
    "relatedIds": [
      "036"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/071.mp4",
      "poster": "media/071_poster.webp",
      "diagram": "media/071_diagram.mp4",
      "sideDiagram": "media/071_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "071",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "很近柱体短暂覆盖画面，越过后出现新信息；光有视差但不填屏不算擦过。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -3,
        -6,
        1
      ],
      "camera_end": [
        3,
        -6,
        1
      ],
      "target_start": [
        -3,
        2,
        1
      ],
      "target_end": [
        3,
        2,
        1
      ],
      "lens_start": 40,
      "lens_end": 40,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "很近柱体短暂覆盖画面，越过后出现新信息；光有视差但不填屏不算擦过。"
  },
  {
    "id": "072",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "一镜到底",
    "keywordsEn": "One-Take / Oner / Long Take",
    "title": "一镜到底 One-Take / Oner / Long Take",
    "effect": "时间、空间连续，多个事件经同一镜头接续",
    "conditions": "探索、完整动作、空间连贯",
    "unsuitable": "靠切镜跳过时间却又声称无切镜",
    "prompts": {
      "seedance": {
        "text": "单一连续镜头，依次经过入口、通道、房间，事件按顺序发生。",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "One continuous take follows the route and actions in order.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "一台相机连续加位置 / 目标点 / 焦距帧，检查转弯和遮挡",
    "confusable": "One-Take 不是某条路径，固定镜头也可以是长镜头",
    "relatedIds": [
      "033"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/072.mp4",
      "poster": "media/072_poster.webp",
      "diagram": "media/072_diagram.mp4",
      "sideDiagram": "media/072_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "072",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "相机沿连续路线先记录ACTOR_A由(0,0)靠近到(1,0.55)米，再看ACTOR_B转身回应；落幅机位(3,-2.5,1.5)米，完整保留B头部与上半身。代理事件有先后，不通过切镜跳时间。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "path",
        "points": [
          [
            -2,
            -8,
            1
          ],
          [
            -2,
            -4,
            1
          ],
          [
            3,
            -4,
            1.5
          ],
          [
            3,
            -2.5,
            1.5
          ]
        ],
        "target_points": [
          [
            0,
            0,
            1
          ],
          [
            0,
            0,
            1
          ],
          [
            2.2,
            1.25,
            1.3
          ],
          [
            2.2,
            1.25,
            1.3
          ]
        ]
      },
      "actors": {
        "ACTOR_A": {
          "start": [
            0,
            0,
            0
          ],
          "end": [
            1,
            0.55,
            0
          ],
          "turn_start": 2.0874914655571737,
          "turn_end": 2.0988707752212563,
          "move_window": [
            0.05,
            0.5
          ]
        },
        "ACTOR_B": {
          "turn_start": 0.5,
          "turn_end": -1.042721878368537,
          "turn_window": [
            0.5,
            0.85
          ]
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "相机沿连续路线先记录ACTOR_A由(0,0)靠近到(1,0.55)米，再看ACTOR_B转身回应；落幅机位(3,-2.5,1.5)米，完整保留B头部与上半身。代理事件有先后，不通过切镜跳时间。",
    "references": [
      {
        "title": "Film Analysis: Editing",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/editing/",
        "note": "教材说明长镜头的连续性、动作编排及其节奏作用。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "073",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "变速推进",
    "keywordsEn": "Camera Acceleration / Deceleration / Variable-Speed Dolly",
    "title": "变速推进 Camera Acceleration / Deceleration / Variable-Speed Dolly",
    "effect": "路线不变，到达节奏由慢到快 / 快到慢",
    "conditions": "蓄势、迫近、动作强调",
    "unsuitable": "让所有镜头都机械同样缓入缓出",
    "prompts": {
      "seedance": {
        "text": "The camera moves along the same path, accelerating after the doorway and slowing at the target.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera moves along the same path, accelerating after the doorway and slowing at the target.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "调相机关键帧间隔 / 插值，主体动作时间保持",
    "confusable": "Speed Ramp 还可指后期改变整个画面播放速度",
    "relatedIds": [
      "074"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/073.mp4",
      "poster": "media/073_poster.webp",
      "diagram": "media/073_diagram.mp4",
      "sideDiagram": "media/073_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "073",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "相机路线相同，速度变化由关键帧时序控制；主体事件速度不一起变。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -4.5,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "easing": "accelerate"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "相机路线相同，速度变化由关键帧时序控制；主体事件速度不一起变。"
  },
  {
    "id": "074",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "慢动作 / 变速播放",
    "keywordsEn": "Slow Motion / Speed Ramp",
    "title": "慢动作 / 变速播放 Slow Motion / Speed Ramp",
    "effect": "主体事件时间放慢 / 加快；相机可动可不动",
    "conditions": "关键动作、冲击前后、时间强调",
    "unsuitable": "只想相机缓慢移动",
    "prompts": {
      "seedance": {
        "text": "接触前保持正常速度，接触瞬间减慢，之后恢复。",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Slow the action at contact, then return to normal speed.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "调主体 / 道具帧的时间跨度，或后期重定时；明确相机是否一起变速",
    "confusable": "相机减速不等于全片慢动作；子弹时间还要移动视点",
    "relatedIds": [
      "053",
      "073"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/074.mp4",
      "poster": "media/074_poster.webp",
      "diagram": "media/074_diagram.mp4",
      "sideDiagram": "media/074_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "074",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "用可见代理事件展示接触附近的时间放慢再恢复；相机保持，不能用慢推代替慢动作。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "start": [
            -1,
            0,
            0
          ],
          "end": [
            2,
            0,
            0
          ],
          "tempo": "ramp"
        },
        "ACTOR_B": {
          "start": [
            2.2,
            2,
            0
          ],
          "end": [
            5.2,
            2,
            0
          ],
          "tempo": "normal"
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "用可见代理事件展示接触附近的时间放慢再恢复；相机保持，不能用慢推代替慢动作。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材解释拍摄帧率与播放速度形成慢动作或快动作的关系。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "075",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "移动延时",
    "keywordsEn": "Hyperlapse",
    "title": "移动延时 Hyperlapse",
    "effect": "观看位置前进，同时时间被压缩，环境变化加速",
    "conditions": "旅行、城市、长距离与时间流逝",
    "unsuitable": "实时对话、精确连续接触",
    "prompts": {
      "seedance": {
        "text": "Hyperlapse forward along the street, showing accelerated passage of time.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Hyperlapse forward along the street, showing accelerated passage of time.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "加连续相机路径，并压缩环境 / 主体时间；预演不等于真实拍摄采样",
    "confusable": "Timelapse 可以固定机位；快速 Dolly 不必压缩时间",
    "relatedIds": [
      "034"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/075.mp4",
      "poster": "media/075_poster.webp",
      "diagram": "media/075_diagram.mp4",
      "sideDiagram": "media/075_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "075",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "移动视点与代理事件时间压缩并存；只示意时间概念，不代表实拍延时的间隔采样和环境质感。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -3,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        5,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "start": [
            -1,
            0,
            0
          ],
          "end": [
            2,
            0,
            0
          ],
          "tempo": "hyperlapse"
        },
        "ACTOR_B": {
          "start": [
            2.2,
            2,
            0
          ],
          "end": [
            5.2,
            2,
            0
          ],
          "tempo": "normal"
        }
      }
    },
    "review": {
      "uncertain": true,
      "reason": "虚拟事件的时间压缩与移动机位可以示意原理，但不能据此验证实拍 hyperlapse 的间隔采样、环境变化与运动质感。"
    },
    "demoNote": "移动视点与代理事件时间压缩并存；只示意时间概念，不代表实拍延时的间隔采样和环境质感。"
  },
  {
    "id": "076",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "构图停留",
    "keywordsEn": "Hold / Hold the Framing",
    "title": "构图停留 Hold / Hold the Framing",
    "effect": "相机暂时保持构图，人物可继续动作",
    "conditions": "反应读取、品牌落版、揭示后给观众时间",
    "unsuitable": "无意停顿打断动势，或落点没有可读信息",
    "prompts": {
      "seedance": {
        "text": "Hold the framing while the subject finishes the action.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Hold the framing while the subject finishes the action.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "到达落点后保持相机、目标点和焦距；主体仍可加帧",
    "confusable": "Static 可全程固定；Hold 是某段停留；不等于冻结人物",
    "relatedIds": [
      "033"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/076.mp4",
      "poster": "media/076_poster.webp",
      "diagram": "media/076_diagram.mp4",
      "sideDiagram": "media/076_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "076",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "运动落点后保持相机与取景，主体事件继续；与077完整画面冻结区分。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -5.5,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "motion": {
        "type": "hold"
      },
      "actors": {
        "ACTOR_A": {
          "start": [
            0,
            0,
            0
          ],
          "end": [
            0.9,
            0,
            0
          ],
          "turn_start": -0.12,
          "turn_end": 0.35
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "运动落点后保持相机与取景，主体事件继续；与077完整画面冻结区分。"
  },
  {
    "id": "077",
    "category": "运镜",
    "categoryKey": "movement",
    "keywordsZh": "定格",
    "keywordsEn": "Freeze Frame",
    "title": "定格 Freeze Frame",
    "effect": "保持某一个完整画面时刻，主体与环境动作也停止",
    "conditions": "决定性瞬间、标记动作姿态、刻意中止时间",
    "unsuitable": "仍需实时反应或环境持续变化时",
    "prompts": {
      "seedance": {
        "text": "Freeze the entire image at the chosen moment.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Freeze the entire image at the chosen moment.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "保持相机、主体、道具及环境动态状态；或在剪辑中保持选定帧",
    "confusable": "Hold 只停相机；Bullet Time 冻结动作时视点仍绕行",
    "relatedIds": [
      "053",
      "076"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/077.mp4",
      "poster": "media/077_poster.webp",
      "diagram": "media/077_diagram.mp4",
      "sideDiagram": "media/077_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "077",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "先有可见主体事件，选定时刻后相机、主体和道具完整冻结；不是静止机位看持续表演。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "start": [
            -1,
            0,
            0
          ],
          "end": [
            2,
            0,
            0
          ],
          "tempo": "freeze"
        },
        "ACTOR_B": {
          "start": [
            2.2,
            2,
            0
          ],
          "end": [
            5.2,
            2,
            0
          ],
          "tempo": "normal"
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "先有可见主体事件，选定时刻后相机、主体和道具完整冻结；不是静止机位看持续表演。"
  },
  {
    "id": "078",
    "category": "景深与对焦",
    "categoryKey": "focus",
    "keywordsZh": "浅景深",
    "keywordsEn": "Shallow Depth of Field（DOF）",
    "title": "浅景深 Shallow Depth of Field（DOF）",
    "effect": "主体清楚，近 / 远景柔化，注意集中",
    "conditions": "人像、细节、隔离背景",
    "unsuitable": "空间关系、多个距离层都重要",
    "prompts": {
      "seedance": {
        "text": "眼睛和脸清楚，前景与背景柔化。",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Keep the eyes sharp with a softly blurred background.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "粉色点吸附叙事重点；开启景深后调光圈 / 模糊量，具体界面未实操",
    "confusable": "浅景深不是“全部模糊”；不由长焦单独保证",
    "relatedIds": [
      "029"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/078_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "078",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "启用实际景深，让主体清晰、近远层柔化；保持清晰主体而非整幅模糊。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -0.5,
        -5,
        1.35
      ],
      "camera_end": [
        -0.5,
        -5,
        1.35
      ],
      "target_start": [
        0.4,
        0.5,
        1.3
      ],
      "target_end": [
        0.4,
        0.5,
        1.3
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "focus": {
        "enabled": true,
        "f_stop": 0.16,
        "distance_start": 4.802762472964823,
        "distance_end": 4.802762472964823
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "启用实际景深，让主体清晰、近远层柔化；保持清晰主体而非整幅模糊。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材解释浅景深让有限距离层清晰，从而引导注意。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "079",
    "category": "景深与对焦",
    "categoryKey": "focus",
    "keywordsZh": "深景深 / 深焦",
    "keywordsEn": "Deep Depth of Field / Deep Focus",
    "title": "深景深 / 深焦 Deep Depth of Field / Deep Focus",
    "effect": "前、中、后景均可读，空间关系清楚",
    "conditions": "多人调度、环境、教程",
    "unsuitable": "需要明显焦点交接来藏 / 揭示信息",
    "prompts": {
      "seedance": {
        "text": "Keep the foreground, subject and background clearly readable.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Keep the foreground, subject and background clearly readable.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "粉色点放主要距离层，收小光圈或减少景深效果；核对远近清晰范围",
    "confusable": "景深大不等于广角；分屈光镜只保两段距离",
    "relatedIds": [
      "026",
      "084"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/079_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "079",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "前中后层均清楚，展示连续深清晰范围；不同于084只保两个区域。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -0.5,
        -5,
        1.35
      ],
      "camera_end": [
        -0.5,
        -5,
        1.35
      ],
      "target_start": [
        0.4,
        0.5,
        1.3
      ],
      "target_end": [
        0.4,
        0.5,
        1.3
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "focus": {
        "enabled": true,
        "f_stop": 128,
        "distance_start": 4.802762472964823,
        "distance_end": 4.802762472964823
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "前中后层均清楚，展示连续深清晰范围；不同于084只保两个区域。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材解释深焦中多个空间层同时清晰的呈现。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "080",
    "category": "景深与对焦",
    "categoryKey": "focus",
    "keywordsZh": "主体 / 眼部持续对焦",
    "keywordsEn": "Subject / Eye Focus Lock",
    "title": "主体 / 眼部持续对焦 Subject / Eye Focus Lock",
    "effect": "主体移动仍清楚，脸眼优先",
    "conditions": "近景表演、跟拍、反应",
    "unsuitable": "需要把注意转给另一对象",
    "prompts": {
      "seedance": {
        "text": "Keep the subject's eyes in focus as the subject moves.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Keep the subject's eyes in focus as the subject moves.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "粉色点随眼部加帧 / 保持表面目标，检查自动吸附后的偏移",
    "confusable": "Subject Lock 也可指构图锁主体，须说明清晰还是位置",
    "relatedIds": [
      "104"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/080.mp4",
      "poster": "media/080_poster.webp",
      "diagram": "media/080_diagram.mp4",
      "sideDiagram": "media/080_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "080",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "主体移动时持续改变对焦距离，保持眼部代理清楚；构图锁和对焦锁分开。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -0.5,
        -5,
        1.35
      ],
      "camera_end": [
        -0.5,
        -5,
        1.35
      ],
      "target_start": [
        0.4,
        0.5,
        1.3
      ],
      "target_end": [
        0.4,
        0.5,
        1.3
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "focus": {
        "enabled": true,
        "f_stop": 0.16,
        "target": "ACTOR_A"
      },
      "actors": {
        "ACTOR_A": {
          "start": [
            0,
            0,
            0
          ],
          "end": [
            0,
            -2,
            0
          ]
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "主体移动时持续改变对焦距离，保持眼部代理清楚；构图锁和对焦锁分开。"
  },
  {
    "id": "081",
    "category": "景深与对焦",
    "categoryKey": "focus",
    "keywordsZh": "转焦 / 移焦",
    "keywordsEn": "Rack Focus / Focus Pull",
    "title": "转焦 / 移焦 Rack Focus / Focus Pull",
    "effect": "同一取景内近物由清变糊、远物由糊变清，或反向",
    "conditions": "从线索交给人物、从人物落到道具",
    "unsuitable": "两对象在同一距离层、背景没有可辨目标",
    "prompts": {
      "seedance": {
        "text": "Rack focus：前景树木由清晰变模糊，后方人物逐渐清晰。",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Shift focus from the foreground object to the background face, keeping framing unchanged.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "粉色目标点从近物到远物加帧；机位、焦距、画框保持，检查是否被带动转向",
    "confusable": "Zoom 改大小；摄影机推到另一对象；普通 Blur Reveal",
    "relatedIds": [
      "054"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/081.mp4",
      "poster": "media/081_poster.webp",
      "diagram": "media/081_diagram.mp4",
      "sideDiagram": "media/081_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "081",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "与044共用相机位置/起幅，独立对焦近柱→远主体，机位/目标方向/焦距保持；景深模式与摇摄不同必须注明。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "meta": {
        "comparisonWith": "044",
        "sameStartingLayout": true,
        "opticalModeDifference": "081启用景深交换清晰距离层；044保持深景深而转向。"
      },
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40,
      "lens_end": 40,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "focus": {
        "enabled": true,
        "f_stop": 0.16,
        "distance_start": 4.7,
        "distance_end": 8
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "与044共用相机位置/起幅，独立对焦近柱→远主体，机位/目标方向/焦距保持；景深模式与摇摄不同必须注明。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明焦点从一个距离层转到另一个距离层以连接信息。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "082",
    "category": "景深与对焦",
    "categoryKey": "focus",
    "keywordsZh": "急转焦",
    "keywordsEn": "Snap Focus / Whip Focus",
    "title": "急转焦 Snap Focus / Whip Focus",
    "effect": "在短时间迅速换清晰对象",
    "conditions": "突然发现、威胁、反应强调",
    "unsuitable": "观众尚未认出两对象、变化太快看不清",
    "prompts": {
      "seedance": {
        "text": "Snap focus from the distant doorway to the near face.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Snap focus from the distant doorway to the near face.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "粉色点在短帧段从远到近，加落点保持；构图不随动",
    "confusable": "Whip Pan 是转方向，Snap Zoom 是变焦",
    "relatedIds": [
      "046",
      "054",
      "055"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/082.mp4",
      "poster": "media/082_poster.webp",
      "diagram": "media/082_diagram.mp4",
      "sideDiagram": "media/082_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "082",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "同一取景中快速交换两距离层的清晰对象，落点保持；不是甩镜或快速变焦。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -0.5,
        -5,
        1.35
      ],
      "camera_end": [
        -0.5,
        -5,
        1.35
      ],
      "target_start": [
        0.4,
        0.5,
        1.3
      ],
      "target_end": [
        0.4,
        0.5,
        1.3
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "focus": {
        "enabled": true,
        "f_stop": 0.16,
        "distance_start": 1.6528506893652957,
        "distance_end": 6.660325979365735,
        "easing": "fast"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "同一取景中快速交换两距离层的清晰对象，落点保持；不是甩镜或快速变焦。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明快速转焦可加快节奏或增加悬念；不规定固定切换时长。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "083",
    "category": "景深与对焦",
    "categoryKey": "focus",
    "keywordsZh": "散景",
    "keywordsEn": "Bokeh",
    "title": "散景 Bokeh",
    "effect": "焦外亮点呈柔和光斑，形状与质感显眼",
    "conditions": "夜景肖像、产品、柔和背景",
    "unsuitable": "需要背景文字、线索可读",
    "prompts": {
      "seedance": {
        "text": "脸清楚，背景灯光形成柔和圆形散景。",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Keep the face sharp with soft circular bokeh behind.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "粉色点锁主体，背景摆亮点；光圈等决定焦外形状，不能仅靠目标点控制",
    "confusable": "Bokeh 是焦外表现；运动模糊来自时间运动",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/083_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "083",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "后方增加亮点、主体清楚，展示焦外光斑；不声称真实镜头光圈叶片形状。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -0.5,
        -5,
        1.35
      ],
      "camera_end": [
        -0.5,
        -5,
        1.35
      ],
      "target_start": [
        0.4,
        0.5,
        1.3
      ],
      "target_end": [
        0.4,
        0.5,
        1.3
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "focus": {
        "enabled": true,
        "f_stop": 0.16,
        "distance_start": 4.802762472964823,
        "distance_end": 4.802762472964823
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "后方增加亮点、主体清楚，展示焦外光斑；不声称真实镜头光圈叶片形状。"
  },
  {
    "id": "084",
    "category": "景深与对焦",
    "categoryKey": "focus",
    "keywordsZh": "分屈光镜",
    "keywordsEn": "Split Diopter",
    "title": "分屈光镜 Split Diopter",
    "effect": "相隔较远的两对象同时清楚，中间区可能特殊模糊",
    "conditions": "同框强调两层信息、悬疑",
    "unsuitable": "希望全深度都自然清楚",
    "prompts": {
      "seedance": {
        "text": "Split-diopter look, the near object and distant face are both sharp.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Split-diopter look, the near object and distant face are both sharp.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "一个粉色点不能同时控制两层；需专门光学 / 合成方案，当前工具支持未经验证",
    "confusable": "Deep Focus 连续较大清晰范围；Rack Focus 是先后清楚",
    "relatedIds": [
      "079",
      "081"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/084_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "084",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "分屈光风格双焦分区合成近似，非真实分屈光镜光学；分区交界需人工检查。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -0.5,
        -5,
        1.35
      ],
      "camera_end": [
        -0.5,
        -5,
        1.35
      ],
      "target_start": [
        0.4,
        0.5,
        1.3
      ],
      "target_end": [
        0.4,
        0.5,
        1.3
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "focus": {
        "enabled": true,
        "f_stop": 0.16,
        "distance_start": 4.802762472964823,
        "distance_end": 4.802762472964823
      },
      "split_focus_planes": {
        "near_surface_m": 1.6528506893652957,
        "far_surface_m": 6.660325979365735
      }
    },
    "review": {
      "uncertain": true,
      "reason": "分屈光风格双焦分区合成近似，非真实分屈光镜光学；分区交界需人工检查。；两幅不同焦平面的左右半幅合成，近似分屈光风格；不是真实分屈光镜光学。"
    },
    "demoNote": "分屈光风格双焦分区合成近似，非真实分屈光镜光学；分区交界需人工检查。 两幅不同焦平面的左右半幅合成，近似分屈光风格；不是真实分屈光镜光学。",
    "references": [
      {
        "title": "138mm Split Field Diopter",
        "publisher": "Tiffen",
        "url": "https://tiffen.com/products/138mm-split-field-diopter",
        "note": "厂商介绍半圆分屈光镜及同画面增加同时清晰范围的用途。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "085",
    "category": "景深与对焦",
    "categoryKey": "focus",
    "keywordsZh": "焦点游移 / 焦点搜索",
    "keywordsEn": "Breathing Focus",
    "title": "焦点游移 Breathing Focus / 焦点搜索",
    "effect": "清晰平面轻微来回，产生不安 / 未定感",
    "conditions": "有意等待、失衡、失焦叙事",
    "unsuitable": "稳定肖像和信息阅读",
    "prompts": {
      "seedance": {
        "text": "Let focus drift slightly forward and backward while framing stays still.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Let focus drift slightly forward and backward while framing stays still.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "粉色点沿近远小幅往复加帧，画框固定",
    "confusable": "光学 Focus Breathing 是对焦引起视野变化；来源“呼吸焦点”指焦点游移，两义保留",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/085.mp4",
      "poster": "media/085_poster.webp",
      "diagram": "media/085_diagram.mp4",
      "sideDiagram": "media/085_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "085",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "固定机位与画框，清晰平面小幅前后游移；不要误做光学镜头呼吸造成的视野变化。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -0.5,
        -5,
        1.35
      ],
      "camera_end": [
        -0.5,
        -5,
        1.35
      ],
      "target_start": [
        0.4,
        0.5,
        1.3
      ],
      "target_end": [
        0.4,
        0.5,
        1.3
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "focus": {
        "enabled": true,
        "f_stop": 0.16,
        "distance_start": 4.202762472964824,
        "distance_end": 5.402762472964823,
        "type": "oscillate"
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定机位与画框，清晰平面小幅前后游移；不要误做光学镜头呼吸造成的视野变化。"
  },
  {
    "id": "086",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "主体居中 / 展示构图",
    "keywordsEn": "Centered / Hero Framing",
    "title": "主体居中 / 展示构图 Centered / Hero Framing",
    "effect": "主体是唯一中心，四周背景形成层级",
    "conditions": "产品、完整姿态、品牌形象",
    "unsuitable": "需要让其他信息先被看见",
    "prompts": {
      "seedance": {
        "text": "Center the full subject with clear space around its silhouette.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Center the full subject with clear space around its silhouette.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "物体平面方块摆中心，粉色点对主体，移相机调占比",
    "confusable": "Hero Shot 是用途，未必低角度；居中不保证对称",
    "relatedIds": [
      "087"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/086_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "086",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "单个主体居中，环境层次围绕其轮廓；居中不要求主体低角度。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -6,
        1
      ],
      "camera_end": [
        0,
        -6,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "单个主体居中，环境层次围绕其轮廓；居中不要求主体低角度。"
  },
  {
    "id": "087",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "对称构图",
    "keywordsEn": "Symmetrical Composition",
    "title": "对称构图 Symmetrical Composition",
    "effect": "两侧环境或结构围绕中轴呼应，端正 / 秩序感",
    "conditions": "建筑、仪式、产品、规整建立镜头",
    "unsuitable": "需要刻意失衡、路线变化易破坏对称",
    "prompts": {
      "seedance": {
        "text": "Symmetrical composition, align the doorway with the center axis.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Symmetrical composition, align the doorway with the center axis.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "物体方块摆左右结构，相机摆中轴；检查焦距与朝向",
    "confusable": "正面、居中可不对称；不要求人脸表情完全对称",
    "relatedIds": [
      "017",
      "086"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/087_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "087",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "左右环境结构中轴呼应，保持端正；不能仅把主体居中就称对称。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1.2
      ],
      "camera_end": [
        0,
        -8,
        1.2
      ],
      "target_start": [
        0,
        0,
        1.2
      ],
      "target_end": [
        0,
        0,
        1.2
      ],
      "lens_start": 35,
      "lens_end": 35,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "左右环境结构中轴呼应，保持端正；不能仅把主体居中就称对称。"
  },
  {
    "id": "088",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "三分法",
    "keywordsEn": "Rule of Thirds",
    "title": "三分法 Rule of Thirds",
    "effect": "主体 / 地标落在三分线附近，给环境或视线留空间",
    "conditions": "人物与环境并重、对话、广告",
    "unsuitable": "中央对称是主要表达时",
    "prompts": {
      "seedance": {
        "text": "Rule-of-thirds composition, place the figure near the right third.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      },
      "h3": {
        "text": "Rule-of-thirds composition, place the figure near the right third.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "相机视图参照三等分，物体方块调位置；起落都核对",
    "confusable": "Three-Quarter View 是机位方位，不是三分法",
    "relatedIds": [
      "018"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/088_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "088",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "主体位于三分位置，留环境信息；不是三分之四机位。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -6,
        1
      ],
      "camera_end": [
        0,
        -6,
        1
      ],
      "target_start": [
        -1.05,
        0,
        1
      ],
      "target_end": [
        -1.05,
        0,
        1
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "主体位于三分位置，留环境信息；不是三分之四机位。"
  },
  {
    "id": "089",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "留白",
    "keywordsEn": "Negative Space",
    "title": "留白 Negative Space",
    "effect": "主体周围大面积空区，加强孤独、尺度或为文字留位置",
    "conditions": "品牌落版、安静、巨物 / 人对比",
    "unsuitable": "人太小失去辨认、空区没有用途",
    "prompts": {
      "seedance": {
        "text": "Keep open space on the left, with the subject readable on the right.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Keep open space on the left, with the subject readable on the right.",
        "evidence": [
          "官方指南",
          "未经验证"
        ],
        "note": "项目整理；术语参照官方指南；未经模型生成验证。"
      }
    },
    "blender": "摆主体与相机，保留空区；换画幅后重检查",
    "confusable": "没有主体不等于有意留白；不自动授权生成文字",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/089_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "089",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "主体可读、左侧有目的的开放空区；不往场景生成文字。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        -2.4,
        0,
        1
      ],
      "target_end": [
        -2.4,
        0,
        1
      ],
      "lens_start": 35,
      "lens_end": 35,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "主体可读、左侧有目的的开放空区；不往场景生成文字。"
  },
  {
    "id": "090",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "头顶余量",
    "keywordsEn": "Headroom",
    "title": "头顶余量 Headroom",
    "effect": "头与画框间留适当空间，抬头时不意外切头",
    "conditions": "对话、起身、肩颈展开",
    "unsuitable": "有意紧特写还机械保大余量",
    "prompts": {
      "seedance": {
        "text": "Leave room above the head for the upward movement.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Leave room above the head for the upward movement.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "起落及抬头中间帧检查；必要时目标点跟随，但仍保景别",
    "confusable": "头上空区不全是头顶余量；应随动作变化",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/090_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "090",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "头顶预留动作空间，示意身体起身仍不意外切头的范围。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -4,
        1.25
      ],
      "camera_end": [
        0,
        -4,
        1.25
      ],
      "target_start": [
        0,
        0,
        1.45
      ],
      "target_end": [
        0,
        0,
        1.45
      ],
      "lens_start": 60,
      "lens_end": 60,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "头顶预留动作空间，示意身体起身仍不意外切头的范围。"
  },
  {
    "id": "091",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "视线 / 行进余量",
    "keywordsEn": "Look Room / Lead Room",
    "title": "视线 / 行进余量 Look Room / Lead Room",
    "effect": "朝看的 / 行进方向留空间，方向容易理解",
    "conditions": "侧脸、行走、追逐",
    "unsuitable": "有意把人物压向边缘的窒息表达",
    "prompts": {
      "seedance": {
        "text": "Leave space to the right in the direction of the subject's gaze and movement.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Leave space to the right in the direction of the subject's gaze and movement.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "物体方块与相机调位置，粉色点按视线 / 路线；检查不切掉目标",
    "confusable": "Headroom 在上方；画面居中不等于方向清楚",
    "relatedIds": [
      "086",
      "090"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/091_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "091",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "向主体的朝向或行进方向留空间，区别于头顶余量。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -6,
        1
      ],
      "camera_end": [
        0,
        -6,
        1
      ],
      "target_start": [
        1.3,
        0,
        1
      ],
      "target_end": [
        1.3,
        0,
        1
      ],
      "lens_start": 50,
      "lens_end": 50,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "turn_start": 1.5707963267948966,
          "turn_end": 1.5707963267948966
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "向主体的朝向或行进方向留空间，区别于头顶余量。"
  },
  {
    "id": "092",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "前中后景层次",
    "keywordsEn": "Foreground / Midground / Background Depth",
    "title": "前中后景层次 Foreground / Midground / Background Depth",
    "effect": "通过遮挡、大小、清晰度、视差建立纵深",
    "conditions": "空间、窥视、旅程、尺度",
    "unsuitable": "前景长期遮掉动作 / 脸",
    "prompts": {
      "seedance": {
        "text": "A near frame, a midground figure and a distant wall form three clear layers.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "A near frame, a midground figure and a distant wall form three clear layers.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "物体平面方块摆三层距离；选择焦点与相机路径",
    "confusable": "只有不同颜色的平面不保证真实纵深",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/092_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "092",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "近柱、中主体、远楼的真实距离、遮挡和大小层次，非仅色彩分层。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -7,
        1.2
      ],
      "camera_end": [
        0,
        -7,
        1.2
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 35,
      "lens_end": 35,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "近柱、中主体、远楼的真实距离、遮挡和大小层次，非仅色彩分层。",
    "references": [
      {
        "title": "Film Analysis: Mise-en-scene",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/mise-en-scene/",
        "note": "教材说明近处与远处共同布置信息的深空间，并区分空间分层与深焦。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "093",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "引导线",
    "keywordsEn": "Leading Lines / Perspective Lines",
    "title": "引导线 Leading Lines / Perspective Lines",
    "effect": "通道、栏杆、地面线把视线引向主体 / 目标",
    "conditions": "走廊、路线、空间中心",
    "unsuitable": "引导到无关亮点，线穿主体脸",
    "prompts": {
      "seedance": {
        "text": "The corridor lines lead toward the figure at the far end.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The corridor lines lead toward the figure at the far end.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "物体方块摆墙 / 地面结构，相机对准汇聚方向",
    "confusable": "三维透视线不是要求所有线都对称",
    "relatedIds": [
      "087"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/093_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "093",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "铺装与通道结构的透视线引向主体，不引向无关亮点。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -7,
        1.2
      ],
      "camera_end": [
        0,
        -7,
        1.2
      ],
      "target_start": [
        0,
        1,
        1
      ],
      "target_end": [
        0,
        1,
        1
      ],
      "lens_start": 28,
      "lens_end": 28,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "铺装与通道结构的透视线引向主体，不引向无关亮点。"
  },
  {
    "id": "094",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "框中框",
    "keywordsEn": "Frame Within a Frame",
    "title": "框中框 Frame Within a Frame",
    "effect": "门窗 / 结构包围主体，隔离、窥视或强调",
    "conditions": "对峙、人物揭示、层次",
    "unsuitable": "框边盖住关键动作，空间关系断裂",
    "prompts": {
      "seedance": {
        "text": "Frame the person through the doorway, keeping the face unobstructed.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Frame the person through the doorway, keeping the face unobstructed.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "摆门框和人物，相机从开口看；运动时检查遮挡变化",
    "confusable": "Window Reveal 是信息随运动出现，框中框可以固定",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/094_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "094",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "门框包围主体且不遮关键形体；可静态成立，无需一定揭示运动。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1.2
      ],
      "camera_end": [
        0,
        -8,
        1.2
      ],
      "target_start": [
        0,
        0,
        1.2
      ],
      "target_end": [
        0,
        0,
        1.2
      ],
      "lens_start": 40,
      "lens_end": 40,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "门框包围主体且不遮关键形体；可静态成立，无需一定揭示运动。"
  },
  {
    "id": "095",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "轮廓可读 / 多主体间距",
    "keywordsEn": "Silhouette Readability / Group Spacing",
    "title": "轮廓可读 / 多主体间距 Silhouette Readability / Group Spacing",
    "effect": "头、手、道具和环境不粘成一团，动作可读",
    "conditions": "蜷缩、群像、悬浮、多人对话",
    "unsuitable": "需要故意遮住身份时",
    "prompts": {
      "seedance": {
        "text": "Separate the limbs and props from the background; keep each figure readable.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Separate the limbs and props from the background; keep each figure readable.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "物体方块拉开距离，换相机角度；核对亮暗和悬空间隙",
    "confusable": "仅提高清晰度无法修复重叠；不一定要完全无遮挡",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/095_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "095",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "两主体和代理道具保持轮廓间隙，检查亮暗和重叠。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -7,
        1.2
      ],
      "camera_end": [
        0,
        -7,
        1.2
      ],
      "target_start": [
        1,
        0,
        1
      ],
      "target_end": [
        1,
        0,
        1
      ],
      "lens_start": 40,
      "lens_end": 40,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_B": {
          "start": [
            1.5,
            0.2,
            0
          ],
          "end": [
            1.5,
            0.2,
            0
          ]
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "两主体和代理道具保持轮廓间隙，检查亮暗和重叠。"
  },
  {
    "id": "096",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "双人 / 三人镜头",
    "keywordsEn": "Two-Shot / Three-Shot",
    "title": "双人 / 三人镜头 Two-Shot / Three-Shot",
    "effect": "同框读人物关系与反应",
    "conditions": "对话、群体立场、对峙",
    "unsuitable": "每个人太小或互相挡脸",
    "prompts": {
      "seedance": {
        "text": "Two-shot, keep both faces and their eyelines readable in the same frame.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Two-shot, keep both faces and their eyelines readable in the same frame.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "物体方块摆人物位置，相机选景别；粉色点放主要距离层",
    "confusable": "人数定义不等于景别；两人特写和两人全身都可成立",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/096_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "096",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "同一画面中保留两主体朝向与相互关系；人数不限定景别。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        1.1,
        -6,
        1.1
      ],
      "camera_end": [
        1.1,
        -6,
        1.1
      ],
      "target_start": [
        1.1,
        0.6,
        1.1
      ],
      "target_end": [
        1.1,
        0.6,
        1.1
      ],
      "lens_start": 40,
      "lens_end": 40,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "同一画面中保留两主体朝向与相互关系；人数不限定景别。"
  },
  {
    "id": "097",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "建立镜头",
    "keywordsEn": "Establishing Shot",
    "title": "建立镜头 Establishing Shot",
    "effect": "交代地点、尺度和主要关系，为后续局部提供位置",
    "conditions": "开场、换地点、切特写前建立方位",
    "unsuitable": "只有大远景却没有可辨地标与人物关系",
    "prompts": {
      "seedance": {
        "text": "Establish the room, both people and the doorway before moving to detail shots.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Establish the room, both people and the doorway before moving to detail shots.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "物体方块摆地标、人物、路线；机位保留完整空间关系",
    "confusable": "大远景是景别；建立镜头是职责；不一定覆盖整场动作",
    "relatedIds": [
      "001"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/097_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "097",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "交代两人物、地标和通路的建立职责；不能只远而无空间关系。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        4,
        -10,
        5
      ],
      "camera_end": [
        4,
        -10,
        5
      ],
      "target_start": [
        1,
        2,
        0.9
      ],
      "target_end": [
        1,
        2,
        0.9
      ],
      "lens_start": 28,
      "lens_end": 28,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "交代两人物、地标和通路的建立职责；不能只远而无空间关系。",
    "references": [
      {
        "title": "Film Analysis: Editing",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/editing/",
        "note": "教材说明建立镜头呈现场景中人物、物体和环境的空间关系。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "098",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "主镜头",
    "keywordsEn": "Master Shot",
    "title": "主镜头 Master Shot",
    "effect": "连续覆盖一场的主要人物、空间和动作，提供剪辑基准",
    "conditions": "多人场面、动作连续性、用局部补充前先保整场",
    "unsuitable": "关键细节始终太小，或人物走位不断被遮住",
    "prompts": {
      "seedance": {
        "text": "A master shot covers both characters and the complete action in the room.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "A master shot covers both characters and the complete action in the room.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "摆完整动作路线；相机保持或重构图以容纳主要动作，另用局部镜头补细节",
    "confusable": "Establishing 只需交代地点；Master 强调整场覆盖，也不限定景别",
    "relatedIds": [
      "097"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/098.mp4",
      "poster": "media/098_poster.webp",
      "diagram": "media/098_diagram.mp4",
      "sideDiagram": "media/098_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "098",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "固定机位(0,-6,3)米、35mm，连续完整覆盖与072相同的A趋近、B回应事件及两人物空间关系；整场覆盖职责不同于只交代场地的097。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -6,
        3
      ],
      "camera_end": [
        0,
        -6,
        3
      ],
      "target_start": [
        1.1,
        0.6,
        0.9
      ],
      "target_end": [
        1.1,
        0.6,
        0.9
      ],
      "lens_start": 35,
      "lens_end": 35,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "start": [
            0,
            0,
            0
          ],
          "end": [
            1,
            0.55,
            0
          ],
          "turn_start": 2.0874914655571737,
          "turn_end": 2.0988707752212563,
          "move_window": [
            0.05,
            0.5
          ]
        },
        "ACTOR_B": {
          "turn_start": 0.5,
          "turn_end": -1.042721878368537,
          "turn_window": [
            0.5,
            0.85
          ]
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "固定机位(0,-6,3)米、35mm，连续完整覆盖与072相同的A趋近、B回应事件及两人物空间关系；整场覆盖职责不同于只交代场地的097。"
  },
  {
    "id": "099",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "插入镜头",
    "keywordsEn": "Insert Shot / Detail Emphasis",
    "title": "插入镜头 Insert Shot / Detail Emphasis",
    "effect": "切到信、钥匙、产品等局部，补关键信息",
    "conditions": "线索、操作、知识蒙太奇、关键接触",
    "unsuitable": "局部无法定位、没有因果作用",
    "prompts": {
      "seedance": {
        "text": "Cut to an insert of the letter, preserving its orientation from the previous shot.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Cut to an insert of the letter, preserving its orientation from the previous shot.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "摆独立近景相机 / 目标点，检查道具方向、手与切入状态",
    "confusable": "ECU 是景别；Insert 是镜头叙事职责",
    "relatedIds": [
      "010"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/099_poster.webp",
      "diagram": "",
      "sideDiagram": "",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "099",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": false,
        "side": false
      },
      "note": "局部道具独立取景，与前场方向一致；这是信息职责，不把ECU词名当插入依据。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        -1.05,
        1.1,
        1.04
      ],
      "camera_end": [
        -1.05,
        1.1,
        1.04
      ],
      "target_start": [
        -1.05,
        2.5,
        1.04
      ],
      "target_end": [
        -1.05,
        2.5,
        1.04
      ],
      "lens_start": 85,
      "lens_end": 85,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "局部道具独立取景，与前场方向一致；这是信息职责，不把ECU词名当插入依据。"
  },
  {
    "id": "100",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "180° 轴线 / 同侧机位",
    "keywordsEn": "180-Degree Rule / Axis of Action",
    "title": "180° 轴线 / 同侧机位 180-Degree Rule / Axis of Action",
    "effect": "在人物连线 / 行动轴一侧拍，相邻镜左右、视线和运动方向容易接续",
    "conditions": "对话、对峙、正反打、连续动作",
    "unsuitable": "有意越轴却没有中性镜或可见过轴过程",
    "prompts": {
      "seedance": {
        "text": "Keep the cameras on the same side of the line between the two characters; preserve screen directions.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Keep the cameras on the same side of the line between the two characters; preserve screen directions.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "用两人物 / 路线确定轴线，机位摆同侧半平面；切镜前核对左右与视线",
    "confusable": "“环绕 180°”是路径角度，可能越轴，不能当作守轴",
    "relatedIds": [
      "041"
    ],
    "media": {
      "status": "ready",
      "kind": "image",
      "video": "",
      "poster": "media/100_poster.webp",
      "diagram": "media/100_diagram.webp",
      "sideDiagram": "media/100_side_diagram.webp",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "image",
      "recipe": "100",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "显示两人物连线与同侧机位关系，辅助机位示意放网页旁，主画面不烧机位标线。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "turn_start": 2.0874914655571737,
          "turn_end": 2.0874914655571737
        },
        "ACTOR_B": {
          "turn_start": -1.0541011880326194,
          "turn_end": -1.0541011880326194
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "显示两人物连线与同侧机位关系，辅助机位示意放网页旁，主画面不烧机位标线。",
    "references": [
      {
        "title": "Film Analysis: Editing",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/editing/",
        "note": "教材解释动作轴线及 180 度规则如何维持屏幕方向与空间连续性。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "101",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "正反打",
    "keywordsEn": "Shot / Reverse Shot",
    "title": "正反打 Shot / Reverse Shot",
    "effect": "交替看双方及反应，保持两人相对方位",
    "conditions": "对话、问答、对峙",
    "unsuitable": "两人朝同一画外方向却没有新空间交代",
    "prompts": {
      "seedance": {
        "text": "Alternate the two views from the same side of the axis; one looks screen-right, the other screen-left.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Alternate the two views from the same side of the axis; one looks screen-right, the other screen-left.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "同侧摆两台相机与肩背前景；目标点各指主脸，核对左右关系",
    "confusable": "不是把机位简单翻转 180°；OTS 可用但不是必需",
    "relatedIds": [
      "021"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/101.mp4",
      "poster": "media/101_poster.webp",
      "diagram": "media/101_diagram.mp4",
      "sideDiagram": "media/101_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "101",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "视频在两台同轴一侧的机位间剪切，双方屏幕朝向相对；切镜是本条语法的一部分。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "meta": {
        "usesCuts": true,
        "reason": "相邻镜头关系是本条定义的一部分；视频剪切不是连续运镜。"
      },
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "turn_start": 2.0874914655571737,
          "turn_end": 2.0874914655571737
        },
        "ACTOR_B": {
          "turn_start": -1.0541011880326194,
          "turn_end": -1.0541011880326194
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "视频在两台同轴一侧的机位间剪切，双方屏幕朝向相对；切镜是本条语法的一部分。",
    "references": [
      {
        "title": "Film Analysis: Editing",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/editing/",
        "note": "教材说明正反打交替呈现人物，并与视线匹配共同建立关系。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "102",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "视线匹配",
    "keywordsEn": "Eyeline Match",
    "title": "视线匹配 Eyeline Match",
    "effect": "先看人物望向画外，再切到对应方向与高度的对象，观看关系成立",
    "conditions": "人物发现线索、观察产品、正反打接续",
    "unsuitable": "所看对象的位置、方向与前镜视线矛盾",
    "prompts": {
      "seedance": {
        "text": "Cut from the character's gaze to the object at the matching direction and height.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Cut from the character's gaze to the object at the matching direction and height.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "物体方块摆被看对象；从人物位置核对视线方向，再摆对象镜头，检查轴线",
    "confusable": "不要求一定有两个人；正反打是交替覆盖方式，视线匹配是接点关系",
    "relatedIds": [
      "101"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/102.mp4",
      "poster": "media/102_poster.webp",
      "diagram": "media/102_diagram.mp4",
      "sideDiagram": "media/102_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "102",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "先人物看画外再切到同方向和高度的代理对象，演示视线接点；切镜是本条语法的一部分。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "meta": {
        "usesCuts": true,
        "reason": "相邻镜头关系是本条定义的一部分；视频剪切不是连续运镜。"
      },
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "先人物看画外再切到同方向和高度的代理对象，演示视线接点；切镜是本条语法的一部分。",
    "references": [
      {
        "title": "Film Analysis: Editing",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/editing/",
        "note": "教材说明观看者与所看空间通过视线匹配剪接连接。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "103",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "构图 / 图形匹配",
    "keywordsEn": "Graphic Match / Match Cut / Screen-Position Anchor",
    "title": "构图 / 图形匹配 Graphic Match / Match Cut / Screen-Position Anchor",
    "effect": "前后镜形状、位置、大小或动作方向呼应，切换易接续",
    "conditions": "产品总览到细节、身体局部到全身、世界替换",
    "unsuitable": "锚点同时跳位置、跳大小、跳朝向",
    "prompts": {
      "seedance": {
        "text": "Match the figure's screen position, scale and facing direction across the cut.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Match the figure's screen position, scale and facing direction across the cut.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "起落帧比对锚点；多机位分别调相机，不假称一条连续运镜",
    "confusable": "Graphic Match 不证明实体变形；Match Cut 不一定无切镜",
    "relatedIds": [],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/103.mp4",
      "poster": "media/103_poster.webp",
      "diagram": "media/103_diagram.mp4",
      "sideDiagram": "media/103_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "103",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "切换两幅匹配代理锚点的画面，保形状/位置/大小；不假称实体变形或连续运镜。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "meta": {
        "usesCuts": true,
        "reason": "相邻镜头关系是本条定义的一部分；视频剪切不是连续运镜。"
      },
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "切换两幅匹配代理锚点的画面，保形状/位置/大小；不假称实体变形或连续运镜。",
    "references": [
      {
        "title": "Film Analysis: Editing",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/editing/",
        "note": "教材说明相邻镜头通过色彩或形状等构图相似性形成图形匹配。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "104",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "构图锁定",
    "keywordsEn": "Stable Framing / Subject Lock / Horizon Lock",
    "title": "构图锁定 Stable Framing / Subject Lock / Horizon Lock",
    "effect": "主体位置与地平线受控，环境仍可变化",
    "conditions": "跟拍、产品、阅读、换景锚点",
    "unsuitable": "要刻意离开主体或滚转",
    "prompts": {
      "seedance": {
        "text": "Keep the subject within the right third and the horizon level as the camera moves.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "Keep the subject within the right third and the horizon level as the camera moves.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "粉色点随主体，青色滚转保持；相机距离 / 白色焦距控制占比",
    "confusable": "锁构图允许相机动；Static 锁位置 / 方向 / 焦距",
    "relatedIds": [
      "033"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/104.mp4",
      "poster": "media/104_poster.webp",
      "diagram": "media/104_diagram.mp4",
      "sideDiagram": "media/104_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "104",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "主体与相机行进时保持主体居中位置和水平地平线；不是锁相机位置。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        3,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        3,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "start": [
            0,
            0,
            0
          ],
          "end": [
            3,
            0,
            0
          ]
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "主体与相机行进时保持主体居中位置和水平地平线；不是锁相机位置。",
    "references": [
      {
        "title": "Film Analysis: Cinematography",
        "publisher": "Yale University",
        "url": "https://filmanalysis.yale.edu/cinematography/",
        "note": "教材说明小幅摇摄或俯仰调整构图，让移动主体保持入画或居中。",
        "verified": "2026-10-03"
      }
    ]
  },
  {
    "id": "105",
    "category": "构图与轴线",
    "categoryKey": "composition",
    "keywordsZh": "对象运动 / 二维运镜感",
    "keywordsEn": "Object Motion / Push-In Look / Screen-Space Translation",
    "title": "对象运动 / 二维运镜感 Object Motion / Push-In Look / Screen-Space Translation",
    "effect": "对象缩放、透视倾斜、平移也可像推拉或滚转",
    "conditions": "UI 样机、卡片、动效、转场",
    "unsuitable": "用成片外观反推“作者一定移动了相机”",
    "prompts": {
      "seedance": {
        "text": "The camera stays fixed; the device changes scale and orientation while its contents remain aligned.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      },
      "h3": {
        "text": "The camera stays fixed; the device changes scale and orientation while its contents remain aligned.",
        "evidence": [
          "未经验证"
        ],
        "note": "项目整理，未经模型生成验证。"
      }
    },
    "blender": "相机固定，用物体平面方块 / 对象旋转缩放加帧；内容保持相同对象空间",
    "confusable": "真 Dolly / Roll；黄白卡片环绕是卡片转，不是相机绕人",
    "relatedIds": [
      "034",
      "041",
      "047"
    ],
    "media": {
      "status": "ready",
      "kind": "video",
      "video": "media/105.mp4",
      "poster": "media/105_poster.webp",
      "diagram": "media/105_diagram.mp4",
      "sideDiagram": "media/105_side_diagram.mp4",
      "comparisons": [],
      "reason": ""
    },
    "render": {
      "mode": "video",
      "recipe": "105",
      "width": 960,
      "height": 540,
      "fps": 24,
      "frames": 96,
      "duration": 4.0,
      "diagram": {
        "enabled": true,
        "side": true
      },
      "note": "相机固定，代理对象自身移动/缩放/旋转形成运镜感；稳定环境证明驱动来自对象。",
      "engine": "WORKBENCH",
      "preserve_main": false,
      "camera_start": [
        0,
        -8,
        1
      ],
      "camera_end": [
        0,
        -8,
        1
      ],
      "target_start": [
        0,
        0,
        1
      ],
      "target_end": [
        0,
        0,
        1
      ],
      "lens_start": 40.0,
      "lens_end": 40.0,
      "roll_start": 0.0,
      "roll_end": 0.0,
      "actors": {
        "ACTOR_A": {
          "start": [
            0,
            0,
            0
          ],
          "end": [
            0,
            -3.5,
            0
          ],
          "turn_start": -0.12,
          "turn_end": 0.6
        }
      }
    },
    "review": {
      "uncertain": false,
      "reason": ""
    },
    "demoNote": "相机固定，代理对象自身移动/缩放/旋转形成运镜感；稳定环境证明驱动来自对象。"
  }
];
window.SHOT_META = {
  "categories": [
    {
      "key": "size",
      "label": "景别",
      "count": 10
    },
    {
      "key": "angle",
      "label": "机位角度",
      "count": 14
    },
    {
      "key": "lens",
      "label": "焦距",
      "count": 8
    },
    {
      "key": "movement",
      "label": "运镜",
      "count": 45
    },
    {
      "key": "focus",
      "label": "景深与对焦",
      "count": 8
    },
    {
      "key": "composition",
      "label": "构图与轴线",
      "count": 20
    }
  ],
  "comparisons": [
    {
      "title": "推拉 Dolly vs 变焦 Zoom",
      "ids": [
        "034",
        "035",
        "054"
      ],
      "note": "看近景与远景的相对大小、遮挡是否改变：推拉让近处变化更快并换了观察位置；固定机位变焦主要是同一视点收放取景。",
      "boundary": ""
    },
    {
      "title": "摇 Pan vs 横移 Truck",
      "ids": [
        "044",
        "036"
      ],
      "note": "看前后层是否错开：原地摇是一起转看另一方向，横移会使近景相对远景更快划过、显露新遮挡关系。",
      "boundary": "纯转动仍可能有透视投影变化，“没有任何形变”不是必要判据。"
    },
    {
      "title": "跟拍 Tracking vs 横移 Truck",
      "ids": [
        "038",
        "036"
      ],
      "note": "看主体是否与相机同行：并行跟拍通常主体位置 / 大小稳定而背景经过，纯横移拍站定主体时，主体也会往画面另一侧移。",
      "boundary": "两者能同时成立：侧向跟拍的相机路径就是横移。原地摇着追人也可保持人物入画，需再看视差。"
    },
    {
      "title": "滑动变焦 Dolly Zoom vs 普通推拉 / 变焦",
      "ids": [
        "057",
        "034",
        "054"
      ],
      "note": "看主体是否大小近似不变、背景却明显胀缩：这是相机距离与焦距反向配合的信号，单独缩放通常做不到。",
      "boundary": "后退 + 长焦让背景相对主体更大、更贴近，前进 + 短焦使背景相对变小、纵深更强。"
    },
    {
      "title": "俯仰 Tilt vs 升降 Pedestal",
      "ids": [
        "045",
        "037"
      ],
      "note": "看是否改变观看高度及顶面 / 遮挡：俯仰原地转视线，升降换高度，即使不转头也能越过前景。",
      "boundary": ""
    },
    {
      "title": "荷兰角 Dutch vs 滚转 Roll vs 环绕 Orbit",
      "ids": [
        "024",
        "047",
        "041"
      ],
      "note": "静态歪框是荷兰角，歪角持续变化是滚转，主体不同侧面和背景方位依次显露才是环绕。",
      "boundary": ""
    },
    {
      "title": "转焦 Rack Focus vs 变焦 Zoom / 模糊揭示",
      "ids": [
        "081",
        "054"
      ],
      "note": "看近远对象是否交换清晰、构图大小却基本保持：转焦移动清晰平面，变焦改取景，普通模糊恢复未必有距离交接。",
      "boundary": ""
    },
    {
      "title": "摄影机运动 vs 主体 / UI 动画",
      "ids": [
        "034",
        "047",
        "105"
      ],
      "note": "看稳定的环境参照、设备外框和内容层分别怎样动；对象自身缩放 / 转动也能产生运镜感，不能单靠观感判定驱动。",
      "boundary": ""
    }
  ],
  "phase": 2,
  "generatedAt": "2026-10-02T10:31:26+00:00",
  "pilotIds": [
    "033",
    "034",
    "054",
    "036",
    "044"
  ],
  "total": 105,
  "mediaCounts": {
    "ready": 104,
    "unavailable": 1
  },
  "disclaimer": "演示视频是 Blender 原理示意，不是模型生成的结果。标为“未经验证”的提示词没有做过生成测试。",
  "promptLegend": {
    "官方指南": "官方原文明确列举；不等于本项目已生成验证。",
    "未经验证": "改写、翻译、组合或跨模型迁移；没有提交生成测试。"
  },
  "overviews": [
    {
      "key": "lens",
      "label": "同景别焦距对照",
      "title": "同景别焦距对照",
      "image": "media/lens_overview.webp",
      "ids": [
        "025",
        "026",
        "027",
        "028",
        "029",
        "030",
        "031",
        "032"
      ],
      "items": [
        {
          "label": "24mm",
          "focalLength": 24,
          "cameraDistance": 3.84,
          "image": "media/lens_24.webp"
        },
        {
          "label": "35mm",
          "focalLength": 35,
          "cameraDistance": 5.6,
          "image": "media/lens_35.webp"
        },
        {
          "label": "50mm",
          "focalLength": 50,
          "cameraDistance": 8.0,
          "image": "media/lens_50.webp"
        },
        {
          "label": "85mm",
          "focalLength": 85,
          "cameraDistance": 13.6,
          "image": "media/lens_85.webp"
        },
        {
          "label": "135mm",
          "focalLength": 135,
          "cameraDistance": 21.6,
          "image": "media/lens_135.webp"
        }
      ],
      "note": "24/35/50/85/135mm 配合调整相机距离，保持主体大小；相机距离分别为3.84/5.6/8/13.6/21.6米，展示背景透视关系。",
      "status": "ready"
    },
    {
      "key": "size",
      "label": "固定机位的景别对照",
      "title": "固定机位的景别对照",
      "image": "media/size_overview.webp",
      "ids": [
        "001",
        "002",
        "003",
        "004",
        "005",
        "006",
        "007",
        "008",
        "009",
        "010"
      ],
      "items": [
        {
          "id": "001",
          "image": "media/001_poster.webp"
        },
        {
          "id": "002",
          "image": "media/002_poster.webp"
        },
        {
          "id": "003",
          "image": "media/003_poster.webp"
        },
        {
          "id": "004",
          "image": "media/004_poster.webp"
        },
        {
          "id": "005",
          "image": "media/005_poster.webp"
        },
        {
          "id": "006",
          "image": "media/006_poster.webp"
        },
        {
          "id": "007",
          "image": "media/007_poster.webp"
        },
        {
          "id": "008",
          "image": "media/008_poster.webp"
        },
        {
          "id": "009",
          "image": "media/009_poster.webp"
        },
        {
          "id": "010",
          "image": "media/010_poster.webp"
        }
      ],
      "note": "同一真实透视机位与50mm光学焦距，以有效画框等效数字裁切展示景别范围；不是移动相机或改变光学焦距。",
      "status": "ready"
    }
  ],
  "additionalComparisons": [
    {
      "title": "环绕 vs 摇摄",
      "ids": [
        "041",
        "044"
      ],
      "note": "同起幅比较：环绕换相机位置与观察侧面，摇摄固定机位只转方向。"
    },
    {
      "title": "转焦 vs 摇摄",
      "ids": [
        "081",
        "044"
      ],
      "note": "同相机位置与起幅：转焦开启景深交换清晰距离层，摇摄保持深景深转看方向；光学模式不同需一起读。"
    }
  ]
};
