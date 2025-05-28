// 页面切换逻辑
document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
});

// 答案数据
const answers = {
    1: "选择听从你的内心\nChoose to listen to your heart",
    2: "忍耐任由风雨过\nEndure and let the storm pass",
    3: "守得云开见月明\nAfter the clouds disperse, the moon will shine",
    4: "若无闲事心头挂便是人间好时节\nIf there's nothing weighing on your mind, it's the best time of life",
    5: "别依靠不能依靠的人\nDon't rely on those who can't be relied upon",
    6: "何不把苦当磨练\nWhy not take hardship as training",
    7: "有求皆苦，无求乃乐\nDesire brings suffering, no desire brings joy",
    8: "细节决定成败\nDetails determine success or failure",
    9: "态度决定一切\nAttitude determines everything",
    10: "你又要失眠了\nYou're going to have insomnia again",
    11: "加把劲\nPut in more effort",
    12: "你想得太多了\nYou're thinking too much",
    13: "专心点\nFocus",
    14: "你自己信吗\nDo you believe in yourself",
    15: "理解你自己最重要\nUnderstanding yourself is the most important",
    16: "不要着急\nDon't rush",
    17: "不要怕麻烦\nDon't be afraid of trouble",
    18: "积极面对\nFace things positively",
    19: "有点担心\nA little worried",
    20: "需要男性好友的意见\nNeed a male friend's opinion",
    21: "需要女性好友的意见\nNeed a female friend's opinion",
    22: "问问父母，他们走过的桥多\nAsk your parents how many bridges they've crossed",
    23: "霸王硬上弓\nForce things",
    24: "软磨硬泡\nWear someone down",
    25: "只要功夫深，铁杵磨成针\nWith enough effort, even a needle can be bent",
    26: "现在不做，更待何时\nWhat's the point of waiting",
    27: "值得一试\nIt's worth a try",
    28: "保持冷静\nKeep calm",
    29: "别过度解读\nDon't over-interpret",
    30: "顺其自然\nLet things be",
    31: "学会拒绝\nLearn to say no",
    32: "别自欺欺人\nDon't deceive yourself",
    33: "量力而行\nAct within your capabilities",
    34: "别钻牛角尖\nDon't get stuck in a corner",
    35: "换个角度想想\nThink from a different angle",
    36: "这不是你的责任\nIt's not your responsibility",
    37: "接受不完美\nAccept imperfection",
    38: "先睡一觉再说\nSleep first, then talk",
    39: "需要更多信息\nNeed more information",
    40: "答案在镜子里\nThe answer is in the mirror",
    41: "放下执念\nPut aside your obsession",
    42: "机会在敲门\nOpportunity is knocking",
    43: "别把运气当实力\nDon't take luck for strength",
    44: "沉默是金\nSilence is golden",
    45: "三思而后行\nThink three times before acting",
    46: "别为小事纠结\nDon't get stuck on small matters",
    47: "相信直觉\nTrust your intuition",
    48: "学会等待\nLearn to wait",
    49: "及时止损\nCut losses when you can",
    50: "别怕孤独\nDon't be afraid of loneliness",
    51: "化敌为友\nTurn enemies into friends",
    52: "承认错误\nAdmit your mistakes",
    53: "别比较\nDon't compare",
    54: "珍惜当下\nCherish the present",
    55: "别怕改变\nDon't be afraid of change",
    56: "需要专业帮助\nNeed professional help",
    57: "别越界\nDon't cross the line",
    58: "一天一天一天\nOne day after another",
    59: "别过度承诺\nDon't over-promise",
    60: "给自己留退路\nLeave a way out for yourself",
    61: "别贴标签\nDon't label",
    62: "学会分享\nLearn to share",
    63: "别怕说不\nDon't be afraid to say no",
    64: "警惕甜言蜜语\nBe wary of sweet words",
    65: "别找借口\nDon't make excuses",
    66: "承认恐惧\nAdmit your fear",
    67: "别过度分析\nDon't over-analyze",
    68: "接受差异\nAccept differences",
    69: "别追求绝对公平\nDon't pursue absolute fairness",
    70: "保持幽默感\nKeep a sense of humor",
    71: "别重复错误\nDon't repeat mistakes",
    72: "学会独处\nLearn to be alone",
    73: "别为过去后悔\nDon't regret the past",
    74: "控制情绪\nControl your emotions",
    75: "别传播负能量\nDon't spread negative energy",
    76: "学会倾听\nLearn to listen",
    77: "一天一天一天\nOne day after another",
    78: "别急于下结论\nDon't rush to conclusions",
    79: "接受批评\nAccept criticism",
    80: "别贪心\nDon't be greedy",
    81: "保持好奇心\nKeep curiosity",
    82: "别怕提问\nDon't be afraid to ask",
    83: "承认无知\nAdmit ignorance",
    84: "别迷信权威\nDon't rely on authority",
    85: "保持平衡\nKeep balance",
    86: "别逃避现实\nDon't escape reality",
    87: "一天一天一天\nOne day after another",
    88: "别怕冲突\nDon't be afraid of conflict",
    89: "接受不确定\nAccept uncertainty",
    90: "别拖延\nDon't delay",
    91: "保持简单\nKeep it simple",
    92: "别过度依赖\nDon't rely too much",
    93: "承认弱点\nAdmit your weaknesses",
    94: "别怕被拒绝\nDon't be afraid to be rejected",
    95: "保持开放心态\nKeep an open mind",
    96: "别固守己见\nDon't stick to your own opinions",
    97: "接受帮助\nAccept help",
    98: "别怕尝试\nDon't be afraid to try",
    99: "保持耐心\nKeep patience",
    100: "别怕失败\nDon't be afraid of failure",
    528: "保守你的秘密\nKeep your secret",
    529: "本页前第一个答案\nThe first answer is in front of this page",
    530: "采取冒险的态度\nTake a risky attitude",
    101: "承认需求\nAdmit your needs",
    102: "别怕不同\nDon't be afraid of differences",
    103: "保持真诚\nKeep sincere",
    104: "别怕质疑\nDon't be afraid to question",
    105: "接受成长\nAccept growth",
    106: "别怕冒险\nDon't be afraid to take risks",
    107: "保持谦逊\nKeep humility",
    108: "别怕改变主意\nDon't be afraid to change your mind",
    109: "接受挑战\nAccept challenges",
    110: "别怕说'我不知道'\nDon't be afraid to say 'I don't know'",
    111: "保持灵活性\nKeep flexibility",
    112: "别怕被误解\nDon't be afraid of being misunderstood",
    113: "接受复杂性\nAccept complexity",
    114: "别怕做决定\nDon't be afraid to make decisions",
    115: "保持希望\nKeep hope",
    116: "别怕放手\nDon't be afraid to let go",
    117: "接受简单\nAccept simplicity",
    118: "别怕复杂\nDon't be afraid of complexity",
    119: "保持专注\nKeep focused",
    120: "别怕偏离计划\nDon't be afraid to deviate from the plan",
    121: "接受矛盾\nAccept contradictions",
    122: "别怕矛盾\nDon't be afraid of contradictions",
    123: "保持清醒\nKeep clear",
    124: "别怕混乱\nDon't be afraid of chaos",
    125: "接受混乱\nAccept chaos",
    126: "别怕秩序\nDon't be afraid of order",
    127: "保持秩序\nKeep order",
    128: "别怕无序\nDon't be afraid of disorder",
    129: "接受无序\nAccept disorder",
    130: "别怕规则\nDon't be afraid of rules",
    131: "保持规则\nKeep rules",
    132: "别怕打破规则\nDon't be afraid to break rules",
    133: "接受规则\nAccept rules",
    134: "别怕自由\nDon't be afraid of freedom",
    135: "保持自由\nKeep freedom",
    136: "别怕约束\nDon't be afraid of constraints",
    137: "接受约束\nAccept constraints",
    138: "别怕责任\nDon't be afraid of responsibility",
    139: "保持责任\nKeep responsibility",
    140: "别怕无责任\nDon't be afraid of no responsibility",
    141: "接受无责任\nAccept no responsibility",
    142: "不是好时机\nIt's not a good time",
    143: "不\nNo",
    144: "别忽视显而易见的东西\nDon't ignore obvious things",
    145: "这可能会让你付出代价\nThis might cost you",
    146: "结果可能令人吃惊\nThe result might surprise you",
    147: "有决心就能成功\nSuccess comes to those with determination",
    148: "你的行动会使一切得到改善\nYour actions will improve everything",
    149: "做一次改变\nMake a change",
    150: "照别人告诉你的去做\nDo what others tell you to do",
    151: "不能保证\nCan't guarantee",
    152: "答案可能会以另一种形式出现\nThe answer might appear in another form",
    153: "毫无疑问\nWithout a doubt",
    154: "这样做会使事情变得有趣\nThis will make things interesting",
    155: "这是肯定的\nThis is certain",
    156: "有可能会伤害到他人\nIt might hurt others",
    157: "全身心投入将赢得好结果\nPutting your heart into it will bring good results",
    158: "那只会浪费钱\nThat would be a waste of money",
    159: "采取冒险的态度\nTake a risky attitude",
    160: "最好等待\nIt's best to wait",
    161: "本页前第三个答案\nThe third answer is in front of this page",
    162: "这是肯定的\nThis is certain",
    163: "那超出了你的控制\nThat's beyond your control",
    164: "可能会惹上麻烦\nIt might cause trouble",
    165: "你需要采取主动\nYou need to take the initiative",
    166: "似乎没问题\nIt seems fine",
    167: "肯定\nCertain",
    168: "不要在意\nDon't worry about it",
    169: "尽早做好它\nDo it early",
    170: "你终会发现你想知道的一切\nYou'll eventually find out everything you want to know",
    171: "除非你独自一人\nUnless you're alone",
    172: "是，但不要强求\nYes, but don't force it",
    173: "你需要去适应\nYou need to adapt",
    174: "明天再来试试\nTry again tomorrow",
    175: "以更放松的态度去面对\nFace it with a more relaxed attitude",
    176: "你需要考虑其他方法\nYou need to consider other methods",
    177: "在习惯中接受一些改变\nAccept some changes in your habits",
    178: "要知道选择太多和太少一样很难\nIt's hard to choose too many or too few",
    179: "别浪费时间了\nDon't waste time",
    180: "是\nYes",
    181: "花更多时间来决定\nSpend more time deciding",
    182: "当然\nOf course",
    183: "灵活应对\nBe flexible",
    184: "似乎已成事实\nIt seems like it's already a fact",
    185: "看开一点\nLook on the bright side",
    186: "问问你的异性同事\nAsk your opposite-sex colleague",
    187: "本页前第三个答案\nThe third answer is in front of this page",
    188: "柳暗花明又一村\nAfter a dark path, a bright village appears",
    189: "你会后悔的\nYou'll regret it",
    190: "避免第一个解决办法\nAvoid the first solution",
    191: "随它去吧\nLet it go",
    192: "不\nNo",
    193: "过段时间就不那么重要了\nIt won't be important in a while",
    194: "拭目以待\nWait and see",
    195: "相信你最初的想法\nBelieve in your original idea",
    196: "请不要抗拒\nPlease don't resist",
    197: "这会带来好运\nThis will bring you good luck",
    198: "那一定很棒\nThat would be great",
    199: "把它记下来\nWrite it down",
    200: "不要迫于压力草率行事\nDon't act hastily under pressure",
    201: "可能发生小意外\nThere might be a small accident",
    202: "研究并享受它\nStudy and enjoy it",
    203: "这具有重要意义\nThis has important meaning",
    204: "防备意外发生\nBe prepared for unexpected events",
    205: "一切将依赖于你的选择\nEverything will depend on your choice",
    206: "转移注意力\nShift your attention",
    207: "离开\nLeave",
    208: "你需要其他人的帮助\nYou need help from others",
    209: "本页前第三个答案\nThe third answer is in front of this page",
    210: "这有些特别\nThis is special",
    211: "过段时间就不那么重要了\nIt won't be important in a while",
    212: "不要犹豫\nDon't hesitate",
    213: "先完成其他事\nFinish other tasks first",
    214: "给自己一点时间\nGive yourself time",
    215: "现在你就能\nYou can do it now",
    216: "那不值得纠结\nIt's not worth worrying about",
    217: "那将影响别人对你的看法\nIt will affect how others see you",
    218: "照别人说的去做\nDo what others say",
    219: "转移你的注意力\nShift your attention",
    220: "你会失望的\nYou'll be disappointed",
    221: "本页后第四个答案\nThe fourth answer is behind this page",
    222: "最好关注你的工作\nIt's best to focus on your work",
    223: "形势尚不明朗\nThe situation is unclear",
    224: "不要抱成见\nDon't hold preconceived notions",
    225: "你必须现在就行动\nYou must act now",
    226: "那可能很难，但值得\nIt might be difficult, but it's worth it",
    227: "付出就会有回报\nYou'll get a return for your efforts",
    228: "本页前第三个答案\nThe third answer is in front of this page",
    229: "对意外要有思想准备\nBe prepared for unexpected events",
    230: "更细心地去倾听，你就会知道\nListen more carefully and you'll know",
    231: "且行且思\nThink and act",
    232: "你有能力以任何方式改善\nYou have the ability to improve in any way",
    233: "这是你不会忘记的事物\nThis is something you won't forget",
    234: "履行你的义务\nFulfill your obligations",
    235: "快刀斩乱麻\nCut through the chaos",
    236: "别在这上面下赌注\nDon't bet on this",
    237: "也许吧\nMaybe",
    238: "专注于你的家庭生活\nFocus on your family life",
    239: "绝对不\nAbsolutely not",
    240: "等待\nWait",
    241: "别犯傻了\nDon't be silly",
    242: "可能吧\nMaybe",
    243: "表示怀疑\nExpress doubt",
    244: "意义非凡\nIt has important meaning",
    245: "那可能非同寻常\nIt might be unusual",
    246: "不可能失败\nIt's impossible to fail",
    247: "你需要了解更多\nYou need to know more",
    248: "情况很快会有变化\nThe situation will change soon",
    249: "这并不重要\nThis is not important",
    250: "本页后第二个答案\nThe second answer is behind this page",
    251: "这会带来好运\nThis will bring you good luck",
    252: "顺其自然\nLet things be",
    253: "问问你最好的朋友\nAsk your best friend",
    254: "这时不要再自找麻烦\nDon't look for trouble at this time",
    255: "晚一点处理\nDeal with it later",
    256: "尝试一种更可能的解决方案\nTry a more likely solution",
    257: "这时不要再自找麻烦\nDon't look for trouble at this time",
    258: "本页前第二个答案\nThe second answer is in front of this page",
    259: "先做重要的事儿\nDo important tasks first",
    260: "投硬币来做决定吧\nUse a coin to make a decision",
    261: "明天再来试试\nTry again tomorrow",
    262: "这不可能失败\nThis can't fail",
    263: "这也取决于另一种情况\nThis also depends on another situation",
    264: "是，但不要强求\nYes, but don't force it",
    265: "你最终能如愿\nYou'll eventually get what you want",
    266: "可行\nIt's feasible",
    267: "答案就在你家窗外\nThe answer is outside your window",
    268: "现在你比以往任何时候都清楚\nYou're clearer than ever before",
    269: "只需说声'谢谢'\nJust say 'thank you'",
    270: "或许，等你再年长些就明白了\nMaybe, you'll understand when you're older",
    271: "这将轰动一时\nThis will be a sensation",
    272: "放手一搏\nTake a risk",
    273: "你会后悔的\nYou'll regret it",
    274: "事情会朝目标发展\nThings will move towards your goal",
    275: "答案可能会以另一种形式出现\nThe answer might appear in another form",
    276: "把它记下来\nWrite it down",
    277: "更细心去了解，你就知道该怎么做了\nBe more careful and you'll know what to do",
    278: "需要做更多的努力\nYou need to put in more effort",
    279: "等待一个更好的机会\nWait for a better opportunity",
    280: "数到5，再试一次\nCount to 5 and try again",
    281: "也许会很难，但值得\nIt might be difficult, but it's worth it",
    282: "你不得不妥协\nYou have to compromise",
    283: "很快就能解决\nIt can be solved quickly",
    284: "十分确定\nVery certain",
    285: "本页前第一个答案\nThe first answer is in front of this page",
    286: "寻求更多的选择\nSeek more options",
    287: "这还不确定\nThis is not certain",
    288: "谨慎处理\nBe careful",
    289: "全力以赴\nGive it your all",
    290: "给自己一点时间\nGive yourself time",
    291: "研究并享受它\nStudy and enjoy it",
    292: "重新考虑你的做法\nReconsider your approach",
    293: "是的\nYes",
    294: "问问你的母亲吧\nAsk your mother",
    295: "如果你独自一人就不要\nIf you're alone, don't",
    296: "或许，当你长大些就知道了\nMaybe, you'll understand when you're older",
    297: "无须担忧\nDon't worry",
    298: "保持开放的心态\nKeep an open mind",
    299: "你会为自己所做的感到高兴的\nYou'll be happy with what you've done",
    300: "发挥你的想象力\nUse your imagination",
    301: "献出你的一切\nGive everything",
    302: "顺从你的意愿\nFollow your wishes",
    303: "问问你的母亲吧\nAsk your mother",
    304: "当然\nOf course",
    305: "先做好自己的事\nDo your own thing first",
    306: "不要怀疑\nDon't doubt",
    307: "是时候做新打算了\nIt's time to make a new plan",
    308: "绝对不\nAbsolutely not",
    309: "不要忽略显而易见的\nDon't ignore obvious things",
    310: "省省力气吧\nSave your strength",
    311: "合作将是关键\nCooperation will be key",
    312: "此时不宜\nIt's not the right time",
    313: "可能会惹上麻烦\nIt might cause trouble",
    314: "莫等待\nDon't wait",
    315: "本页后第三个答案\nThe third answer is behind this page",
    316: "你可能不得不放弃其他的东西\nYou might have to give up other things",
    317: "遵守规则\nFollow the rules",
    318: "相关问题可能会出现\nRelated issues might arise",
    319: "事情将遂你心意\nThings will go your way",
    320: "赌一把\nTake a chance",
    321: "以后再处理\nDeal with it later",
    322: "结果是乐观的\nThe result is optimistic",
    323: "期待解决\nLook forward to solving",
    324: "灵活应对\nBe flexible",
    325: "注意细节\nPay attention to details",
    326: "你的行动会使一切变好\nYour actions will improve everything",
    327: "答案就在公园里\nThe answer is in the park",
    328: "清除你自身的障碍\nClear your own obstacles",
    329: "这是不明智的\nThis is not wise",
    330: "将需要大量的努力\nIt will require a lot of effort",
    331: "不要勉强自己\nDon't push yourself",
    332: "是时候做打算了\nIt's time to make a plan",
    333: "问问你最好的朋友\nAsk your best friend",
    334: "享受这次体验\nEnjoy this experience",
    335: "要付出坚持不懈的努力\nYou need to put in persistent effort",
    336: "那仍旧无法预测\nThat's still unpredictable",
    337: "结果是乐观的\nThe result is optimistic",
    338: "毋庸置疑\nWithout a doubt",
    339: "多花点时间来做决定\nSpend more time making a decision",
    340: "只做这一次\nDo it only once",
    341: "这是不明智的\nThis is not wise",
    342: "做些改变\nMake some changes",
    343: "可行\nIt's feasible",
    344: "不\nNo",
    345: "先做好其他事\nDo other things first",
    346: "不要陷入到情绪之中\nDon't get caught up in emotions",
    347: "相信你的直觉\nTrust your intuition",
    348: "采纳智者的建议\nTake advice from wise people",
    349: "情况不明了\nThe situation is unclear",
    350: "柳暗花明又一村\nAfter a dark path, a bright village appears",
    351: "是时候做些打算了\nIt's time to make a plan",
    352: "你不得不妥协\nYou have to compromise",
    353: "明天再来试试\nTry again tomorrow",
    354: "列出否定的理由\nList reasons for saying no",
    355: "这并不重要\nThis is not important",
    356: "此时不宜\nIt's not the right time",
    357: "专注于你的家庭生活\nFocus on your family life",
    358: "要有耐心\nBe patient",
    359: "寻求更多选择\nSeek more options",
    360: "一笑置之\nLaugh it off",
    361: "继续\nContinue",
    362: "你必须随机应变\nYou must adapt",
    363: "别浪费时间了\nDon't waste time",
    364: "别忘记享受乐趣\nDon't forget to enjoy the fun",
    365: "那是在浪费金钱\nThat's a waste of money",
    366: "重要的优先\nImportant priorities",
    367: "事情会朝目标发展\nThings will move towards your goal",
    368: "为了做出最好的决定，务必保持冷静\nTo make the best decision, keep calm",
    369: "尝试一个更没把握的方法\nTry a less likely method",
    370: "清除你自身的障碍\nClear your own obstacles",
    371: "那可能已成事实\nThat might already be a fact",
    372: "最好等待\nIt's best to wait",
    373: "是\nYes",
    374: "你必须马上行动\nYou must act now",
    375: "不要妄下赌注\nDon't make a rash decision",
    376: "接受一些改变\nAccept some changes",
    377: "本页后第三个答案\nThe third answer is behind this page",
    378: "那可能已无法改变\nThat might already be a fact",
    379: "相信你的直觉\nTrust your intuition",
    380: "一些援助能确保你成功\nSome help can ensure your success",
    381: "这也取决于另一种情况\nThis also depends on another situation",
    382: "你肯定会获得支持\nYou'll definitely get support",
    383: "只做一次\nDo it only once",
    384: "遵循智者的建议\nFollow wise advice",
    385: "如你所愿\nAs you wish",
    386: "当局者迷\nThe situation is unclear",
    387: "无论你怎么做，结果依旧\nNo matter what you do, the result will be the same",
    388: "相信你最初的想法\nBelieve in your original idea",
    389: "你需要去适应\nYou need to adapt",
    390: "先主后次\nDo important tasks first",
    391: "这会让你付出代价\nThis will cost you",
    392: "尽早行动\nAct early",
    393: "寻求更多选择\nSeek more options",
    394: "有可能会伤害到他人\nIt might hurt others",
    395: "你现在比以往任何时候都清楚\nYou're clearer than ever before",
    396: "极可能发生变故\nIt's highly likely to change",
    397: "毫无疑问\nWithout a doubt",
    398: "事情会朝目标发展\nThings will move towards your goal",
    399: "本页后第一个答案\nThe first answer is behind this page",
    400: "带着好奇去探索\nExplore with curiosity",
    401: "做一次改变\nMake a change",
    402: "列出这样做的理由\nList reasons for doing it",
    403: "马上停下来\nStop immediately",
    404: "这不是很确定\nThis is not certain",
    405: "不用担心\nDon't worry",
    406: "先做好自己的事\nDo your own thing first",
    407: "情况很快就会有变化\nThe situation will change soon",
    408: "不要告诉别人\nDon't tell others",
    409: "你需要其他人的帮助\nYou need help from others",
    410: "那将是一件乐事\nIt will be a pleasure",
    411: "要知道选择太多或太少都很难\nIt's hard to choose too many or too few",
    412: "现在你就行\nYou can do it now",
    413: "那仍然无法预测\nThat's still unpredictable",
    414: "列出理由\nList reasons",
    415: "不要迫于压力草率行事\nDon't act hastily under pressure",
    416: "你需要采取主动\nYou need to take the initiative",
    417: "不要等待\nDon't wait",
    418: "问问你的异性同事\nAsk your opposite-sex colleague",
    419: "履行你的义务\nFulfill your obligations",
    420: "你能以任何方式改善现状\nYou can improve the situation in any way",
    421: "为了做出最好的选择，请保持冷静\nTo make the best choice, keep calm",
    422: "你会为此感到高兴\nYou'll be happy with what you've done",
    423: "放弃之前的想法\nGive up previous ideas",
    424: "顺从你的意愿\nFollow your wishes",
    425: "你不会忘记这些\nYou won't forget these",
    426: "不要在乎\nDon't worry about it",
    427: "一些援助有利于你成功\nSome help can ensure your success",
    428: "谨慎对待\nBe careful",
    429: "投硬币来做决定吧\nUse a coin to make a decision",
    430: "放弃你现在的想法\nGive up your current ideas",
    431: "有理由保持乐观\nThere's a reason to be optimistic",
    432: "带着好奇去探索\nExplore with curiosity",
    433: "你会发现自己难以妥协\nYou'll find it difficult to compromise",
    434: "是时候做新打算了\nIt's time to make a new plan",
    435: "改变不会很快发生\nChange won't happen quickly",
    436: "有些障碍需要克服\nThere are some obstacles to overcome",
    437: "耐心点\nBe patient",
    438: "果断放弃\nGive up immediately",
    439: "最好把心思放在工作上\nIt's best to focus on your work",
    440: "要做就做好，否则就不要去做\nDo it right or don't do it",
    441: "深表怀疑\nDeeply doubt",
    442: "最好的解决方法可能不太明显\nThe best solution might not be obvious",
    443: "已超出你的控制\nIt's beyond your control",
    444: "你已然发现自己无法妥协\nYou've already found that you can't compromise",
    445: "一笑置之\nLaugh it off",
    446: "看看会发生什么\nSee what happens",
    447: "当然\nOf course",
    448: "你需要更多信息\nYou need more information",
    449: "别忘记享受乐趣\nDon't forget to enjoy the fun",
    450: "数到5，再问一次\nCount to 5 and ask again",
    451: "开阔视野\nExpand your perspective",
    452: "明天再来试试\nTry again tomorrow",
    453: "注意细节\nPay attention to details",
    454: "看得更清楚些\nSee more clearly",
    455: "结果可能会令人震惊\nThe result might surprise you",
    456: "节省你的精力吧\nSave your energy",
    457: "管它呢\nWho cares",
    458: "无论你做什么，结果依旧\nNo matter what you do, the result will be the same",
    459: "发挥你的想象力\nUse your imagination",
    460: "那将引起一些纷争\nIt might cause some conflict",
    461: "相关问题可能会浮出水面\nRelated issues might arise",
    462: "遵循其他人的建议\nFollow other people's advice",
    463: "改变将不会很快发生\nChange won't happen quickly",
    464: "值得付出努力\nIt's worth putting in effort",
    465: "问问你最好的朋友\nAsk your best friend",
    466: "似乎已成事实\nIt seems like it's already a fact",
    467: "负起责任来\nTake responsibility",
    468: "你终会搞清楚你想知道的一切\nYou'll eventually find out everything you want to know",
    469: "且行且思\nThink and act",
    470: "如果做就做好，否则就不要做\nDo it right or don't do it",
    471: "不值得一争\nIt's not worth arguing about",
    472: "问问你的异性同事\nAsk your opposite-sex colleague",
    473: "遵守规则\nFollow the rules",
    474: "你肯定会获得支持\nYou'll definitely get support",
    475: "管它呢\nWho cares",
    476: "问问你的父亲吧\nAsk your father",
    477: "向别人倾诉\nTalk to others",
    478: "看来还行\nIt seems fine",
    479: "绝不\nAbsolutely not",
    480: "等待一个更好的提议\nWait for a better suggestion",
    481: "绝不\nAbsolutely not",
    482: "可能会惹上麻烦\nIt might cause trouble",
    483: "你可能会遭遇反对\nYou might face opposition",
    484: "这会是一件乐事\nThis will be a pleasure",
    485: "告诉某人那对你意味着什么\nTell someone what it means to you",
    486: "这会影响别人对你的看法\nThis will affect how others see you",
    487: "一切都取决于你的选择\nEverything depends on your choice",
    488: "把这看作一个时机\nSee this as an opportunity",
    489: "不要陷入你的情绪\nDon't get caught up in your emotions",
    490: "你一定得这么做\nYou must do it",
    491: "享受这个过程\nEnjoy the process",
    492: "不识庐山真面目，只缘身在此山中\nYou can't see the mountain for the trees",
    493: "不要勉强自己\nDon't push yourself",
    494: "等待\nWait",
    495: "本页前第三个答案\nThe third answer is in front of this page",
    496: "最好的解决方法可能并不明显\nThe best solution might not be obvious",
    497: "问问你的父亲吧\nAsk your father",
    498: "那一定很棒\nThat would be great",
    499: "你可能不得不放弃其他一些东西\nYou might have to give up other things",
    500: "你不会失望的\nYou won't be disappointed",
    501: "是时候走了\nIt's time to go",
    502: "先做好自己的事\nDo your own thing first",
    503: "列出否定的理由\nList reasons for saying no",
    504: "你需要考虑其他方法\nYou need to consider other methods",
    505: "值得付出努力\nIt's worth putting in effort",
    506: "这肯定会使事情变得有趣\nThis will definitely make things interesting",
    507: "欣然接受\nAccept gladly",
    508: "遵循其他人的意见\nFollow other people's opinions",
    509: "做一次改变\nMake a change",
    510: "说出来吧\nSay it",
    511: "投硬币来做决定吧\nUse a coin to make a decision",
    512: "先主后次\nDo important tasks first",
    513: "慷慨大度些\nBe more generous",
    514: "只需说声'谢谢'\nJust say 'thank you'",
    515: "重新考虑下你的方法\nReconsider your approach",
    516: "你必须随机应变\nYou must adapt",
    517: "采取冒险的态度\nTake a risky attitude",
    518: "你可能遭遇反对\nYou might face opposition",
    519: "你能否不要抗拒\nCan you not resist",
    520: "放弃之前的打算\nGive up previous ideas",
    521: "有障碍需要克服\nThere are obstacles to overcome",
    522: "做出改变\nMake a change",
    523: "无法保证\nCan't guarantee",
    524: "算了吧\nForget it",
    525: "合作是关键\nCooperation is key",
    526: "把这看作一次机会\nSee this as an opportunity",
    527: "别再犹豫了\nDon't hesitate",
    528: "保守你的秘密\nKeep your secret",
    529: "本页前第一个答案\nThe first answer is in front of this page",
    530: "采取冒险的态度\nTake a risky attitude"
};

// 获取页面元素
const pageInput = document.getElementById('pageInput');
const answerDisplay = document.getElementById('answerDisplay');
const answerText = document.getElementById('answer');
const getAnswerButton = document.getElementById('getAnswer');
const randomButton = document.getElementById('getRandomAnswer');
const tryAgainButton = document.getElementById('tryAgain');
const page3Image = document.getElementById('page3Image');

// 输入框限制
pageInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (parseInt(value) > 999) value = '999';
    e.target.value = value;
});

// 文本分行函数
function splitTextIntoLines(text, charsPerLine) {
    const lines = [];
    let currentLine = '';
    
    for (let char of text) {
        if (currentLine.length >= charsPerLine) {
            lines.push(currentLine);
            currentLine = '';
        }
        currentLine += char;
    }
    if (currentLine) {
        lines.push(currentLine);
    }
    return lines;
}

// 显示答案的函数
function displayAnswerText(text) {
    // 分割中英文答案
    const [chinese, english] = text.split('\n');
    
    // 将中文按10个字符分行
    const chineseLines = splitTextIntoLines(chinese, 10);
    
    // 生成HTML，确保每行正好10个字符
    const chineseHtml = chineseLines
        .map(line => {
            // 如果行长度不足10个字符，在两边添加空格使其居中
            const paddingNeeded = 10 - line.length;
            const leftPadding = Math.floor(paddingNeeded / 2);
            const rightPadding = paddingNeeded - leftPadding;
            const paddedLine = '　'.repeat(leftPadding) + line + '　'.repeat(rightPadding);
            return `<div class="answer-line">${paddedLine}</div>`;
        })
        .join('');
    
    // 更新h3和答案文本
    document.querySelector('#answerDisplay h3').style.display = 'block';
    const h3Text = document.querySelector('#answerDisplay h3').textContent;
    const h3Lines = splitTextIntoLines(h3Text, 10);
    document.querySelector('#answerDisplay h3').innerHTML = h3Lines
        .map(line => `<div class="h3-line">${line}</div>`)
        .join('');
    
    answerText.innerHTML = `
        <div class="answer-chinese">${chineseHtml}</div>
        <div class="answer-english">${english}</div>
    `;
}

// 获取答案的逻辑
getAnswerButton.addEventListener('click', () => {
    if (!pageInput.value) {
        alert('请输入页数！');
        return;
    }

    let pageNum = parseInt(pageInput.value);
    if (pageNum < 1) pageNum = pageInput.value = 1;
    if (pageNum > 999) pageNum = pageInput.value = 999;

    // 显示思考动画
    getAnswerButton.disabled = true;
    getAnswerButton.textContent = '思考中...';
    
    setTimeout(() => {
        // 计算答案
        const answerIndex = pageNum % Object.keys(answers).length || Object.keys(answers).length;
        
        // 显示答案
        displayAnswerText(answers[answerIndex]);
        answerDisplay.classList.remove('hidden');
        
        // 隐藏所有其他元素
        document.querySelector('#answerDisplay h3').style.display = 'none';
        document.querySelector('.container header').style.display = 'none';
        document.querySelector('.instructions').style.display = 'none';
        document.querySelector('.input-group').style.display = 'none';
        randomButton.style.display = 'none';
        
        // 显示再尝试按钮和装饰图片
        tryAgainButton.style.display = 'block';
        page3Image.classList.remove('hidden');
        page3Image.classList.add('show');
        
        // 重置按钮状态
        getAnswerButton.disabled = false;
        getAnswerButton.textContent = '获取答案';
    }, 1500);
});

// 随机答案按钮逻辑
randomButton.addEventListener('click', () => {
    // 显示思考动画
    randomButton.disabled = true;
    randomButton.textContent = '思考中...';
    
    setTimeout(() => {
        // 随机选择答案
        const randomIndex = Math.floor(Math.random() * Object.keys(answers).length) + 1;
        
        // 显示答案
        displayAnswerText(answers[randomIndex]);
        answerDisplay.classList.remove('hidden');
        
        // 隐藏其他元素
        document.querySelector('#answerDisplay h3').style.display = 'none';
        document.querySelector('.container header').style.display = 'none';
        document.querySelector('.instructions').style.display = 'none';
        document.querySelector('.input-group').style.display = 'none';
        randomButton.style.display = 'none';
        
        // 显示再尝试按钮和装饰图片
        tryAgainButton.style.display = 'block';
        page3Image.classList.remove('hidden');
        page3Image.classList.add('show');

        // 重置按钮状态
        randomButton.disabled = false;
        randomButton.textContent = '直接获取答案';
    }, 1500);
});

// 重试按钮逻辑
tryAgainButton.addEventListener('click', () => {
    // 重置输入和显示
    pageInput.value = '';
    answerDisplay.classList.add('hidden');
    
    // 隐藏第3页图片
    page3Image.classList.add('hidden');
    page3Image.classList.remove('show');
    
    // 恢复所有元素显示
    document.querySelector('#answerDisplay h3').style.display = 'block';
    document.querySelector('.container header').style.display = 'block';
    document.querySelector('.instructions').style.display = 'block';
    document.querySelector('.input-group').style.display = 'flex';
    randomButton.style.display = 'block';
}); 