/* Generated from the read-only feelings index. */
window.FEELINGS = {
  "version": 1,
  "r2v_hint_zh": "用导演台导出这组镜头的白模后：上传白模，把提示词里描述运镜的句子换成「参考 @白模 1 的运镜、镜头节奏、景别变化、主体轨迹和镜头调度」，其余保留。",
  "r2v_hint_en": "After exporting the blockout from the director stage, upload it and replace the camera-movement sentence with \"Use @blockout 1 as the reference for camera movement, shot rhythm, shot-size changes, subject trajectory and blocking\", keeping the rest.",
  "feelings": [
    {
      "key": "oppressed",
      "name_zh": "压迫 · 喘不过气",
      "name_en": "Oppressed",
      "desc_zh": "角色被逼到绝境，观众也跟着透不过气",
      "picks": {
        "size": {
          "id": "009",
          "name": "面部紧特写",
          "why_zh": "脸占满画面，没有退路"
        },
        "angle": {
          "id": "012",
          "name": "俯拍",
          "why_zh": "略微俯拍，人物被压低"
        },
        "lens": {
          "id": "029",
          "name": "长焦 / 长焦压缩",
          "why_zh": "长焦压缩，背景贴上来"
        },
        "movement": {
          "id": "073",
          "name": "变速推进",
          "why_zh": "由慢到快地推近，逼近感越来越强"
        },
        "focus": {
          "id": "078",
          "name": "浅景深",
          "why_zh": "只留眼睛清晰，四周糊掉"
        },
        "composition": {
          "id": "094",
          "name": "框中框",
          "why_zh": "门框把人困在中间"
        }
      },
      "alternatives": [
        {
          "id": "066",
          "name": "螺旋",
          "why_zh": "螺旋向内逼近，压迫更强"
        },
        {
          "id": "056",
          "name": "脉冲变焦",
          "why_zh": "脉冲变焦，配合心跳或鼓点"
        }
      ],
      "prompt": {
        "zh": "【场景】中，【主角】被逼到角落，呼吸急促。面部紧特写，略微俯拍；长焦压缩让背景紧贴主角；相机由慢到快地推近；浅景深，只有眼睛清晰；门框把主角困在画面中央。",
        "en": "In [scene], [character] is cornered, breathing hard. Tight facial close-up from a slightly high angle; a long lens compresses the background against the character; the camera pushes in, slow at first and then faster; shallow depth of field with only the eyes in focus; a door frame traps the character in the center of the frame."
      }
    },
    {
      "key": "realization",
      "name_zh": "恍然大悟 · 震惊",
      "name_en": "Realization",
      "desc_zh": "角色意识到真相的那一下，世界仿佛在身后塌缩",
      "picks": {
        "size": {
          "id": "007",
          "name": "中近景",
          "why_zh": "肩胸以上，表情和一点身体反应"
        },
        "angle": {
          "id": "011",
          "name": "平视",
          "why_zh": "平视，观众和他同时“懂了”"
        },
        "lens": {
          "id": "028",
          "name": "人像中长焦",
          "why_zh": "中长焦起步，滑动变焦时继续拉长"
        },
        "movement": {
          "id": "057",
          "name": "滑动变焦",
          "why_zh": "滑动变焦：人不变，背景压过来"
        },
        "focus": {
          "id": "080",
          "name": "主体 / 眼部持续对焦",
          "why_zh": "始终对焦在眼睛"
        },
        "composition": {
          "id": "086",
          "name": "主体居中 / 展示构图",
          "why_zh": "居中，让变化只发生在背景"
        }
      },
      "alternatives": [
        {
          "id": "055",
          "name": "快速变焦",
          "why_zh": "快速变焦，更有喜剧或冲击感"
        },
        {
          "id": "082",
          "name": "急转焦",
          "why_zh": "急转焦，从线索突然切到人物"
        }
      ],
      "prompt": {
        "zh": "【主角】站在【场景】中，突然意识到真相，表情从疑惑变为震惊。中近景，平视，主角居中；滑动变焦：相机后退同时增加焦距，主角头肩大小保持不变，背景越来越大、向主角压过来；对焦始终在眼睛上。",
        "en": "[character] stands in [scene] and suddenly realizes the truth; the expression shifts from confusion to shock. Medium close-up at eye level, character centered; dolly zoom: the camera pulls back while the focal length increases, keeping the head and shoulders the same size as the background grows and closes in; focus stays on the eyes."
      }
    },
    {
      "key": "lonely",
      "name_zh": "孤独 · 渺小",
      "name_en": "Loneliness",
      "desc_zh": "人在世界里很小，没人看见他",
      "picks": {
        "size": {
          "id": "001",
          "name": "大远景 / 极远景",
          "why_zh": "人物很小，环境占满画面"
        },
        "angle": {
          "id": "015",
          "name": "鸟瞰",
          "why_zh": "高处俯览，人只是一个点"
        },
        "lens": {
          "id": "026",
          "name": "广角 / 广角空间",
          "why_zh": "广角，把空旷都装进来"
        },
        "movement": {
          "id": "035",
          "name": "拉远",
          "why_zh": "慢慢拉远，人越来越小"
        },
        "focus": {
          "id": "079",
          "name": "深景深 / 深焦",
          "why_zh": "全景清晰，环境和人一样重要"
        },
        "composition": {
          "id": "089",
          "name": "留白",
          "why_zh": "大面积留白"
        }
      },
      "alternatives": [
        {
          "id": "059",
          "name": "航拍 / 无人机",
          "why_zh": "航拍升起，更开阔"
        },
        {
          "id": "033",
          "name": "固定镜头",
          "why_zh": "固定不动，让孤独停在那里"
        }
      ],
      "prompt": {
        "zh": "【场景】空旷辽阔，【主角】独自一人站在画面一角。大远景，高处俯瞰；广角镜头；相机缓慢向后拉远，主角越来越小；深景深，环境处处清晰；画面大面积留白。",
        "en": "[scene] is vast and empty; [character] stands alone in one corner of the frame. Extreme wide shot from high above; wide-angle lens; the camera slowly pulls back as the character grows smaller; deep focus, the environment sharp throughout; large areas of negative space."
      }
    },
    {
      "key": "epic",
      "name_zh": "宏大 · 史诗",
      "name_en": "Epic Scale",
      "desc_zh": "从一个人升起，看见整个世界的格局",
      "picks": {
        "size": {
          "id": "002",
          "name": "远景 / 环境全景",
          "why_zh": "人和环境都看得清"
        },
        "angle": {
          "id": "011",
          "name": "平视",
          "why_zh": "从平视起，升起后变成俯瞰"
        },
        "lens": {
          "id": "026",
          "name": "广角 / 广角空间",
          "why_zh": "广角，容得下全景"
        },
        "movement": {
          "id": "058",
          "name": "摇臂 / 吊臂",
          "why_zh": "摇臂升起，从个人到格局"
        },
        "focus": {
          "id": "079",
          "name": "深景深 / 深焦",
          "why_zh": "前后都清楚"
        },
        "composition": {
          "id": "087",
          "name": "对称构图",
          "why_zh": "对称，庄重有秩序"
        }
      },
      "alternatives": [
        {
          "id": "059",
          "name": "航拍 / 无人机",
          "why_zh": "航拍越过人物，揭示全场"
        },
        {
          "id": "097",
          "name": "建立镜头",
          "why_zh": "建立镜头的构图思路"
        }
      ],
      "prompt": {
        "zh": "【主角】站在【场景】前方，背对镜头。远景，平视起幅；广角镜头；相机沿宽阔弧线向后上方升起，逐渐揭示整片【场景】的规模；深景深；对称构图，庄重宏大。",
        "en": "[character] stands before [scene], back to camera. Wide shot starting at eye level; wide-angle lens; the camera rises up and back in a broad arc, gradually revealing the full scale of [scene]; deep focus; symmetrical, grand and solemn composition."
      }
    },
    {
      "key": "heroic",
      "name_zh": "英雄 · 力量",
      "name_en": "Heroic Power",
      "desc_zh": "角色高大、强悍，值得仰望",
      "picks": {
        "size": {
          "id": "003",
          "name": "全身景 / 全景",
          "why_zh": "全身入画，姿态完整"
        },
        "angle": {
          "id": "013",
          "name": "仰拍",
          "why_zh": "仰拍，人比天还高"
        },
        "lens": {
          "id": "025",
          "name": "超广角",
          "why_zh": "超广角，近大远小更夸张"
        },
        "movement": {
          "id": "041",
          "name": "环绕",
          "why_zh": "环绕，展示他的每一面"
        },
        "focus": {
          "id": "078",
          "name": "浅景深",
          "why_zh": "背景虚化，只看他"
        },
        "composition": {
          "id": "086",
          "name": "主体居中 / 展示构图",
          "why_zh": "居中，唯一的主角"
        }
      },
      "alternatives": [
        {
          "id": "014",
          "name": "虫视 / 极低仰拍",
          "why_zh": "虫视，更夸张的仰角"
        },
        {
          "id": "034",
          "name": "移动摄影镜头·推近",
          "why_zh": "慢慢推近，力量感累积"
        }
      ],
      "prompt": {
        "zh": "【主角】站在【场景】中央，姿态坚定。全身景，低机位仰拍，背后是天空；超广角镜头；相机绕主角缓慢环绕半圈，主角始终居中；浅景深，背景柔化。",
        "en": "[character] stands firmly at the center of [scene]. Full shot from a low angle against the sky; ultra-wide lens; the camera slowly orbits half a circle around the character, who stays centered; shallow depth of field, background softened."
      }
    },
    {
      "key": "suspense",
      "name_zh": "悬念 · 走向未知",
      "name_en": "Into the Unknown",
      "desc_zh": "跟着他往前走，不知道前面有什么",
      "picks": {
        "size": {
          "id": "004",
          "name": "中全景",
          "why_zh": "膝上，能看到走路姿态和前方"
        },
        "angle": {
          "id": "020",
          "name": "背面",
          "why_zh": "背面，脸被藏起来"
        },
        "lens": {
          "id": "026",
          "name": "广角 / 广角空间",
          "why_zh": "广角，前方空间更深"
        },
        "movement": {
          "id": "040",
          "name": "背后跟随",
          "why_zh": "背后跟随"
        },
        "focus": {
          "id": "079",
          "name": "深景深 / 深焦",
          "why_zh": "前方的路也看得清"
        },
        "composition": {
          "id": "093",
          "name": "引导线",
          "why_zh": "通道把视线引向远处"
        }
      },
      "alternatives": [
        {
          "id": "023",
          "name": "主观移动",
          "why_zh": "主观移动，直接变成他的眼睛"
        },
        {
          "id": "073",
          "name": "变速推进",
          "why_zh": "越走越快，紧张升级"
        }
      ],
      "prompt": {
        "zh": "【主角】沿着【场景】中的通道向深处走去。中全景，从背后拍摄，看不到脸；广角镜头；相机在主角身后保持距离跟随；深景深，前方的路清晰可见；通道两侧的线条把视线引向远方。",
        "en": "[character] walks deeper into a passage in [scene]. Medium-wide shot from behind, face hidden; wide-angle lens; the camera follows at a steady distance behind; deep focus, the path ahead clearly visible; the lines of the passage lead the eye into the distance."
      }
    },
    {
      "key": "unease",
      "name_zh": "不安 · 失衡",
      "name_en": "Unease",
      "desc_zh": "哪里不对劲，但说不上来",
      "picks": {
        "size": {
          "id": "007",
          "name": "中近景",
          "why_zh": "看得到表情的细微变化"
        },
        "angle": {
          "id": "024",
          "name": "荷兰角",
          "why_zh": "荷兰角，地平线是歪的"
        },
        "lens": {
          "id": "027",
          "name": "标准焦段",
          "why_zh": "标准焦段，不刻意夸张"
        },
        "movement": {
          "id": "068",
          "name": "手持",
          "why_zh": "手持，轻微晃动"
        },
        "focus": {
          "id": "085",
          "name": "焦点游移 / 焦点搜索",
          "why_zh": "焦点轻微游移，看不稳"
        },
        "composition": {
          "id": "092",
          "name": "前中后景层次",
          "why_zh": "前景有遮挡，像被什么隔着"
        }
      },
      "alternatives": [
        {
          "id": "047",
          "name": "滚转",
          "why_zh": "滚转，更强的失衡"
        },
        {
          "id": "056",
          "name": "脉冲变焦",
          "why_zh": "脉冲变焦"
        }
      ],
      "prompt": {
        "zh": "【主角】在【场景】中环顾四周，神情不安。中近景，画面倾斜（荷兰角）；标准焦段；手持拍摄，轻微晃动；焦点轻微来回游移；前景有模糊的遮挡物。",
        "en": "[character] glances around [scene], uneasy. Medium close-up with a tilted Dutch angle; normal lens; handheld with slight drift; focus wanders slightly back and forth; a blurred object partly blocks the foreground."
      }
    },
    {
      "key": "voyeur",
      "name_zh": "窥视 · 偷看",
      "name_en": "Being Watched",
      "desc_zh": "好像有人躲在远处看着他",
      "picks": {
        "size": {
          "id": "006",
          "name": "中景",
          "why_zh": "腰部以上，像远远看到的"
        },
        "angle": {
          "id": "011",
          "name": "平视",
          "why_zh": "平视，躲在人群高度"
        },
        "lens": {
          "id": "030",
          "name": "超长焦",
          "why_zh": "超长焦，隔得很远"
        },
        "movement": {
          "id": "071",
          "name": "前景擦过",
          "why_zh": "前景擦过，像躲在东西后面"
        },
        "focus": {
          "id": "078",
          "name": "浅景深",
          "why_zh": "前景糊、他清楚"
        },
        "composition": {
          "id": "094",
          "name": "框中框",
          "why_zh": "从门窗缝隙里看"
        }
      },
      "alternatives": [
        {
          "id": "036",
          "name": "横移",
          "why_zh": "横移，像在街对面平行跟着"
        },
        {
          "id": "092",
          "name": "前中后景层次",
          "why_zh": "前中后景层次"
        }
      ],
      "prompt": {
        "zh": "远处的【主角】坐在【场景】里，毫不知情。中景，平视；超长焦，像从很远处偷看；前景有人或物短暂擦过画面；浅景深，前景模糊、主角清晰；透过窗框看向主角。",
        "en": "In the distance, [character] sits in [scene], unaware. Medium shot at eye level; super-telephoto, as if watched from far away; people or objects briefly wipe across the foreground; shallow depth of field, foreground blurred and character sharp; framed through a window."
      }
    },
    {
      "key": "chase",
      "name_zh": "紧张 · 追逐",
      "name_en": "Urgency & Chase",
      "desc_zh": "来不及了，必须跑",
      "picks": {
        "size": {
          "id": "004",
          "name": "中全景",
          "why_zh": "看得到奔跑的动作"
        },
        "angle": {
          "id": "019",
          "name": "侧面 / 侧脸",
          "why_zh": "侧面，方向感最清楚"
        },
        "lens": {
          "id": "026",
          "name": "广角 / 广角空间",
          "why_zh": "广角，速度感更强"
        },
        "movement": {
          "id": "050",
          "name": "追逐",
          "why_zh": "追逐，距离忽远忽近"
        },
        "focus": {
          "id": "080",
          "name": "主体 / 眼部持续对焦",
          "why_zh": "跑起来也对焦在人"
        },
        "composition": {
          "id": "091",
          "name": "视线 / 行进余量",
          "why_zh": "前方留出奔跑空间"
        }
      },
      "alternatives": [
        {
          "id": "068",
          "name": "手持",
          "why_zh": "手持，更慌乱"
        },
        {
          "id": "046",
          "name": "甩镜",
          "why_zh": "甩镜，转向追兵"
        }
      ],
      "prompt": {
        "zh": "【主角】在【场景】中全力奔跑。中全景，侧面跟拍；广角镜头；相机快速跟随，距离忽远忽近；对焦始终锁定主角；主角前方留出空间。",
        "en": "[character] sprints flat out through [scene]. Medium-wide shot tracking from the side; wide-angle lens; the camera follows fast, the distance changing; focus locked on the character; space left ahead of the character."
      }
    },
    {
      "key": "romance",
      "name_zh": "心动 · 浪漫",
      "name_en": "Romance",
      "desc_zh": "时间慢下来，眼里只有对方",
      "picks": {
        "size": {
          "id": "007",
          "name": "中近景",
          "why_zh": "看得清眼神和表情"
        },
        "angle": {
          "id": "018",
          "name": "斜侧面 / 四分之三视角",
          "why_zh": "四分之三侧脸，最柔和的角度"
        },
        "lens": {
          "id": "028",
          "name": "人像中长焦",
          "why_zh": "人像中长焦，脸部比例好看"
        },
        "movement": {
          "id": "042",
          "name": "弧线",
          "why_zh": "缓慢弧线，绕到侧前"
        },
        "focus": {
          "id": "078",
          "name": "浅景深",
          "why_zh": "背景化成柔光"
        },
        "composition": {
          "id": "088",
          "name": "三分法",
          "why_zh": "三分法，给视线留空间"
        }
      },
      "alternatives": [
        {
          "id": "041",
          "name": "环绕",
          "why_zh": "完整环绕，适合两人对视"
        },
        {
          "id": "076",
          "name": "构图停留",
          "why_zh": "最后停住，让情绪停留"
        }
      ],
      "prompt": {
        "zh": "【主角】在【场景】中望向画外的心上人，嘴角微微上扬。中近景，四分之三侧脸；人像中长焦；相机沿缓慢的弧线从侧面绕到侧前方；浅景深，背景化成柔和光斑；三分法构图，视线方向留出空间。",
        "en": "[character] in [scene] looks toward a loved one off-screen, a slight smile forming. Medium close-up, three-quarter profile; portrait telephoto lens; the camera moves in a slow arc from the side to the front-side; shallow depth of field, background melting into soft bokeh; rule-of-thirds framing with room in the direction of the gaze."
      }
    },
    {
      "key": "speed",
      "name_zh": "速度 · 爽感",
      "name_en": "Speed Rush",
      "desc_zh": "贴着地面飞过去，肾上腺素拉满",
      "picks": {
        "size": {
          "id": "002",
          "name": "远景 / 环境全景",
          "why_zh": "看得到路线和环境"
        },
        "angle": {
          "id": "011",
          "name": "平视",
          "why_zh": "贴地平视"
        },
        "lens": {
          "id": "025",
          "name": "超广角",
          "why_zh": "超广角，速度感最强"
        },
        "movement": {
          "id": "060",
          "name": "FPV / 第一人称飞行",
          "why_zh": "FPV 高速穿行"
        },
        "focus": {
          "id": "079",
          "name": "深景深 / 深焦",
          "why_zh": "一路都清楚"
        },
        "composition": {
          "id": "093",
          "name": "引导线",
          "why_zh": "道路线条冲向远方"
        }
      },
      "alternatives": [
        {
          "id": "064",
          "name": "掠过",
          "why_zh": "掠过，越过主体后甩在身后"
        },
        {
          "id": "061",
          "name": "俯冲",
          "why_zh": "俯冲"
        }
      ],
      "prompt": {
        "zh": "第一人称视角高速穿越【场景】，贴近地面飞行，转弯时画面侧倾，最后拉升。远景；超广角；深景深；道路和建筑的线条冲向前方。",
        "en": "A first-person FPV flight races through [scene], skimming the ground, banking into turns, then pulling up. Wide shot; ultra-wide lens; deep focus; the lines of the road and buildings rush toward the horizon."
      }
    },
    {
      "key": "dizzy",
      "name_zh": "眩晕 · 崩溃",
      "name_en": "Vertigo & Breakdown",
      "desc_zh": "天旋地转，撑不住了",
      "picks": {
        "size": {
          "id": "009",
          "name": "面部紧特写",
          "why_zh": "脸占满画面"
        },
        "angle": {
          "id": "024",
          "name": "荷兰角",
          "why_zh": "荷兰角，天地倾斜"
        },
        "lens": {
          "id": "028",
          "name": "人像中长焦",
          "why_zh": "中长焦，变焦时收得更紧"
        },
        "movement": {
          "id": "052",
          "name": "环绕变焦",
          "why_zh": "环绕变焦：背景旋转、画面收紧"
        },
        "focus": {
          "id": "085",
          "name": "焦点游移 / 焦点搜索",
          "why_zh": "焦点游移，看不清"
        },
        "composition": {
          "id": "086",
          "name": "主体居中 / 展示构图",
          "why_zh": "居中，只有他在转"
        }
      },
      "alternatives": [
        {
          "id": "047",
          "name": "滚转",
          "why_zh": "滚转，画面整个翻过去"
        },
        {
          "id": "057",
          "name": "滑动变焦",
          "why_zh": "滑动变焦"
        }
      ],
      "prompt": {
        "zh": "【主角】站在【场景】中，摇摇欲坠，眼神失焦。面部紧特写，画面倾斜；中长焦；相机以恒定半径绕主角旋转，同时增加焦距、画面收紧；焦点轻微游移；主角始终居中。",
        "en": "[character] stands in [scene], swaying, eyes losing focus. Tight close-up with a tilted frame; medium telephoto lens; the camera orbits at a constant radius while increasing the focal length, tightening the frame; focus drifts slightly; the character stays centered."
      }
    },
    {
      "key": "threat",
      "name_zh": "危险逼近 · 捕食者",
      "name_en": "Incoming Threat",
      "desc_zh": "有什么东西正从上面扑过来",
      "picks": {
        "size": {
          "id": "002",
          "name": "远景 / 环境全景",
          "why_zh": "地面上的目标很小"
        },
        "angle": {
          "id": "015",
          "name": "鸟瞰",
          "why_zh": "从高空俯视"
        },
        "lens": {
          "id": "026",
          "name": "广角 / 广角空间",
          "why_zh": "广角，纵深更大"
        },
        "movement": {
          "id": "061",
          "name": "俯冲",
          "why_zh": "俯冲，从高处直扑下来"
        },
        "focus": {
          "id": "079",
          "name": "深景深 / 深焦",
          "why_zh": "一路清晰"
        },
        "composition": {
          "id": "093",
          "name": "引导线",
          "why_zh": "地面线条指向目标"
        }
      },
      "alternatives": [
        {
          "id": "059",
          "name": "航拍 / 无人机",
          "why_zh": "航拍盘旋，像在锁定猎物"
        },
        {
          "id": "073",
          "name": "变速推进",
          "why_zh": "变速推进"
        }
      ],
      "prompt": {
        "zh": "从高空俯瞰【场景】，地面上的【主角】毫不知情。远景，鸟瞰；广角；相机从高处快速俯冲向主角，接近地面时放平；深景深；地面的道路线条指向主角。",
        "en": "Looking down on [scene] from high above, [character] on the ground is unaware. Wide shot, bird's-eye view; wide-angle lens; the camera dives fast from altitude toward the character and levels out near the ground; deep focus; road lines on the ground point toward the character."
      }
    },
    {
      "key": "reveal",
      "name_zh": "揭示 · 原来如此",
      "name_en": "The Reveal",
      "desc_zh": "先看到他的反应，再看到他看见了什么",
      "picks": {
        "size": {
          "id": "006",
          "name": "中景",
          "why_zh": "先看清人物的反应"
        },
        "angle": {
          "id": "011",
          "name": "平视",
          "why_zh": "平视，跟随他的视线"
        },
        "lens": {
          "id": "026",
          "name": "广角 / 广角空间",
          "why_zh": "广角，摇过去能装下要揭示的东西"
        },
        "movement": {
          "id": "048",
          "name": "揭示摇镜",
          "why_zh": "揭示摇镜"
        },
        "focus": {
          "id": "081",
          "name": "转焦 / 移焦",
          "why_zh": "从人物转焦到被揭示的对象"
        },
        "composition": {
          "id": "091",
          "name": "视线 / 行进余量",
          "why_zh": "视线方向留空间，暗示画外有东西"
        }
      },
      "alternatives": [
        {
          "id": "044",
          "name": "水平摇摄",
          "why_zh": "水平摇摄"
        },
        {
          "id": "049",
          "name": "倾斜揭示",
          "why_zh": "倾斜揭示，上下方向"
        }
      ],
      "prompt": {
        "zh": "【主角】在【场景】中停下脚步，望向画外，表情凝固。中景，平视；广角；相机顺着主角的视线摇过去，【被揭示的对象】在最后才完整入画；对焦从主角转移到被揭示的对象；起幅时主角视线方向留出空间。",
        "en": "[character] stops in [scene] and stares off-screen, expression frozen. Medium shot at eye level; wide-angle lens; the camera pans along the character's eyeline, and [revealed subject] only fully enters frame at the end; focus shifts from the character to the revealed subject; the opening frame leaves space in the direction of the gaze."
      }
    },
    {
      "key": "ritual",
      "name_zh": "庄严 · 仪式",
      "name_en": "Solemn Ritual",
      "desc_zh": "郑重、有秩序，像典礼一样",
      "picks": {
        "size": {
          "id": "003",
          "name": "全身景 / 全景",
          "why_zh": "全身入画，姿态完整"
        },
        "angle": {
          "id": "017",
          "name": "正面",
          "why_zh": "正面，直面观众"
        },
        "lens": {
          "id": "027",
          "name": "标准焦段",
          "why_zh": "标准焦段，克制"
        },
        "movement": {
          "id": "034",
          "name": "移动摄影镜头·推近",
          "why_zh": "极慢地推近"
        },
        "focus": {
          "id": "079",
          "name": "深景深 / 深焦",
          "why_zh": "整个空间都清楚"
        },
        "composition": {
          "id": "087",
          "name": "对称构图",
          "why_zh": "严格对称"
        }
      },
      "alternatives": [
        {
          "id": "033",
          "name": "固定镜头",
          "why_zh": "完全固定"
        },
        {
          "id": "058",
          "name": "摇臂 / 吊臂",
          "why_zh": "摇臂缓缓升起"
        }
      ],
      "prompt": {
        "zh": "【主角】在【场景】中央正面站立，神情肃穆。全身景，正面平视；标准焦段；相机极其缓慢地推近；深景深；严格的中轴对称构图。",
        "en": "[character] stands facing the camera at the center of [scene], solemn. Full shot, frontal, eye level; normal lens; the camera pushes in extremely slowly; deep focus; strict central symmetry."
      }
    },
    {
      "key": "farewell",
      "name_zh": "告别 · 结尾",
      "name_en": "Farewell & Ending",
      "desc_zh": "故事结束，人留在原地，镜头离开",
      "picks": {
        "size": {
          "id": "003",
          "name": "全身景 / 全景",
          "why_zh": "从全身开始"
        },
        "angle": {
          "id": "012",
          "name": "俯拍",
          "why_zh": "俯拍，人慢慢变小"
        },
        "lens": {
          "id": "026",
          "name": "广角 / 广角空间",
          "why_zh": "广角"
        },
        "movement": {
          "id": "035",
          "name": "拉远",
          "why_zh": "慢慢拉远"
        },
        "focus": {
          "id": "079",
          "name": "深景深 / 深焦",
          "why_zh": "环境逐渐清楚"
        },
        "composition": {
          "id": "089",
          "name": "留白",
          "why_zh": "最后大量留白"
        }
      },
      "alternatives": [
        {
          "id": "058",
          "name": "摇臂 / 吊臂",
          "why_zh": "摇臂降下或升起离开"
        },
        {
          "id": "076",
          "name": "构图停留",
          "why_zh": "最后停住，给观众时间"
        }
      ],
      "prompt": {
        "zh": "【主角】站在【场景】中，目送远去的身影。全身景，略微俯拍；广角；相机缓慢向后拉远并略微升高，主角越来越小；深景深；结尾画面大面积留白。",
        "en": "[character] stands in [scene], watching someone leave. Full shot from a slightly high angle; wide-angle lens; the camera slowly pulls back and rises a little as the character grows smaller; deep focus; the final frame is mostly negative space."
      }
    }
  ]
};
