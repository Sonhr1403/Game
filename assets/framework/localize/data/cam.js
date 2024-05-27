const DEF_CURRENCY = "GOLD";
//replace XU = " + DEF_CURRENCY  + "
module.exports = {
  "": "",

  alert: {
    title_notification: "သတိပေးစာ",
    ok: "အတည်ပြုပါ",
    yes: "ရှိသည်",
    no: "ခွင့်မပြု",
    loaded: "တာဝန်ခံ",
    close: "ပယ္ဖ်က္မည္",
    refuse: "ငြင်းပယ်သည်",
    veritify: "တိကျမှန်ကန်မှု",
    fail: "မှားယွင်းချက်",
    discard: "ပြန်လည်ရွေးချယ်ပါ",
    confirm_logout: "မင်းထွက်ချင်တာသေချာလား?",
    you_need_veritify_pin: "သင်၏ PIN နံပါတ် တိကျမှန်ကန်မှု လိုအပ်သည်",
    you_need_veritify_phone_number:
      "သင်၏ ဖုန်းနံပါ်တ် တိကျမှန်ကန်မှု လိုအပ်သည်!",
    you_need_veritify_loaded_card: "သင်၏ ကဒ်နံပါတ်လိုအပ်သည်",
    coming_soon: "လုပ်ငန်းဖြစ်အံ့ဆဲဆဲ",
    coming_soon_game: "Game မကြာမှီလာမည်",
    game_maintian: "Game ပြုပြင်ဆဲ",
    fucntion_maintian: "အချက်အလက်များ ပြုပြင်ထိန်းသိမ်းထားသည်",
    error: {
      not_enough_gold: DEF_CURRENCY + " ေကြွ စေ့ မလုံ လောက်ပါ",
      wrong_captcha: "Captcha မှားနေသည်",
      wrong_syntax: "ဝါကျဖွဲ့ပုံဖွဲ့နည်းမှားနေသည်",
      wrong_pin: "PIN နံပါတ် မဟုတ်ပါ , ကုဒ်နံပါတ်မှတ်ပုံတင်ထားခြင်း မရှိသေးပါ",
      wrong_pin_or_not_reg_pin:
        "PIN နံပါတ် မှားနေသည် , ကုဒ်နံပါတ်မှတ်ပုံတင်ထားခြင်း မရှိသေးပါ",
      account_undefined: "ကစားသမား မတည်ရှိပါ",
      connector: {
        fail: "အင်တာနက် ချိတ်ဆက်မထားပါ , ချိတ်ဆက်မှုကို ပြန်လည် စစ်ဆေးပါ",
        a_2: "ကွန်ယက် ချိတ်ဆက်မှု ရှိရန် လိုအပ်သည်",
        a_3: "စနစ်သို့ ဆက်သွယ်နေသည်",
        a_4: "သင် လက်ဆောင်မရရှိသေးပါ.\n \n လက်ဆောင်များရရှိရန် အဖွဲ့ တစ်ခုသို့ ၀င်ရောက်ပါ!",
        a_5: "‌ေကျးဇူးပြု၍ PIN ကုဒ် နံပါတ် ၀င်ရောက်ပါ",
        a_6: "‌ေကျးဇူးပြု၍ Captcha ၀င်ရောက်ပါ!",
        expired:
          "အ‌ကော့င်ထဲသို့လုပ်ငန်းဆောင်ရွက်မှုကုန်ဆုံးသွားသည် , ‌ေကျးဇူးပြု၍ ထပ်မံ၀င်ရောက်ပါ",
        ban: "သင့်၏ Account (အကော့င်) ဖြစ်ပျက်နေသောသော့ခတ် (လော့ဂ်စ် / သော့ခတ်) ကသွားခဲ့သည်",
        a_9: "စနစ်သို့ ပြုပြင်နေသည် \n ‌ေကျးဇူးပြု၍နောက်မှ ပြန်လာပါရန်!",
        some_where: "The account is already logged in elsewhere",
      },

      services: {
        a_10: "သုံးစွဲသူ၏ စာရင်း (သို့မဟုတ်) လျို့၀ှက်နံပါတ် မှားယွင်းနေပါသည်",
        a_11: "Account (စာရင်း) သည် အသုံးပြုပြီး ဖြစ်သည်",
        a_12: "Account (စာရင်း) သည် မတည်ရှိသေးပါ",
        a_13: "လျို့၀ှက်နံပါတ် မှားယွင်းနေပါသည်",
        a_14: "သင်သည် အလွန်များပြားသော Account (စာရင်း ) များ မှတ်ပုံတင် ထားသည်.",
        a_15: "သင်၏ Account (စာရင်း) ဖန်တီးနေခြင်းကို ဆက်လက်ရန် ေကျးဇူးပြု၍ မိနစ် အနည်းငယ်စော့င်ပါ.",
        a_16: "သင်သည် အလွန်များပြားသော Account (စာရင်း ) များ ဖန်တီး ထားသည် \n  ေကျးဇူးပြု၍ မနက်ဖြန်မှ ပြန်လာပါရန်.",
      },
      defined: {
        fail: "မသိနိုငိသော ချို့ယွင်းချက်",
        param_invalid: "အချက်အလက်ကမမှန်ကန်ပါ",
        maintain_system:
          "စနစ်သို့ ပြုပြင်နေသည် , ‌ေကျးဇူးပြု၍နောက်မှ ပြန်လာပါရန်",
        session_key_invalid: "Session key မတည်ရှိပါဘူး",
        session_expired: "Session key ကုန်သွားပြီ",
        session_room_not_exist: "ကစားကွင်းမရှိပါ",
        session_not_enough_min_buy_in: "အနည်းဆုံးအလောင်းအစားမလုံလောက်ပါ",
        out_buy_in_range: "အကွာအဝေးထဲက",
        game_structure_invalid: "Game structure မတည်ရှိပါဘူး",
        already_in_game: "သင်ဂိမ်းထဲမှာရှိနေပြီးဖြစ်သည်",
        entering_game: "ဂိမ်းထဲဝင်ပါ",
        gift_code_invalid: "Giftcode မတည်ရှိပါဘူး",
        gift_code_is_used: "Giftcode အသုံးပြုခဲ့သည်",
        gift_code_is_expired: "Giftcode ခေတ်ကုန်ပြီ",
        login_banned_ip: "င့် IP သည်သော့ခတ်ထားသည်.\n ကျေးဇူးပြုပြီးဆက်သွယ်ပါ ",
        login_banned_user:
          "သင့်အကောင့်ကိုသော့ခတ်ထားသည်.\n ကျေးဇူးပြုပြီးဆက်သွယ်ပါ ",
        player_action_invalid: "မမှန်ကန်သောစစ်ဆင်ရေ",
        player_action_fail: "ကြိုးကိုင်ခြယ်လှယ်မှုအမှား",
        not_enough_gold: "မလုံလောက်  " + DEF_CURRENCY,
        default: "အမှား",
        not_bet_too_long:
          "သင့်အနေဖြင့်ကြာရှည်စွာမဆက်ဆံခြင်းအားဖြင့်သင့်စနစ်မှဖိတ်ကြားခြင်းခံရသည်",
      },
    },
  },

  loading: {
    check_server: "ဆာဗာအချက်အလက်ကိုစစ်ဆေးပါ",
    update: "နောက်ဆုံးရသတင်း",
    update_success: "Update ကိုအောင်မြင်စွာလုပ်ပါ",
    update_fail: "update မအောင်မြင်ပါ",
    please_wait_update_version:
      "ကျေးဇူးပြု၍ နောက်ဆုံး version ကို update လုပ်ပါ",
    check_version: "version စစ္ေဆးသည္။",
    progress_loading_new: "ဗားရှင်းအသစ်မွမ်းမံခြင်း.",
    not_loading_manifest: "download လုပ်လို့မရပါ manifest",
    latest_current_version: "နောက်ဆုံးပေါ်မူကွဲ",
    load: "Loading (တင်နေသည်)",
  },

  login: {
    title_quick_play: "ယခုကစားမည္",
    login: {
      title: "အေကာင့္ဝင္မည္",
      placeholder: {
        username: "Account Name (စာရင်းနာမည်ဖြ့င်) ၀င်ရောက်ပါ",
        pass: "လျို့၀ှက်နံပါတ် ၀င်ရောက်ပါ",
      },
      save_pass: "အေကာင့္ကို သိမ္းမည္။",
      forget: "မေ့ နေသည်",
      error: {
        login_fail: "Facebook အကော့င်၀င်ရောက်ရန် ကျရှုံးသည်",
        please_enter_account_pass:
          "ေကျးဇူးပြု၍ သင်၏ Account (စာရင်း) နှ့င် Password (လျို့၀ှက်နံပါတ်) ၀င်ရောက်ပါ",
        account_pass_than_six_charater:
          "Account (စာရင်း) သည် ပြီးဆုံးခဲ့ သည့် အချိန် ၆ ပတ်ထက် အနည်းငယ် ရှိမှု ဖြစ်ရမည်",
      },
    },
    registry: {
      title: "မွတ္ပံုတင္ပါ",
      placeholder: {
        username: "Account Name (စာရင်းနာမည်ဖြ့င်) ၀င်ရောက်ပါ",
        pass: " လျို့၀ှက်နံပါတ် ၀င်ရောက်ပါ",
        pass_confirm: "လျို့၀ှက်နံပါတ် အတည်ပြုပါ",
        captcha: "Captcha တင်သွင်းပါ",
      },
      error: {
        facebook_fail: "Login fail",
        fail_1:
          "Username (သုံးစွဲသူ၏နာမည်) သည် အနည်းဆုံး ၆ လုံး ဖြစ်မှ မှတ်ပုံတင်၍ ရမည် , အထူးသီးသ့န် စာလုံးများ မရှိရပါ",
        fail_2: "လျို့၀ှက်နံပါတ်သည် အနည်းဆုံး စာလုံး ၈လုံး ရှိရမည်",
        fail_3: "လျို့၀ှက်နံပါတ် မှားယွင်းစွာ ၀င်ရောက်နေသည်",
        fail_4: "သင်၏ Captcha သို့ ၀င်ရောက်မှု မရှိသေးပါ",
      },
    },
    forget: {
      title: "လျို့၀ှက်နံပါတ်  မေ့နေသည်",
      placeholder: {
        username: "Account Name (စာရင်းနာမည်ဖြ့င်) ၀င်ရောက်ပါ",
        pin: "PIN ကုဒ်နံပါတ်် ထည့်ပါ",
        pass: " လျို့၀ှက်နံပါတ် ၀င်ရောက်ပါ",
        pass_confirm: "လျို့၀ှက်နံပါတ် အတည်ပြုပါ",
        captcha: "Captcha တင်သွင်းပါ",
      },
      error: {
        username_please:
          "ေကျးဇူးပြု၍ သင်၏ Username (သုံးစွဲသူ၏နာမည်) ၀င်ရောက်ပါ",
        enter_code_pin_please: "‌ေကျးဇူးပြု၍ PIN ကုဒ် နံပါတ် ၀င်ရောက်ပါ",
        enter_new_password_please:
          "ေကျးဇူးပြု၍ သင်၏ New Password (လျို့၀ှက်နံပါတ်အသစ်) ၀င်ရောက်ပါ",
        note_create_new_password:
          "လျို့၀ှက်နံပါတ်အသစ်သည် စာလုံး ၈ လုံး အထက် ဖြစ်ရမည်",
        wrong_enter_password: "လျို့၀ှက်နံပါတ် မှားယွင်းစွာ ၀င်ရောက်နေသည်",
        enter_captcha_please: "‌ေကျးဇူးပြု၍  Captcha ၀င်ရောက်ပါ",

        note_create_new_password_success: "Password was successfully changed",
        wrong_syntax: "Incorrect Syntax",
        error_invalid_account_pin:
          "Username does not exist or the PIN is incorrect",
        wrong_captcha: "Incorrect captcha",
      },
    },
  },

  lobby: {
    lobby_notify_no_talk:
      "Currently not broadcasting Live\n Please come back later.",
    not_have_account: "သင့်တွင်အကောင့်တစ်ခုမရှိပါ။",
    profile: "ကိုယ်ရေးအကျဉ်း",
    join_time: "ပါဝင်သည့်ရက်စွဲ",
    birth_date: "မွေးနေ့",
    ip_address: "IP လိပ်စာ",
    invite_code: "ရည်ညွှန်းကုဒ်",
    change_password: "စကားဝှက်ကိုပြောင်းရန်",
    change_avatar: "ကိုယ်ပွားကို ပြောင်းပါ။",
    back: "ကျော",
    change: "ပြောင်းလဲပါ။",
    current_password: "လက်ရှိစကားဝှက်",
    new_password: "စကားဝှက်အသစ်",
    confirm_new_password: "သင့်စကားဝှက်အသစ်ကို ပြန်လည်ထည့်သွင်းပါ။",
    update: "မွမ်းမံ",
    deposit_gold: "ရွှေငွေဖြည့်ပါ။",
    deposit_history: "ငွေဖြည့်မှတ်တမ်း",
    sell_gold: "ရွှေရောင်း",
    sell_history: "သမိုင်းရောင်း",
    current_credit: "လက်ကျန်ငွေ",
    agency: "အေဂျင်စီ",
    deposit_money: "သိုက်",
    receive_gold: "ရွှေလက်ခံသည်။",
    agency_note:
      "မှတ်ချက်- မလွှဲပြောင်းမီ အေးဂျင့်၏ အချက်အလက်ကို သေချာစစ်ဆေးပါ၊ မပံ့ပိုးသော မှားယွင်းသောထုတ်ဝေသူထံ လွှဲပြောင်းပါ။ ၅ မိနစ်ကြာပြီးနောက် ရွှေအဆက်အသွယ် မရခဲ့ပါ။",
    or_call_to: "သို့ ဖုန်းဆက်ပါ။",
    note: "မှတ်စုများ",
    minimum_trade: "အနိမ့်ဆုံးငွေပေးငွေယူ",
    exchange_rate: "ကူးပြောင်းနှုန်း",
    account_number: "အကောင့်နံပါတ်",
    account_name: "အကောင့်နာမည်",
    area: "ဧရိယာ",
    confirm: "အတည်ပြုပါ။",
    deposit_note:
      "ငွေသွင်းအမှာစာကို သင် အောင်မြင်စွာ ဖန်တီးပြီးပါပြီ။ ထို့နောက် ငွေသွင်းခြင်းလုပ်ငန်းစဉ်ကို အပြီးသတ်ရန်။ ငွေလွှဲပြေစာပေးပို့ရန် ဖောက်သည်ဝန်ဆောင်မှုကို ဆက်သွယ်ပါ။",
    branch: "ကိုင်း",
    transfer_code_short: "ငွေပေးငွေယူကုဒ်",
    num_transfer_money: "လွှဲပြောင်းပမာဏ",
    account_owner_name: "ကိုင်ဆောင်သူအမည်",
    status: "အဆင့်အတန်း",
    korea: "ကိုရီးယား",
    japan: "ဂျပန်",
    taiwan: "ထိုင်ဝမ်",
    lao: "လာအို",
    campuchia: "ကမ္ဘောဒီးယား",
    no: "ဂဏန်းအလို့ငှာ",
    nickname: "အမည်ပြောင်",
    phone_number: "ဖုန်းနံပါတ်",
    contact: "ဆက်သွယ်ပါ။",
    action: "အက်ရှင်",
    buy: "ဝယ်ပါ။",
    sell: "ရောင်း",
    attendance: "ကျောင်းခေါ်ချိန်",
    day: "နေ့",
    day1: "နေ့ ၁",
    day2: "နေ့ ၂",
    day3: "နေ့ ၃",
    day4: "နေ့ 4",
    day5: "နေ့ ၅",
    day6: "၆ ရက်",
    day7: "၇ ရက်",
    attendance_note: "စနေ၊",
    open_egg: "ကြက်ဥကိုဖွင့်ပါ။",
    gold_egg: "ရွှေဥ",
    white_egg: "ကြက်ဥအဖြူ",
    game_download: "ဂိမ်းဒေါင်းလုဒ်လုပ်ပါ။",
    download: "ဒေါင်းလုဒ်လုပ်ပါ။",
    list_giftcode: "လက်ဆောင်ကုဒ်စာရင်း",
    received: "ရရှိခဲ့သည်။",
    title_events: "အဲ့ဒါနဲ့",
    event: "အဲ့ဒါနဲ့",
    event_top_bet: "ထိပ်တန်းလောင်းကစားပွဲ",
    event_attendace: "ပွဲတက်ရောက်သူ",
    event_receive_bet: "လောင်းကစားပွဲကို ရယူပါ။",
    event_find_million: "သန်းကြွယ်သူဌေးဖစ်ရှာပါ။",
    event_sicbo: "Sicbo ပွဲ",
    event_jackpot_sicbo: "Sicbo Jackpot",
    trade_history: "ငွေလွှဲမှတ်တမ်း",
    play_gold: "ရွှေကစားပါ။",
    play_chip: "ဒင်္ဂါးပြားများကို ကစားပါ။",
    deposit_chip: "ငွေဖြည့်ဒင်္ဂါးများ",
    expense_gold: "ရွှေဖြုန်း",
    trade_code: "ငွေပေးငွေယူကုဒ်",
    time: "အချိန်",
    service: "ဝန်ဆောင်မှု",
    incurred: "ကြုံမည်။",
    credit: "လက်ကျန်",
    description: "ဖော်ပြချက်",
    detail: "အသေးစိတ်",
    view: "အမြင်",
    account: "အကောင့်",
    account_note_full_info:
      "အထောက်အပံ့ရဖို့။ ကျေးဇူးပြု၍ အောက်ပါအချက်အလက်များကိုဖြည့်ပါ။",
    account_note_username: "ဇာတ်ကောင်အမည်သည် အချက်အလက် လိုအပ်သည်။",
    type_login_name: "အသုံးပြုသူအမည်ထည့်ပါ။",
    authentication_code: "အတည်ပြုရန်ကုတ်",
    send: "ပို့ပါ။",
    forgot_password: "စကားဝှက်ကိုမေ့နေပါသလား",
    telegram_authentication_code: "ကြေးနန်းအထောက်အထားစိစစ်ခြင်းကုဒ်...",
    username: "ဇာတ်ကောင်နာမည်",
    account_note_username1:
      "စာလုံး 6 လုံးမှ 16 လုံးကြားရှိ ဇာတ်ကောင်အမည်၊ ထိလွယ်ရှလွယ် စာလုံးများမရှိ၊ အထူးဇာတ်ကောင်များနှင့် နေရာလွတ်များမရှိပါ။",
    create_new: "အသစ်ဖန်တီးပါ။",
    login_name: "အသုံးပြုသူအမည်",
    password: "စကားဝှက်",
    save_password: "စကားဝှက်ကိုသိမ်းဆည်းပါ။",
    login: "လော့ဂ်အင်",
    register: "မှတ်ပုံတင်ပါ။",
    confirm_password: "စကားဝှက်အတည်ပြုခြင်း",
    invite_code_note: "ရည်ညွှန်းကုဒ် (ချန်လှပ်ထားနိုင်သည်)",
    captcha: "Captcha",
    sender: "ပေးပို့သူ",
    content: "အကြောင်းအရာ",
    notify: "အကြောင်းကြားပါ။",
    agency_account: "အေဂျင်စီအကောင့်",
    notify_note_cheat:
      "လိမ်လည်မှုများကို ရှောင်ရှားရန် အေးဂျင့်များနှင့်သာ ဆက်ဆံပါ။",
    you_sure_send: "သေချာပေါက် လွှဲပြောင်းချင်ပါသည်။",
    amount_money: "ငွေပမာဏ",
    reason: "အကြောင်းပြချက်",
    reject: "မလုပ်တော့",
    accept: "လက်ခံပါတယ်။",
    buy_gold: "ရွှေဝယ်ပါ။",
    gold: "ရွှေ",
    type_amount_money: "ငွေဖြည့်သွင်းသည့်ပမာဏကို ထည့်ပါ...",
    receive_money: "ရရှိသည့်ပမာဏ",
    received_money: "လက်ခံရရှိသည့်ပမာဏ",
    num_receive_gold: "ရွှေလက်ခံသည်။",
    other_agency: "အခြားအေးဂျင့်များ",
    buy_gold_rule: "ရွှေဝယ်ရန်စည်းကမ်းများ",
    minimum_trade_value: "အနိမ့်ဆုံး ငွေပေးငွေယူတန်ဖိုး",
    trade_fee: "ငွေလွှဲကြေး",
    buy_gold_rule_note: "",
    buy_gold_rule_note_check_nickname:
      "ငွေပေးငွေယူမပြုလုပ်မီ လက်ခံရရှိသော အမည်ဝှက်ကို နှစ်ဆစစ်ဆေးပါ။",
    type_nickname: "အမည်ပြောင်ထည့်ပါ။",
    type_nickname_again: "အမည်ပြောင်ကို ပြန်ထည့်ပါ။",
    type_amount_sell_money: "လွှဲပြောင်းရန် ပမာဏကို ထည့်သွင်းပါ။",
    type_num_gold: "ရွှေနံပါတ်ထည့်ပါ။",
    transfer_reason: "ပြောင်းရွှေ့ရခြင်း အကြောင်းအရင်း",
    transfer_note_nickname:
      'ရရှိထားသောအမည်ပြောင်သည် လော့ဂ်အင်အကောင့်အမည်မဟုတ်ဘဲ "ဂိမ်းတွင်းပြသမှုအမည်" ဇာတ်ကောင်အမည်ဖြစ်သည်။ ',
    transfer_note_wrong_transfer:
      "*မှားယွင်းသော အကောင့်အမည်သို့ လွှဲပြောင်းလိုက်သော ငွေလွှဲမှုများကို စနစ်က တရားဝင်သော လွှဲပြောင်းမှုများအဖြစ် အလိုအလျောက် သတ်မှတ်ပြီး ပြန်အမ်း၍မရပါ။",
    continue: "ဆက်လက်",
    transfer_rule: "အပြောင်းအရွှေ့စည်းမျဉ်းများ",
    transfer: "အပြောင်းအရွှေ့",
    choose_nation: "နိုင်ငံကိုရွေးချယ်ပါ",
    transfer_withdraw: "လွှဲပြောင်း/ငွေထုတ်ခြင်း။",
    num_transfer_gold: "ရွှေနံပါတ်ပြောင်းပါ။",
    current_money: "လက်ရှိငွေ",
    transfer_fund: "ရန်ပုံငွေလွှဲပြောင်း",
    play_now: "ယခုကစားပါ။",
    withdraw_fund: "ရန်ပုံငွေထုတ်ယူ",
    withdraw_money: "ထုတ်ယူရမည့်ပမာဏ",

    cmtnd: "ID နံပါတ်များ",
    active: "လှုပ်လှုပ်ရှားရှား",
    email: "အီးမေးလ်",
    phone_number_long: "ဖုန်းနံပါတ်",
    profile_note_scuriry: "လျှို့ဝှက်အချက်အလက်များအကြောင်း မှတ်သားထားပါ။",
    profile_note_update:
      "အကျိုးခံစားခွင့်များသေချာစေရန် အချက်အလက်ကို အပ်ဒိတ်လုပ်ပါ။",
    music: "ဂီတ",
    feedBack: "တုံ့ပြန်ချက်",
    shop: "ဆိုင်",
    gift_code: "GIFTCODE",
    type_gift_code: "GiftCode ရိုက်ထည့်ပါ။",
    receive: "လက်ခံတယ်။",
    mailbox: "စာတိုက်ပုံး",
    setting: "ဆက်တင်",
    logout: "ထွက်လိုက်ပါ။",
    get_otp: "OTP ရယူပါ။",
    title_sold_gold: "ရွှေရောင်း",
    title_tranfers_gold: "အပြောင်းအရွှေ့",
    warning: {
      error_try_gain:
        "အမှားအယွင်းတစ်ခု ဖြစ်ပွားခဲ့သည်။ ကျေးဇူးပြု၍ နောက်မှ ထပ်စမ်းကြည့်ပါ။",
      minimum_transfer_500k: "အနိမ့်ဆုံးပမာဏမှာ ရွှေ 500k ဖြစ်သည်။",
      not_enough_gold: "လက်ကျန်ငွေ မရရှိနိုင်ပါ။",
      maximum_bet_10M: "အားကစားလောင်းကစားအကောင့် 10M ထက်မပိုရပါ။",
      transfer_success:
        "ဂုဏ်ယူပါသည်။ သင်သည် ယခုလေးတင် အောင်မြင်စွာ လွှဲပြောင်းပြီးပါပြီ- ",
      error_in_processing: "လုပ်ဆောင်ရာတွင် အမှားအယွင်းရှိခဲ့သည်။",
      you_need_type_withdraw_money:
        "ငွေထုတ်သည့်ပမာဏကို ထည့်သွင်းရန် လိုအပ်ပါသည်။",
      wrong_money: "ပမာဏ မမှန်ပါ။",
      cant_get_credit_try_again: "လက်ကျန်ကို မရနိုင်ပါ။ ထပ်စမ်းကြည့်ပါ။",
      withdraw_success: "ဂုဏ်ယူပါသည်။ သင် အောင်မြင်စွာ ရုပ်သိမ်းလိုက်ပါပြီ။",
      delete_mail_success: "မေးလ်ကို အောင်မြင်စွာ ဖျက်လိုက်ပါ။",
      you_sure_delete_mail: "သေချာပေါက် မေးလ်ကို ဖျက်ချင်နေပီ",
      error: "အမှားအယွင်းတစ်ခု ဖြစ်ပွားခဲ့သည်။",
      developing_feature: "အင်္ဂါရပ်သည် ဖွံ့ဖြိုးဆဲဖြစ်သည်။",
      wrong_giftcode_check_again: "လက်ဆောင်ကုဒ် မမှန်ပါ။ ထပ်မံစစ်ဆေးပါ။",
      gift_code_is_used: "လက်ဆောင်ကုဒ်ကို အသုံးပြုပြီးပါပြီ။",
      congluratulation: "ဂုဏ်ယူပါသည်။ သင်လက်ခံရရှိပြီးပါပြီ။",
      invalid_giftcode: "ထည့်သွင်းထားသော လက်ဆောင်ကုဒ်သည် မမှန်ကန်ပါ။",
      over_exp_giftcode: "လက်ဆောင်ကုဒ် သက်တမ်းကုန်သွားပါပြီ။",
      unsecury_account: "စာရင်းမသွင်းရသေးသော အကောင့်လုံခြုံရေး။",
      giftcode_cant_use_phone_number:
        "လက်ဆောင်ကုဒ်သည် ဗီယက်နမ်ဖုန်းနံပါတ်များဖြင့် လုံခြုံသောအကောင့်များနှင့် သက်ဆိုင်ခြင်းမရှိပါ။",
      giftcode_cant_use_this_account:
        "လက်ဆောင်ကုဒ်ကို ဤအကောင့်အတွက် အသုံးမပြုနိုင်ပါ။",
      please_type_num_money: "ကျေးဇူးပြု၍ ပမာဏကို ထည့်ပါ။",
      minimum_trade: "အနိမ့်ဆုံးငွေပေးငွေယူ",
      gold_up: "ရွှေ",
      gold_n: "ရွှေ",
      not_enough_gold1: "အကောင့်လက်ကျန် မလုံလောက်ပါ။",
      username_must_same: "အကောင့်အမည်သည် တူညီရပါမည်။",
      please_type_full_info:
        "အချက်အလက်အပြည့်အစုံကို ထည့်သွင်းပါ။ (ကိုယ်စားလှယ်အမည်၊ အမည်ပြောင်၊ ပမာဏ)",
      un_phone_number_verify_account:
        "အထောက်အထားမခိုင်လုံသောအကောင့် လုံခြုံသောဖုန်းနံပါတ်",
      cant_transfer_yourselft: "သင်ကိုယ်တိုင် လွှဲပြောင်းလို့ မရပါဘူး။",
      change_avatar_success: "ကိုယ်ပွားကို အောင်မြင်စွာပြောင်းလဲပါ။",
      please_type_full_info1: "အချက်အလက်အားလုံးကို ဖြည့်ပါ။",
      password_confirm_password_must_same:
        "စကားဝှက်အသစ်နှင့် အသစ်ပြန်ထည့်သည့် စကားဝှက်သည် အတူတူဖြစ်ရပါမည်။",
      old_password_wrong: "စကားဝှက်ဟောင်း မမှန်ပါ။",
      you_sure_withdraw: "VND ထုတ်ယူလိုသည်မှာ သေချာသည်။ ရွှေနံပါတ်",
      unexist_account: "အကောင့် မရှိပါ။",
      untype_username: "အသုံးပြုသူအမည်ကို သင်မထည့်ရသေးပါ။",
      untype_password: "စကားဝှက်မထည့်ရသေးပါ။",
      server_lost_connect: "ဆာဗာချိတ်ဆက်မှု ပြတ်တောက်သွားသည်။",
      account_logining_please_logout:
        "သင့်အကောင့်ကို အခြားနေရာတွင် ဝင်ရောက်နေပါသည်။ အကောင့်မဝင်ခင် အကောင့်ထွက်ပါ။",
      account_banning: "အကောင့်ကို ပိတ်ပင်ထားသည်။",
      invalid_authentication_code: "အထောက်အထားစိစစ်ခြင်းကုဒ် မမှန်ပါ။",
      overtime_authentication: "အတည်ပြုကုဒ် သက်တမ်းကုန်သွားပါပြီ။",
      server_maintain_go_later:
        "စနစ်က ပြုပြင်ထိန်းသိမ်းမှုပါ။ ကျေးဇူးပြုပြီး နောက်မှပြန်လာပါ။",

      password_wrong: "စကားဝှက်မှား",
      login_banned: "ဝင်ရောက်ရန် တားမြစ်ထားသည်။",
      unexist_user: "အသုံးပြုသူမရှိပါ။",
      you_not_create_username: "အကောင့်အတွက် နာမည်ပြောင်တစ်ခု မဖန်တီးရသေးပါ။",
      username_warning:
        "အသုံးပြုသူအမည်သည် အက္ခရာ 6 လုံးမှ 18 လုံးအထိရှိရမည်ဖြစ်ပြီး အသံထွက်မပါဘဲ ချက်ချင်းရေးပါ၊ အထူးစာလုံးများမရှိပါ။",
      password_same_warning:
        "ပြန်လည်ထည့်သွင်းထားသော စကားဝှက်သည် ထည့်သွင်းထားသော စကားဝှက်နှင့် မကိုက်ညီပါ။",
      verify_code_wrong: "ကုဒ်မမှန်ပါ။",
      internet_unstable:
        "ကွန်ရက်ချိတ်ဆက်မှု မတည်ငြိမ်ပါ။ wifi/3g ချိတ်ဆက်မှုကို စစ်ဆေးပါ။",
      invalid_username: "အသုံးပြုသူအမည် မမှန်ကန်ပါ။",
      username_exist: "အသုံးပြုသူအမည် ရှိနှင့်ပြီးဖြစ်သည်။",
      invite_code_unexist: "ရည်ညွှန်းကုဒ်မရှိပါ။",
      invite_code_wrong_type: "မမှန်ကန်သော ရည်ညွှန်းကုဒ် (ဥပမာ-K1234567)",
      captcha_wrong: "captcha ကုဒ် မမှန်ပါ။",
      captcha_error: "Captcha အမှား",
      nickname_invalid: "မမှန်ကန်သော အမည်ပြောင်",
      nickname_exist: "နာမည်ပြောင် ရှိပြီးသားပါ။",
      nickname_not_same_username:
        "အမည်ပြောင်သည် အသုံးပြုသူအမည်နှင့် တူညီနိုင်မည်မဟုတ်ပေ။",
      nickname_had: "နာမည်ပြောင်ရှိပြီးသား။",
      nickname_not_sentitive:
        "ထိလွယ်ရှလွယ် နာမည်ပြောင်များကို မရွေးချယ်ပါနှင့်။",
      check_network: "ကွန်ရက်ချိတ်ဆက်မှု မတည်ငြိမ်ပါ။",
      logined_other_device: "သင်သည် အခြားစက်ပစ္စည်းတွင် အကောင့်ဝင်ထားသည်။",
      giftcode_please_enter_full: "လက်ဆောင်ကုဒ်ကိုဖြည့်ပါ။",
      info_update_success_contact_to_complete:
        "အောင်မြင်စွာ မွမ်းမံပြီးပါပြီ။ လုံခြုံရေးအဆင့်ကို အပြီးသတ်ရန် တယ်လီဘော့တ်နှင့် စကားပြောပါ။",
      info_error_update:
        "အချက်အလက်ကို အပ်ဒိတ်လုပ်နေစဉ် အမှားအယွင်းတစ်ခု ဖြစ်ပေါ်ခဲ့သည်။",
      info_email_wrong_type: "အီးမေးလ်ဖော်မတ် မမှန်ပါ။",
      info_phone_number_wrong_type: "ဖုန်းနံပါတ်ဖော်မတ် မမှန်ပါ။",
      info_email_registered_other_account:
        "အီးမေးလ်ကို အခြားအကောင့်ဖြင့် မှတ်ပုံတင်ပြီးဖြစ်သည်။",
      info_not_need_otp_unsecure_account:
        "လုံခြုံမှုမရှိသောအကောင့်များအတွက် OTP မလိုအပ်ပါ။",
      info_phone_number_registered_try_other:
        "မှတ်ပုံတင်ထားသော ဖုန်းနံပါတ်။ ကျေးဇူးပြု၍ အခြားဖုန်းနံပါတ်ကို အသုံးပြုပါ။",
      phone_number_warning: "ဖုန်းနံပါတ်များသည် 10-15 နံပါတ်များရှည်ရပါမည်။",
      otp_required: "OTP ကုဒ်သည် အချက်အလက် လိုအပ်ပါသည်။",
      otp_tele_wrong: "Tele OTP ကုဒ်မှားရိုက်ထည့်ပါ။ ထပ်စမ်းကြည့်ပါ။",
      otp_wrong: "OTP ကုဒ် မမှန်ပါ။",
      otp_unexist: "OTP ကုဒ်မရှိပါ။",
      otp_overtime_use: "OTP ကုဒ် သက်တမ်းကုန်သွားပါပြီ။",
      you_sure_out_game: "ဂိမ်းမှ ထွက်လိုသည်မှာ သေချာပါသလား။",
      password_change_success: "စကားဝှက်ပြောင်းလဲခြင်း အောင်မြင်ပါသည်။",
      password_required: "စကားဝှက်အသစ်သည် အချက်အလက်လိုအပ်သည်။",
      password_confirm_required: "ပြန်လည်ထည့်သွင်းရန် လိုအပ်သော အချက်အလက်",
      password_confirm_wrong: "မမှန်သော စကားဝှက်အသစ်ကို ပြန်ထည့်ပါ။",
      password_current_wrong: "လက်ရှိ စကားဝှက် မမှန်ပါ။",
      account_login_fb_gg_cant_use_feature:
        "Facebook သို့မဟုတ် Google+ ဖြင့် ဝင်ရောက်ထားသည့် အကောင့်များသည် ဤလုပ်ဆောင်ချက်ကို အသုံးမပြုနိုင်ပါ။",
      feature_for_register_secury_account:
        "ဤအင်္ဂါရပ်သည် မှတ်ပုံတင်ထားသော လုံခြုံရေးအကောင့်များအတွက်ဖြစ်သည်။",
      account_warning_nickname:
        "အမည်ပြောင်များကို မွမ်းမံမွမ်းမံထားသော အကောင့်များကို စနစ်က မပံ့ပိုးပါ။",
      you_need_enter_money: "ပမာဏကို ထည့်သွင်းရန် လိုအပ်ပါသည်။",
      deposit_order_double:
        "သင်သည် ငွေဖြည့်သွင်းခြင်း 2 ခုကို နီးကပ်လွန်းစွာ ဖန်တီးထားသည်။",
      deposit_order_limit_per_day:
        "တစ်ရက်အတွင်း အပ်ငွေ အော်ဒါများ ပြုလုပ်ရန် ကန့်သတ်ချက်ကို ကျော်လွန်သွားပါပြီ။ နောက်အမှာစာ မဖန်တီးမီ အပ်ငွေကို အပြီးသတ်ရန် လွှဲပြောင်းရန် လိုအပ်ပါသည်။",
      buy_gold_faild: "ရွှေဝယ်ရန် မအောင်မြင်ပါ။",
      withdraw_money_faild: "ငွေထုတ်ခြင်း မအောင်မြင်ပါ။",
      withdraw_fail: "ငွေထုတ်ခြင်း မအောင်မြင်ပါ။",
      success: "အောင်မြင်သည်!",
      bank_id_required: "ဘဏ် ID လိုအပ်ပါသည်။",
      account_number_required: "အကောင့်နံပါတ် လိုအပ်ပါသည်။",
      username_required: "အသုံးပြုသူအမည် လိုအပ်ပါသည်။",
      nickname_required: "အမည်ပြောင် လိုအပ်ပါသည်။",
      num_gold_required: "ရွှေနံပါတ် လိုအပ်ပါသည်။",
      account_number_wrong_type: "အကောင့်နံပါတ် မမှန်ပါ။",
      num_gold_wrong_type: "ရွှေနံပါတ် မမှန်ပါ။",
      account_banned_transfer:
        "လွှဲပြောင်းခြင်းလုပ်ဆောင်ချက်မှ အကောင့်ကို လော့ခ်ချထားသည်။",
      withdraw_money_minimum:
        "ငွေထုတ်သည့်ပမာဏသည် ထက်ကြီးသည် သို့မဟုတ် ညီမျှရပါမည်။",
      error_undetermine: "အမည်မသိ အမှားတစ်ခု",
      not_enough_transfer_require_contact_service:
        "သင်သည် အရောင်းအ၀ယ်ပြုလုပ်ရန် အရည်အချင်းမပြည့်မီပါ။ အသေးစိတ်အချက်အလက်များကို ဖောက်သည်ဝန်ဆောင်မှုကို ဆက်သွယ်ပါ။",
      attendance_success: "အောင်မြင်စွာတက်ရောက်ခြင်း။",
      attendance_fail: "တက်ရောက်မှု မအောင်မြင်ပါ။",
      account_unregister_secure: "လုံခြုံရေး မှတ်ပုံတင်မထားသည့် အကောင့်",
      account_unexist: "အကောင့်မရှိပါ။",
      support: "ကျေးဇူးပြုပြီးဆက်သွယ်ပါ ",
      server_unconnect: "ဆာဗာသို့ မချိတ်ဆက်ပါ။",
      server_terminate_interupt: "ဆာဗာ ခေတ္တပိတ်ထားသည်။",
      account_not_enter: "အသုံးပြုသူအမည်ကို သင်မထည့်ရသေးပါ။",
      password_not_enter: "စကားဝှက်မထည့်ရသေးပါ။",
      play_game_fun: "ဂိမ်းကို ပျော်ရွှင်စွာ ကစားပါ။",
      good_luck_later: "နောက်တစ်ကြိမ် ကံကောင်းပါစေလို့ ဆုတောင်းပါတယ်။",
      transfer_account_receive_unexist: "လက်ခံသည့်အကောင့် မရှိပါ။",
      transfer_minimum_money:
        "လွှဲပြောင်းသည့်ပမာဏသည် အနည်းဆုံး ငွေပေးငွေယူတန်ဖိုးထက် နည်းပါသည်။",
      account_not_enought_transfer_condition:
        "အကောင့်သည် ကုန်သွယ်မှုအတွက် အရည်အချင်းမပြည့်မီပါ။ ထုတ်ဝေသူကို ဆက်သွယ်ပါ။",
      sercure_feature_auto_active:
        "မှတ်ပုံတင်ခြင်းအောင်မြင်သည့်အချိန်မှ ၂၄ နာရီအကြာတွင် လုံခြုံရေးလုပ်ဆောင်ချက်ကို အလိုအလျောက် စတင်အသုံးပြုနိုင်မည်ဖြစ်သည်။",
      transfer_limit:
        "ငွေပမာဏအချို့ကို အထွေထွေကိုယ်စားလှယ်ထံသို့သာ လွှဲပေးနိုင်ပါသည်။",
      transfer_over_credit:
        "လွှဲပြောင်းသည့်ပမာဏသည် ကန့်သတ်ချက်ထက်ကျော်လွန်သွားပြီ။",
      transfer_account_send_unexist: "ငွေလွှဲအကောင့် မရှိပါ။",
      transfer_enter_content:
        "လိုအပ်သော လွှဲပြောင်းအကြောင်းအရာကို ထည့်သွင်းပါ။",
      tranfer_same_account:
        "ငွေလွှဲအကောင့်သည် လက်ခံအကောင့်နှင့် အတူတူပင်ဖြစ်ပါသည်။",
      transfer_local_feature_terminated_contact_service:
        "အတွင်းပိုင်းလွှဲပြောင်းခြင်းလုပ်ဆောင်ချက်ကို ယာယီဆိုင်းငံ့ထားသည်။ အကူအညီအတွက် ဖောက်သည်ဝန်ဆောင်မှုကို ဆက်သွယ်ပါ။",
      transfer_local_feature_terminated_contact_service1:
        "အတွင်းပိုင်း လွှဲပြောင်းခြင်း လုပ်ဆောင်ချက်ကို ယာယီ ပိတ်ထားသည်။ အသေးစိတ်အချက်အလက်များအတွက် ဖောက်သည်ဝန်ဆောင်မှုကို ဆက်သွယ်ပါ။",
    },
    gui_profile: {
      profile_title: "ကိုယ်ရေးအကျဉ်း",
      join_time: "ပါဝင်သည့်ရက်စွဲ",
      birth_date: "မွေးနေ့",
      ip_address: "IP လိပ်စာ",
      invite_code: "ရည်ညွှန်းကုဒ်",
      change_password: "စကားဝှက်ကိုပြောင်းရန်",
      change_password1: "Change password",
      change_avatar: "ကိုယ်ပွားကို ပြောင်းပါ။",
      back: "ကျော",
      change: "ပြောင်းလဲပါ။",
      current_password: "လက်ရှိစကားဝှက်",
      new_password: "စကားဝှက်အသစ်",
      confirm_new_password: "စကားဝှက်အသစ်ထည့်ပါ။",
      update: "အပ်ဒိတ်",
      alert: {
        warning_1: "သင့်ကိုယ်ပွားသည် ယခင်ရုပ်ပွားတော်နှင့် မတူပါ။",
        warning_2: "သင်ပြောင်းလိုသော Avatar ကို ရွေးပါ။",
      },
      match_played: "ការប្រកួតបានលេង",
      win_rate: "អត្រាឈ្នះ",
    },
    gui_agency: {
      deposit_title: "ရွှေငွေဖြည့်ပါ။",
      deposit_gold: "ရွှေငွေဖြည့်ပါ။",
      deposit_history: "ငွေဖြည့်မှတ်တမ်း",
      sell_title: "ရွှေရောင်း",
      sell_gold: "ရွှေရောင်း",
      sell_history: "သမိုင်းကိုရောင်း",
      current_credit: "လက်ကျန်ငွေ",
      agency: "အေဂျင်စီ",
      deposit_money: "အပ်ငွေ",
      receive_gold: "ရွှေလက်ခံ",
      agency_note:
        "မှတ်ချက်- မလွှဲပြောင်းမီ အေးဂျင့်၏အချက်အလက်များကို သေချာစစ်ဆေးပါ၊ မပံ့ပိုးသော ထုတ်ဝေသူမှားသို့ လွှဲပြောင်းပါ။ ၅ မိနစ်ကြာပြီးနောက် ရွှေအဆက်အသွယ် မရခဲ့ပါ။",
      or_call_to: "ဆက်သွယ်ရန်",
      note: "မှတ်ချက်",
      minimum_trade: "အနိမ့်ဆုံးငွေပေးငွေယူ",
      exchange_rate: "ကူးပြောင်းနှုန်း",
      account_number: "အကောင့်နံပါတ်",
      account_name: "အကောင့်နာမည်",
      area: "ဧရိယာ",
      confirm: "အတည်ပြုပါ။",
      deposit_note:
        "ငွေသွင်းအမှာစာကို သင်အောင်မြင်စွာ ဖန်တီးပြီးဖြစ်သည်။ ထို့နောက် ငွေသွင်းခြင်းလုပ်ငန်းစဉ်ကို အပြီးသတ်ရန်။ ငွေလွှဲပြေစာပေးပို့ရန် ဖောက်သည်ဝန်ဆောင်မှုကို ဆက်သွယ်ပါ။",
      notify_title: "အကြောင်းကြားပါ။",
      num_transfer_gold: "ရွှေနံပါတ်ကို လွှဲပြောင်းပါ။",
      receive_money: "လက်ခံရရှိသည့်ပမာဏ",
      branch: "ကိုင်း",
      account_owner_name: "အကောင့်ပိုင်ရှင်အမည်",
      continue: "ဆက်လက်",
      status: "အဆင့်အတန်း",
      time: "အချိန်",
      transfer_code_short: "ငွေပေးငွေယူကုဒ်",
      num_transfer_money: "လွှဲပြောင်းပမာဏ",
    },
    gui_list_agency: {
      agency_title: "အေဂျင်စီ",
      korea: "ကိုရီးယား",
      japan: "ဂျပန်",
      taiwan: "ထိုင်ဝမ်",
      lao: "လာအို",
      campuchia: "ကမ္ဘောဒီးယား",
      no: "ဂဏန်းအလို့ငှာ",
      agency: "အေဂျင်စီ",
      nickname: "အမည်ပြောင်",
      phone_number: "ဖုန်းနံပါတ်",
      contact: "ဆက်သွယ်ပါ။",
      area: "ဧရိယာ",
      action: "အက်ရှင်",
      buy: "ဝယ်ပါ။",
      sell: "ရောင်း",
    },
    gui_attendance: {
      attendance: "ကျောင်းခေါ်ချိန်",
      attendance_title: "ကျောင်းခေါ်ချိန်",
      day: "နေ့",
      day1: "နေ့ ၁",
      day2: "နေ့ ၂",
      day3: "နေ့ ၃",
      day4: "နေ့ ၄",
      day5: "နေ့ ၅",
      day6: "၆ ရက်",
      day7: "၇ ရက်",
      attendance_note: "စနေ၊",
    },
    gui_open_egg: {
      open_egg: "ကြက်ဥကိုဖွင့်ပါ။",
      gold_egg: "ရွှေဥ",
      white_egg: "ရွှေဥ",
    },
    gui_bundle_download: {
      download_game: "ဂိမ်းဒေါင်းလုဒ်လုပ်ပါ။",
      download: "ဒေါင်းလုဒ်လုပ်ပါ။",
    },
    gui_event_list_giftcode: {
      list_giftcode_title: "လက်ဆောင်ကုဒ်စာရင်း",
    },
    gui_events: {
      event_title: "ပွဲ",
      event: "ပွဲ",
      event_top_bet: "ထိပ်တန်းလောင်းကစားပွဲ",
      event_attendace: "ပွဲတက်ရောက်သူ",
      event_receive_bet: "အလောင်းအစားပွဲကို လက်ခံပါ။",
      event_find_million: "သန်းကြွယ်သူဌေးဖစ်ရှာပါ။",
      event_sicbo: "Sicbo ပွဲ",
      event_jackpot_sicbo: "Sicbo Jackpot",
    },
    gui_trade_history: {
      trade_history_title: "ငွေလွှဲမှတ်တမ်း",
      trade_history: "ငွေလွှဲမှတ်တမ်း",
      play_gold: "ရွှေကစားပါ။",
      play_chip: "အကြွေစေ့ကစားပါ။",
      deposit_chip: "ငွေဖြည့်ဒင်္ဂါးများ",
      deposit_gold: "ရွှေငွေဖြည့်ပါ။",
      expense_gold: "ရွှေဖြုန်း",
      trade_code: "ငွေပေးငွေယူကုဒ်",
      time: "အချိန်",
      service: "ဝန်ဆောင်မှု",
      incurred: "ကြုံမည်။",
      credit: "လက်ကျန်",
      description: "ဖော်ပြချက်",
      detail: "အသေးစိတ်",
      view: "အမြင်",
    },
    gui_forgot_password: {
      account: "အကောင့်",
      account_title: "အကောင့်",
      account_note_full_info:
        "အထောက်အပံ့ရဖို့။ ကျေးဇူးပြု၍ အောက်ပါအချက်အလက်များကိုဖြည့်ပါ။",
      account_note_username: "ဇာတ်ကောင်အမည်သည် အချက်အလက် လိုအပ်သည်။",
      type_login_name: "အသုံးပြုသူအမည်ထည့်ပါ။",
      authentication_code: "အတည်ပြုရန်ကုတ်",
      send: "ပို့ပါ။",
      forgot_password: "စကားဝှက်ကိုမေ့နေပါသလား",
      forgot_password_title: "စကားဝှက်ကိုမေ့နေပါသလား",
      telegram_authentication_code: "ကြေးနန်းအထောက်အထားစိစစ်ခြင်းကုဒ်...",

      send: "ပါ",
      new_password: "စကားဝှက်အသစ်",
      confirm_new_password: "သင့်စကားဝှက်အသစ်ကို ပြန်လည်ထည့်သွင်းပါ။",
    },
    gui_display_name: {
      account_title: "အကောင့်",
      account_note_username: "ဇာတ်ကောင်အမည်သည် အချက်အလက် လိုအပ်သည်။",
      username: "အသုံးပြုသူအမည်",
      account_note_username1:
        "စာလုံး 6 လုံးမှ 16 လုံးကြားရှိ ဇာတ်ကောင်အမည်၊ ထိလွယ်ရှလွယ် စာလုံးများမရှိ၊ အထူးဇာတ်ကောင်များနှင့် နေရာလွတ်များမရှိပါ။",
      create_new: "အသစ်ဖန်တီးပါ။",
    },
    gui_login: {
      login_title: "အကောင့်",
      login_name: "အသုံးပြုသူအမည်",
      password: "စကားဝှက်",
      save_password: "စကားဝှက်ကိုသိမ်းဆည်းပါ။",
      login: "လော့ဂ်အင်",
      forgot_password: "စကားဝှက်ကိုမေ့နေပါသလား",
    },
    gui_registry: {
      register_title: "မှတ်ပုံတင်ပါ။",
      register: "မှတ်ပုံတင်ပါ။",
      login_name: "အသုံးပြုသူအမည်",
      password: "စကားဝှက်",
      confirm_password: "စကားဝှက်ကိုပြန်လည်ထည့်ပါ",
      invite_code_note: "ရည်ညွှန်းကုဒ် (ချန်လှပ်ထားနိုင်သည်)",
      captcha: "Captcha",
    },
    gui_mailbox: {
      title: "ခေါင်းစဥ်:",
      content: "အကြောင်းအရာ-",
      sender: "ပေးပို့သူ-",
    },
    gui_minigame: {
      game_download: "ဂိမ်းဒေါင်းလုဒ်လုပ်ပါ။",
    },
    gui_confirm_transfer: {
      notify: "အကြောင်းကြားပါ။",
      agency_account: "အေဂျင်စီအကောင့်",
      notify_note_cheat:
        "လိမ်လည်မှုများကို ရှောင်ရှားရန် အေးဂျင့်များနှင့်သာ ဆက်ဆံပါ။",
      you_sure_send: "သင် သေချာပေါက် လွှဲပြောင်းချင်ပါသည်။",
      amount_money: "ငွေပမာဏ",
      reason: "အကြောင်းပြချက်",
      reject: "မလုပ်တော့",
      accept: "လက်ခံပါတယ်။",
      account: "အကောင့်",
      confirm_transfer_title: "အကြောင်းကြားပါ။",
    },
    gui_buy_gold: {
      buy_gold: "ရွှေဝယ်ပါ။",
      buy_gold_title: "ရွှေဝယ်ပါ။",
    },
    gui_sell_gold: {
      sell_gold: "Sell Gold",
      sell_gold_title: "Sell GOld",
      current_credit: "Current Credit",
      agency: "Agency",
      enter_agency: "Enter agency",
      nickname: "NickName",
      enter_nickname: "Enter Nickname",
      buy_money: "Amout money",
      number_sell_gold: "Amount money...",
      gold: "Gold",
      receive_money: "Receive money...",
      other_agency: "Other agency",
      continue: "Continue",
      transfer_reason: "Transfer reason",
      lao: "Laos",
      cam: "Cambodia",
      vn: "Vietnam",
      kor: "Korea",
      jp: "Japan",
      tw: "Taiwan",
    },

    safetybox: {
      safetybox_title: "Safety Box",
      lb_goldin: "Gold in Safety Box",
      note: "Create password to use safe box!",
      lb_btn: {
        chuyen: "DEPOSIT",
        rut: "WITHDRAW",
        doimk: "CHANGE PWD",
        dongy: "ACCEPT",
        back: "BACK",
      },
      lb_editbox: {
        lb_chuyen: "Deposit Gold",
        lb_rut: "Withdraw Gold",
        placeholder_password_rut: "Enter Safety Box password to withdraw",
        placeholder_password_create: "Create password",
        placeholder_re_password_create: "Re-enter Password",
        placeholder_password_old: "Old pasword",
        placeholder_new_password_update: "New password",
        placeholder_re_new_password_update: "Re-enter new password",
      },
      message: {
        wrong_password: "Wrong password. Please type again!",
        wrong_password_retype: "Re-enter wrong passwrod. Please type again!",
        wrong_old_pass: "Old password is incorrect. Please type again!",
        withdraw_success: "Withdraw success!",
        transfer_success: "Deposit success!",
        transfer_failed: "Deposit fail!",
        create_password_success: "Create password success!",
        update_password_success: "Update password success!",
        please_type_money_withdraw: "Enter withdraw amount",
        please_type_money_transfer: "Enter deposit amount",
        error_create: "Creat fail. Please try again!",
        error_update: "Update fail. Please try again!",
        error_network: "Network unstable. Please try again later!",
      },
    },
    gui_setting: {
      music: "Music",
      music_on: "Music (On)",
      music_off: "Music (Off)",
      term_of_use: "Terms of use",
      feedBack: "Feedback",
    },
    gui_chuyen_quy: {
      transfer_withdraw_title: "Deposit/Withdraw",
      num_transfer_gold: "Transfer Gold number",
      receive_money: "Amount receive",
      transfer_fund: "Transfer fund",
      play_now: "Play now",
      withdraw_fund: "Withdraw fund",
      withdraw_money: "Amount to withdraw",
      num_receive_gold: "Amount receive",
      type_num_gold: "Enter gold number",
      receive_gold: "Amount receive",
      current_money: "Current credit",
    },
    gui_transfer: {
      transfer: "Transfer",
      transfer_title: "Transfer",
      current_credit: "Current Credit",
      enter_nickname: "Enter Nickname",
      re_enter_nickname: "Re-Enter Nickname",
      enter_sell_money: "Enter the amount to transfer",
      receive_gold: "Receive Gold",
      reason: "Transfer reason",
      continue: "Continue",
      agency: "Agency",
      gold: "Gold",
      amount_less_than_minimum:
        "Transfer amount is less than minimum transaction value!",
      unregister_security:
        "Security unregistered account! Please contact Customer Service!",
      otp_expired: "OTP code has expired!",
      otp_not_correct: "OTP code is not correct!",
      otp_error: "OTP code error!",
      una_balance: "Unavailable balance!",
      lock_transfer: "The nickname is locked from the transfer function!",
      acc_not_exist: "Nickname does not exist!",
      enter_details: "Please enter transfer details!",
      not_transfer_yourself: "Unable to transfer to yourself",
      not_transfer_agency: "Agent cannot transfer to agent",
      not_transfer_agency2: "Level 2 agents cannot transfer to level 2 agents",
      not_transfer_not_your_agency2:
        "You cannot transfer money to a level 2 agent that is not yours!",
      amount_maximum:
        "\n\nThe maximum amount that can be transferred is %{money} according to GIFTCODE mechanism. For more details, please contact Customer Service!",
      transfer_fail: "Transfer failed!",
      transfer_success: "Transfer success!",
      sell_gold: "Sell Gold to ",
    },
    gui_logout: {
      logout_title: "Log Out",
      warning: "Are you sure you want to exit the game?",
      no: "Cancel",
      yes: "Ok",
    },
    gui_policy: {
      policy_title: "Terms of Use",
    },
    gui_security: {
      security_title: "Profile",
      account_name: "Account name",
      username: "Character name",
      cmtnd: "ID Number",
      email: "Email",
      phone_number: "Phone number",
      update: "Update",
      active: "Active",
      get_otp: "Get OTP",
    },
    gui_buy_and_sold: {
      buy_and_sold_title: "Shop",
      transfer: "Transfer",
      sell_gold: "Sell Gold",
      input_otp: "Input OTP",
    },
    gui_gift_code: {
      notice:
        "* Please enter the correct to receive the gift and notice the receiving time.\n* Each giftcode is only applicable for 1 account.",
      gift_code_title: "Gift Code",
      enter_gift_code: "Enter Gift Code",
      receive: "Receive",
    },
    gui_header: {
      logout: "Log Out",
      safetybox: "Safety Box",
      history: "History",
      language: "Language",
      shop: "Shop",
      setting: "Setting",
      confirm_change_language:
        "Are you want to change\nlanguage to %{language} ?",
      ok: "Yes",
      cancel: "No",
    },
    gui_choose_nation: {
      choose_nation_title: "Choose nation",
    },
    gui_language: {
      language_title: "Language",
    },
  },
  
  meowhilo: {
    connection_error:
      "Connection is unstable!\nPlease check your wifi/3g connection again.",
      connection_error1: "Game connection failed.\nPlease try again",
      connection_end: "You have been disconnected.\nPlease try again",
    not_enough_money:
      "You don't have enough money.\nPlease add more or reduce your bet",
    spin_error: "Unsuccessful bet.\nPlease try again",
  }

};
