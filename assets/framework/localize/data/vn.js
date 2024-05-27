
const DEF_CURRENCY = "XU";
//replace XU = " + DEF_CURRENCY  + "
module.exports = {
  "": "",

  alert: {
    title_notification: "Thông báo",
    ok: "ĐỒNG Ý",
    yes: "Có",
    no: "KHÔNG",
    loaded: "NẠP",
    close: "HỦY",
    refuse: "TỪ CHỐI",
    veritify: "Xác thực",
    fail: "Lỗi",
    discard: "Chọn lại",
    confirm_logout: "Bạn chắn chắn muốn đăng xuất không?",
    you_need_veritify_pin: "Bạn cần xác thực mã PIN",
    you_need_veritify_phone_number: "Bạn cần xác thực số điện thoại!",
    you_need_veritify_loaded_card: "Bạn cần nạp thẻ!",
    coming_soon: "Chức năng sắp ra mắt",
    coming_soon_game: "Game sắp ra mắt!",
    game_maintian: "Game đang bảo trì!",
    require_login: "Bạn cần đăng nhập!",
    fucntion_maintian: "Chức năng đang bảo trì!",
    error: {
      not_enough_gold: "Không đủ " + DEF_CURRENCY,
      wrong_captcha: "Sai mã captcha",
      wrong_syntax: "Sai cú pháp",
      wrong_pin: "Mã PIN không đúng, hoặc chưa đăng ký mã PIN",
      wrong_pin_or_not_reg_pin: "Sai mã PIN hoặc chưa đăng ký mã PIN",
      account_undefined: "Người chơi không tồn tại",
      connector: {
        fail: "Không có kết nối Internet\n Kiểm tra lại kết nối của bạn!",
        a_2: "Bạn cần có kết nối mạng!!!",
        a_3: "Đang kết nối đến hệ thống",
        a_4: "Bạn chưa có quà.\n \n Hãy tham gia Event để nhận quà!",
        a_5: "Vui lòng nhập mã PIN",
        a_6: "Vui lòng nhập Captcha!",
        expired: "Phiên đăng nhập đã hết hạn, mời bạn đăng nhập lại",
        ban: "Tài khoản này đã bị khóa bởi hệ thống",
        a_9: "Hệ thống đang bảo trì\nXin vui lòng quay lại sau!",
        some_where: "The account is already logged in elsewhere",
      },

      services: {
        a_10: "Tài khoản hoặc mật khẩu không đúng",
        a_11: "Tài khoản đã được sử dụng",
        a_12: "Tài khoản không tồn tại",
        a_13: "Sai mật khẩu",
        a_14: "Bạn đã đăng kí quá nhiều tài khoản.",
        a_15: "Vui lòng chờ ít phút để tiếp tục tạo tài khoản.",
        a_16: "Bạn đã tạo quá nhiều tài khoản \n vui lòng quay lại vào ngày mai.",
      },
      defined: {
        fail: "Lỗi không xác định",
        param_invalid: "Tham số không chính xác",
        maintain_system: "Hệ thống đang bảo trì",
        session_key_invalid: "Session key ko tồn tại",
        session_expired: "Session key hết hạn",
        session_room_not_exist: "Phòng chơi không tồn tại",
        session_not_enough_min_buy_in: "Không đủ mức cược tối thiểu",
        out_buy_in_range: "Ngoài mức cược",
        game_structure_invalid: "Game structure không tồn tại",
        already_in_game: "Bạn đã trong game",
        entering_game: "Đang vào game",
        gift_code_invalid: "Giftcode không tồn tại",
        gift_code_is_used: "Giftcode đã được sử dụng",
        gift_code_is_expired: "Giftcode đã hêt hạn",
        login_banned_ip:
          "IP của bạn đã bị khoá.\n Vui liên hệ CSKH để biết thêm thông tin chi tiết!",
        login_banned_user:
          "Tài khoản của bạn đã bị khoá.\n Vui liên hệ CSKH để biết thêm thông tin chi tiết!",
        player_action_invalid: "Thao tác không hợp lệ",
        player_action_fail: "Thao tác lỗi",
        not_enough_gold: "Không đủ  " + DEF_CURRENCY,
        default: "Lỗi",
        not_bet_too_long:
          "Bạn bị mời ra khỏi hệ thống\ndo không tương tác quá lâu",
      },
    },
  },

  loading: {
    check_server: "Kiểm tra thông tin máy chủ",
    update: "Nâng cấp",
    update_success: "Cập nhật thành công",
    update_fail: "Cập nhật thất bại",
    please_wait_update_version: "Vui lòng cập nhật phiên bản mới nhất",
    check_version: "Kiểm tra phiên bản",
    progress_loading_new: "Đang cập nhật phiên bản mới.",
    not_loading_manifest: "Không tải được manifest",
    latest_current_version: "Phiên bản hiện tại mới nhất",
    load: "Đang tải dữ liệu",
  },

  lobby: {
    lobby_notify_no_talk:
      "Hiện tại đang không phát Live.\nQuý khách vui lòng quay lại sau.",
    not_have_account: "Bạn chưa có tài khoản?",
    forgot_password: "Quên mật khẩu",
    login: "Đăng nhập",
    register: "Đăng ký",

    //   license_content: 'Chào mừng bạn đến với Hệ thống tài khoản dịch vụ. Để đăng ký tài khoản và sử dụng dịch vụ, vui lòng đọc kỹ các thỏa thuận sử dụng dịch vụ của chúng tôi dưới đây:\n 1.1. Bạn không được phép buôn bán đơn vị tiền ảo trong dịch vụ để thu lợi và hay chuyển đổi sang tiền Gold.\n 1.2. Bạn không được phép cung cấp các website, email, hoặc bất cứ hình thức lừa đảo nào nhằm lấy thông tin tài khoản hay tiền ảo trong dịch vụ của các tài khoản khác.\n 1.3. Bạn không được phép nhận tiền ảo trong dịch vụ từ website, email, tài khoản lừa đảo hay các nguồn bất chính\n 1.4. Nếu chúng tôi phát hiện bạn vi phạm bất kỳ quy định nào trong thỏa thuận sử dụng này thì ngay lập tức khóa tài khoản mà không cần báo trước. \n 1.5. Trong quá trình giao dịch nếu có lỗi xảy ra, bạn vui lòng liên hệ email                            để được giúp đỡ.\n 1.6. Bạn hiểu và chấp nhận rằng khi xảy ra tranh chấp, căn cứ để giải quyết tranh chấp giữa bạn và hệ thống dịch vụ là bản thỏa thuận này. \n 1.7. Nghiêm cấm dò thông tin bảo mật để chiếm đoạt tài khoản của người khác\nĐể sử dụng các dịch vụ, người sử dụng cần phải đăng ký tài khoản và các thông tin về chủ sở hữu tài khoản.\n2.1. Quy định tên tài khoản: \n- Tên tài khoản gồm các ký tự bảng chữ cái tiếng Anh, chữ số, dấu gạch dưới. \n- Khi tạo lập tài khoản điền đầy đủ các thông tin được yêu cầu khi thực hiện đăng ký. \n- Việc tạo lập tài khoản cần tuân thủ các nguyên tắc sau: \n+ Không được đặt tên và tạo biểu tượng liên quan đến các danh nhân, tên của các vị lãnh đạo Đảng và Nhà Nước.\n+ Không được đặt tên và tạo biểu tượng có nội dung phản động, bài xích tôn giáo, khiêu dâm, bạo lực, đi ngược lại thuần phong mỹ tục, truyền thống và văn hóa Việt Nam. \n+ Không được đặt tên và tạo biểu tượng có nội dung xúc phạm, khích bác đến người khác dưới bất kỳ hình thức nào. \n+ Không được đặt tên và tạo biểu tượng tên kẻ xấu (trùm khủng bố, phát xít…) \n2.2. Thông tin chủ tài khoản. \n- Chủ tài khoản phải tự bảo quản tài khoản, mật khẩu, email và ghi các thông tin cần thiết phòng khi có sự cố xảy ra (ví dụ: bị hack.v.v…). Chúng tôi không chịu trách nhiệm trước bất kỳ tổn thất nào của bạn do quá trình sử dụng dịch vụ gây ra. \n- Email của tài khoản là email được sử dụng duy nhất trong hệ thống. Chủ tài khoản tự chịu trách nhiệm về bảo mật email và sử dụng email để đăng ký trong hệ thống. \n2.3. Quy định về việc thanh lọc tài khoản \n- Thời gian thanh lọc định kỳ: Thanh lọc thường xuyên đối với tài khoản hoàn toàn không có hoạt động phát sinh giao dịch trên hệ thống dịch vụ \n- Xóa bỏ khỏi hệ thống: Với những tài khoản trong thời gian 6 tháng không phát sinh bất kỳ giao dịch nào trên hệ thống dịch vụ, hệ thống sẽ tiến hành thanh lọc và xóa những tài khoản đó. \nChúng tôi có quyền bổ sung, sửa đổi hay xóa bỏ bất kỳ thông tin, quy định nào cũng như thay đổi việc trình bày, thành phần hoặc chức năng ... của hệ thống mà không cần báo trước.

    //   Chủ tài khoản phải tuân thủ các quy định trong thỏa thuận này cũng như các hành vi dưới đây:
    //    4.1. Không được xâm phạm an ninh hoặc có hành vi tìm cách xâm phạm an ninh hệ thống máy chủ của của website.
    //    4.2. Không được sử dụng các công cụ làm thay đổi kết quả chơi hoặc có các hành vi gian lận để phá hoại hoặc trục lợi.
    //    4.3. Không được mạo nhận là các thành viên khác (người quản trị hệ thống, chuyên viên hỗ trợ,... của hệ thống dịch vụ).
    //    4.4. Không phát tán và truyền bá thông tin bất hợp pháp, lừa gạt, bôi nhọ, sỉ nhục, tục tĩu, khiêu dâm, xúc phạm, đe dọa, lăng
    //   mạ, thù hận, kích động… hoặc trái với chuẩn mực đạo đức chung của xã hội.
    //    4.5. Không gửi thông tin quảng cáo, thư dây chuyền hay bất kỳ dạng liên lạc có mục đích thương mại.
    //    4.6. Không được gửi hoặc truyền bất kỳ thông tin hoặc phần mềm nào có chứa bất kỳ loại virus, trojan, bọ hay các thành phần
    //   nguy hại nào đến sự an toàn của hệ thống dịch vụ.
    //    4.7. Không được gửi liên tục các dòng chữ vô nghĩa trên các kênh chat nhằm cản trở hoặc quấy rối các thành viên khác.
    //    4.8. Không được có thái độ đe dọa hoặc các hành vi quấy rối, gây ức chế tâm lý,... đối với các thành viên khác.
    //    4.9. Không được sử dụng những từ ngữ, lời lẽ, dấu hiệu, ký tự không lành mạnh, tục tĩu, phỉ báng, xúc phạm,... nhân viên quản trị
    //   hệ thống dịch vụ, người chơi và các tổ chức khác.
    //    4.10. Không được có hành vi câu kết, gây rối, cản trở, phá hoại, bịa đặt thông tin gây hại cho cộng đồng, nhà phát hành hoặc đối
    //   tác liên kết với nhà phát hành trong mọi chương trình, sự kiện, dịch vụ. Nhà phát hành hoặc ban tổ chức sẽ có những biện pháp
    //   xử lý như khóa tài khoản hoặc tước mọi quyền lợi của chủ tài khoản vi phạm
    //    4.11. Cung cấp đầy đủ, chính xác các thông tin cá nhân như họ tên, giới tính, ngày sinh, email, địa chỉ, số chứng minh thư nhân
    //   dân cũng như những yếu tố khác có ý nghĩa trong việc xác định quyền sở hữu đối với tài khoản theo yêu cầu của doanh nghiệp
    //   cung cấp dịch vụ trò chơi trực tuyến. Nhà phát hành có quyền hủy quyền lợi của tài khoản trong trường hợp thông tin cá nhân
    //   không đầy đủ hoặc không chính xác trong thời gian xét duyệt tài khoản được hưởng quyền lợi.
    //    4.12. Sử dụng đầy đủ các công cụ bảo mật cho tài khoản: bảo mật đăng nhập ODP, OTP, bảo mật số dư bằng két bảo mật để
    //   bảo vệ tài khoản và số dư. Trong trường hợp tài khoản bị hack và tài khoản hack không có khả năng hoàn trả số dư, tài khoản
    //   không chứng minh được đã sử dụng đầy đủ các công cụ bảo mật nói trên sẽ không được hỗ trợ truy thu, hoàn trả số dư.
    //   4.13. Không được phép lợi dụng các sơ hở, lỗi của hệ thống để trục lợi, mọi tài khoản sẽ bị tịch thu toàn bộ số dư và khóa tài
    //   khoản vĩnh viễn nếu bị phát hiện các hành động này.

    //    5.1. Nếu phát hiện người sử dụng vi phạm các quy định đã nêu trong Bản thoả thuận này, chúng tôi có quyền cấm hoặc từ chối
    //   truy cập của bất cứ tài khoản nào mà không cần báo trước. Trong những trường hợp nghiêm trọng, Nhà phát hành sẽ phối hợp
    //   với chính quyền để truy cứu trách nhiệm đối với những người vi phạm.
    //    5.2. Chúng tôi có quyền sử dụng thông tin tài khoản để gửi thông báo cho chủ tài khoản về các sản phẩm và dịch vụ hoặc
    //   chương trình khuyến mại thông qua thư điện tử hoặc thư bưu chính. Chúng tôi cũng có thể sử dụng các thông tin này để tiến
    //   hành các cuộc điều tra (Ví dụ: thông báo thay đổi dịch vụ trong hệ thống, thông báo về các chương trình khuyến mại hay các
    //   hành động nhân đạo và xã hội khác). Chúng tôi duy trì chính sách \"KHÔNG GỬI THƯ RÁC\", không chia sẻ, bán hay để lọt email
    //   của chủ tài khoản cho các bên thứ ba.
    //    5.3. Chúng tôi có toàn quyền thay đổi những điều khoản, chính sách mà chúng tôi cho rằng không còn phù hợp trong thoả thuận
    //   này mà không cần báo trước, người sử dụng mặc nhiên đồng ý chấp hành các sửa đổi trong quy định mới.
    //    5.4. Đối với các tài khoản vi phạm điều khoản trên, chúng tôi có quyền khóa tài khoản hay hủy mọi quyền lợi tùy theo mức độ vi
    //   phạm
    //    5.5. Chúng tôi sẽ chỉ cung cấp thông tin cá nhân và/hoặc địa chỉ IP của chủ tài khoản khi được các cơ quan luật pháp Việt Nam
    //   yêu cầu và để làm các việc thực sự cần thiết như sau:
    //   - Phối hợp với cơ quan điều tra để tìm ra những hoạt động bất hợp pháp liên quan đến việc phát tán thông tin và an ninh mạng.
    //   - Bảo vệ quyền và tài sản liên quan đến hệ thống dịch vụ do chúng tôi cung cấp.
    //   - Nhận dạng những người cố tình vi phạm luật thông tin và an ninh mạng.
    //    5.6. Trong các sự kiện được tổ chức, chúng tôi có quyền hủy giải thưởng khách hàng nếu thông tin tài khoản khách hàng không
    //   phải là chính chủ khách hàng đó, hoặc phát hiện hành vi buôn bán trái phép giữa các tài khoản.
    //    5.7. Giải quyết khiếu nại, hack: chúng tôi có quyền từ chối giải quyết khiếu nại, bị hack tài khoản, số dư nếu tài khoản hack
    //   không còn số dư và tài khoản bị hack không đảm bảo được việc sử dụng đầy đủ các công cụ bảo mật (ODP, OTP và két bảo mật)
    //   trước và trong thời điểm bị hack.
    //    5.8 : Chúng tôi từ chối giải quyết các trường hợp khiếu nại mà thời điểm xảy ra quá 2 tuần so với thời điểm nhận khiếu nại.
    //    5.9 : Nhà phát hành có quyền khóa và tịch thu toàn bộ số dư của các tài khoản nằm trong diện nghi vấn hack hoặc sử dụng các
    //   biện pháp gian lận hoặc lợi dụng sơ hở, lỗi để trục lợi trong game.

    //    6.1. Khi tố cáo, khiếu nại một tài khoản khác bạn cần nêu rõ tên tài khoản bị tố cáo, khiếu nại và hành vi vi phạm của tài khoản
    //   đó. Để được bảo vệ quyền lợi, bạn vui lòng cung cấp đủ ba thông tin về tài khoản của mình (bao gồm: CMND, câu hỏi và câu trả
    //   lời bảo mật, địa chỉ email khi đăng ký tài khoản) và địa chỉ liên hệ cần thiết.
    //    6.2. Trong quá trình tố cáo, khiếu nại, bạn có thể yêu cầu nhân viên tiếp nhận khóa tài khoản của mình để bảo vệ tài sản, bảo
    //   toàn số dư còn lại trong tài khoản.
    //    6.3. Trong trường hợp tố cáo, khiếu nại hack không đúng sự thật, tài khoản của bạn sẽ bị phạt khóa trong thời gian 02 tuần.
    //    6.4. Trong trường hợp xảy ra tranh chấp bắt buộc phải đối chất, chúng tôi có trách nhiệm thông báo thời gian cụ thể cho bạn.
    //   Bạn hoặc người ủy quyền của bạn phải có mặt tại địa điểm Nhà phát hành đưa ra.

    //   Thoả thuận sử dụng này ràng buộc chúng tôi kể từ khi được đưa lên website dịch vụ và ràng buộc Quý khách hàng kể từ khi
    //   đăng ký sử dụng dịch vụ. Khi có sửa đổi bổ sung được đưa lên thì chúng tôi và Quý khách hàng đều phải tuân thủ những sửa đổi
    //   bổ sung do chúng tôi đưa ra.'
    title_naprut: "Nạp / Rút",
    title_support: "Hỗ Trợ",
    title_security: "Bảo Mật",
    title_mail: "Hộp Thư",
    title_fanpage: "Fanpage",
    title_giftcode: "Gift Code",
    logout: "Đăng xuất",
    type_gift_code: "Nhập GiftCode",
    confirm: "Xác nhận",
    jackpot: {
      jungle_spirit: "Đế Chế Maya",
      captians: "Kho Báu",
      agent_royale: "Nữ Điệp Viên",
      avangers: "Siêu Anh Hùng",
      fortune: "Thần Tài",
    },
    warning: {
      error_try_gain: "Có lỗi xảy ra. Vui lòng thử lại sau!",
      minimum_transfer_500k: "Số tiền thối thiểu là 500k Gold!",
      not_enough_gold: "Số dư không khả dụng",
      maximum_bet_10M: "Tài khoản cược thể thao không được quá 10M",
      error_in_processing: "Có lỗi trong quá trình xử lý!",
      you_need_type_withdraw_money: "Bạn cần nhập số tiền rút!",
      wrong_money: "Số tiền không đúng!",
      cant_get_credit_try_again: "Không lấy được số dư. Vui lòng thử lại!",
      withdraw_success: "Chúc mừng!\nBạn vừa rút thành công",
      delete_mail_success: "Xóa thư thành công!",
      you_sure_delete_mail: "Bạn chắc chắn muốn xóa thư",
      error: "Có lỗi xảy ra",
      developing_feature: "Tính năng đang phát triển!",
      wrong_giftcode_check_again:
        "Mã Giftcode không đúng. Vui lòng kiểm tra lại!",
      gift_code_is_used: "Mã Giftcode đã được sử dụng!",
      congluratulation: "Chúc mừng! Bạn đã nhận được!",
      invalid_giftcode: "Giftcode đã nhập không hợp lệ!",
      over_exp_giftcode: "Giftcode đã hết hạn sử dụng!",
      unsecury_account: "Tài khoản chưa đăng ký bảo mật!",
      giftcode_cant_use_phone_number:
        "Giftcode không áp dụng với tài khoản bảo mật bằng số điệnt thoại VN",
      giftcode_cant_use_this_account:
        "Giftcode không sử dụng được cho tài khoản này!",
      please_type_num_money: "Vui lòng nhập số tiền!",
      minimum_trade: "Giao dịch tối thiểu",
      gold_up: "GOLD",
      gold_n: "gold",
      not_enough_gold1: "Số dư tài khoản không đủ",
      username_must_same: "Tên tài khoản phải giống nhau!",
      please_type_full_info:
        "Vui lòng nhập đầy đủ thông tin!\n(Tên đại lý, Nickname, Số tiền)",
      un_phone_number_verify_account:
        "Tài khoản chưa xác thực bảo mật số điện thoại",
      cant_transfer_yourselft: "Bạn không thể chuyển khoản cho chính mình",
      change_avatar_success: "Đổi avatar thành công!",
      please_type_full_info1: "Vui lòng điển đầy đủ thông tin!",
      password_confirm_password_must_same:
        "Mật khẩu mới và mật khẩu mới nhập lại phải giống nhau!",
      old_password_wrong: "Mật khẩu cũ không đúng",
      you_sure_withdraw: "Bạn có chắc muốn rút tiền VND.\n Số GOLD ",
      unexist_account: "Tài khoản không tồn tại!",
      untype_username: "Bạn chưa nhập tên tài khoản",
      untype_password: "Bạn chưa nhập mật khẩu",
      server_lost_connect: "Mất kết nối server",
      account_logining_please_logout:
        "Tài khoản của bạn đang được đăng nhập ở nơi khác. \nHãy đăng xuất trước khi đăng nhập.",
      account_banning: "Tài khoản đang bị khóa.",
      invalid_authentication_code: "Mã xác thực không chính xác.",
      overtime_authentication: "Mã xác thực đã hết thời gian sử dụng.",
      server_maintain_go_later:
        "Hệ thống đang bảo trì. Vui lòng quay trở lại sau.",
      password_wrong: "Sai mật khẩu",
      login_banned: "Bị ban login.",
      unexist_user: "User không tồn tại.",
      you_not_create_username: "Bạn chưa tạo tên nhân vật cho tài khoản.",
      username_warning:
        "Tên tài khoản phải từ 6 - 18 ký tự, viết liền không dấu, không có ký tự đặc biệt!",
      password_same_warning:
        "Mật khẩu nhập lại không trùng với mật khẩu đã nhập.",
      verify_code_wrong: "Mã xác nhận không đúng",
      internet_unstable:
        "Kết nối mạng không ổn định.\nVui lòng kiểm tra kết nối wifi/3g",
      invalid_username: "Username không hợp lệ",
      username_exist: "Username đã tồn tại",
      invite_code_unexist: "Mã giới thiệu không tồn tại",
      invite_code_wrong_type:
        "Mã giới thiệu không đúng định dạng (vd:K1234567)",
      captcha_wrong: "Mã captcha không chính xác",
      captcha_error: "Lỗi captcha",
      nickname_invalid: "Nickname không hợp lệ",
      nickname_exist: "Nickname đã tồn tại",
      nickname_not_same_username: "Nickname không được trùng với Username",
      nickname_had: "Đã có Nickname rồi.",
      nickname_not_sentitive: "Không chọn Nickname nhạy cảm.",
      check_network: "ERROR_CHECK_YOUR_NETWORK",
      logined_other_device: "Bạn đã đăng nhập ở thiết bị khác",
      giftcode_please_enter_full: "Vui lòng điền đẩy đủ Giftcode",
      info_update_success_contact_to_complete:
        "Cập nhật thông tin thành công!\nQuý khách vui lòng chat với bot tele để hoàn thành bước bảo mật.",
      info_error_update: "Xảy ra lỗi trong quá trình cập nhật thông tin!",
      info_email_wrong_type: "Email định dạng không đúng!",
      info_phone_number_wrong_type: "Số điện thoại định dạng không đúng!",
      info_email_registered_other_account:
        "Email đã được đăng ký bởi tài khoản khác!",
      info_not_need_otp_unsecure_account:
        "Không yêu cầu mã OTP cho tài khoản chưa bảo mật!",
      info_phone_number_registered_try_other:
        "Số điện thoại đã được đăng ký. Vui lòng sử dụng số điện thoại khác!",
      phone_number_warning: "Số điện thoại phải có độ dài từ 10-15 số!",
      otp_required: "Mã OTP là thông tin bắt buộc",
      otp_tele_wrong: "Nhập sai mã Tele OTP. Vui lòng thử lại",
      otp_wrong: "Mã OTP không đúng!",
      otp_unexist: "Mã OTP không tồn tại",
      otp_overtime_use: "Mã OTP đã hết hạn sử dụng",
      you_sure_out_game: "Bạn có chắc chắn muốn thoát khỏi trò chơi?",
      password_change_success: "Thay đổi mật khẩu thành công!",
      password_required: "Mật khẩu mới là thông tin bắt buộc",
      password_confirm_required: "Nhập lại mới là thông tin bắt buộc",
      password_confirm_wrong: "Nhập lại mật khẩu mới không đúng.",
      password_current_wrong: "Mật khẩu hiện tại không đúng",
      account_login_fb_gg_cant_use_feature:
        "Tài khoản đăng nhập bằng Facebook hoặc Google+\n không thể sử dụng chức năng này!",
      feature_for_register_secury_account:
        "Chức năng này dành cho các tài khoản đã đăng ký bảo mật!",
      account_warning_nickname:
        "Hệ thống không hỗ trợ các tài khoản chưa cập nhật Nickname",
      you_need_enter_money: "Bạn cần nhập số tiền!",
      deposit_order_double: "Bạn tạo 2 lệnh nạp gần nhau quá",
      deposit_order_limit_per_day:
        "Quá giới hạn tạo lệnh nạp trong một ngày!\n Yêu cầu chuyển khoản để hoàn thành lệnh nạp trước khi\n tạo lệnh tiếp theo",
      buy_gold_faild: "Mua GOLD thất bại!",
      withdraw_money_faild: "Rút tiền thất bại!",
      withdraw_maximum_is: "Số tiền tối đa có thể chuyển khoản\nlà ",
      withdraw_maximum_is_after:
        " theo cơ chế GIFTCODE.\n Để biết thêm chi tiết vui lòng liên hệ CSKH",
      withdraw_fail: "Rút thất bại",
      success: "Thành công!",
      bank_id_required: "ID ngân hàng là thông tin bắt buộc!",
      account_number_required: "Số tài khoản là thông tin bắt buộc!",
      username_required: "Tên tài khoản là thông tin bắt buộc!",
      nickname_required: "Nickname là thông tin bắt buộc!",
      num_gold_required: "Số GOLD là thông tin bắt buộc!",
      account_number_wrong_type: "Số tài khoản không đúng định dạng!",
      num_gold_wrong_type: "Số GOLD không đúng định dạng!",
      account_banned_transfer: "Tài khoản đang bị khóa chức năng chuyển khoản!",
      withdraw_money_minimum: "Số tiền rút phải lớn hơn hoặc bằng",
      error_undetermine: "Lỗi không xác định",
      not_enough_transfer_require_contact_service:
        "Quý khách không đủ điều kiện giao dịch. Chi tiết xin vui lòng liên hệ CSKH!",
      attendance_success: "Điểm danh thành công!",
      attendance_fail: "Điểm danh thất bại",
      account_unregister_secure: "Tài khoản chưa đăng ký bảo mật",
      account_unexist: "Tài khoản không tồn tại",
      support: "BẠN VUI LÒNG LIÊN HỆ CSKH ĐỂ ĐƯỢC HỖ TRỢ!",
      server_unconnect: "Chưa kết nối tới server",
      server_terminate_interupt: "Server đang tạm thời gián đoạn",
      account_not_enter: "Bạn chưa nhập tên tài khoản",
      password_not_enter: "Bạn chưa nhập mật khẩu",
      play_game_fun: "Chúc các bạn chơi game vui vẻ",
      good_luck_later: "Chúc bạn may mắn lần sau",
      transfer_account_receive_unexist: "Tài khoản nhận tiền không tồn tại!",
      transfer_minimum_money:
        "Số tiền chuyển nhỏ hơn giá trị giao dịch tối thiểu!",
      account_not_enought_transfer_condition:
        "Tài khoản chưa đủ điều kiện giao dịch. Vui lòng liên hệ với NPH!",
      sercure_feature_auto_active:
        "Chức năng bảo mật sẽ tự động kích hoạt sau 24h kể thừ thời điểm đăng\nký thành công!",
      transfer_limit:
        "Bạn chỉ được chuyển cho Đại lý tổng trong khoảng tiền nhất định",
      transfer_over_credit: "Số tiền chuyển khoản vượt quá hạn mức!",
      transfer_account_send_unexist: "Tài khoản chuyển tiền không tồn tại!",
      transfer_enter_content: "Yêu cầu nhập nội dung chuyển khoản!",
      tranfer_same_account:
        "Tài khoản chuyển tiền trùng với tài khoản nhận tiền",
      transfer_local_feature_terminated_contact_service:
        "Chức năng chuyển khoản nội bộ tạm dừng hoạt động. Vui lòng liên hệ CSKH để được hỗ trợ!",
      transfer_local_feature_terminated_contact_service1:
        "Chức năng chuyển khoản nội bộ \ntạm thời dừng hoạt động. \nVui lòng liên hệ CSKH để biết thêm chi tiết!",
    },
    gui_profile: {
      profile_title: "Hồ sơ",
      join_time: "Ngày tham gia",
      birth_date: "Ngày sinh",
      ip_address: "Địa chỉ IP",
      invite_code: "Mã giới thiệu",
      change_password: "Đổi mk",
      change_password1: "Đổi mật khẩu",
      change_avatar: "Chọn avatar",
      back: "Quay lại",
      change: "Thay đổi",
      current_password: "Mật khẩu hiện tại",
      new_password: "Mật khẩu mới",
      confirm_new_password: "Nhập lại mật khẩu mới",
      update: "Cập nhật",
      alert: {
        warning_1: "Avatar của bạn không khác avatar trước.",
        warning_2: "Chọn Avatar muốn thay đổi.",
      },
      match_played: "Ván đã chơi",
      win_rate: "Tỉ lệ thắng",
    },
    gui_agency: {
      deposit_title: "Nạp Gold",
      deposit_gold: "Nạp Gold",
      deposit_history: "Lịch sử nạp",
      sell_title: "Bán Gold",
      sell_gold: "Bán Gold",
      sell_history: "Lịch sử bán",
      current_credit: "Số dư hiện tại",
      agency: "Đai lý",
      deposit_money: "Tiền nạp",
      receive_gold: "Gold Nhận",
      agency_note:
        "Chú ý: Kiểm tra kỹ thông tin của đại lý trước khi \nchuyển, chuyển nhầm NPH không hỗ trợ.\nSau 5 phút chưa nhận được gold liên hệ:",
      or_call_to: "Hoặc gọi tới",
      note: "Chú ý",
      minimum_trade: "GD tối thiểu:",
      rate_trade: "Phí giao dịch:",
      exchange_rate: "Tỉ lệ quy đổi:",
      account_number: "Số tài khoản",
      account_name: "Tên tài khoản",
      area: "Khu vực",
      confirm: "Xác nhận",
      deposit_note:
        "Quý khách đã tạo lệnh nạp thành công.\nTiếp theo, để hoàn thành quá trình nạp tiền.\nXin vui lòng liên hệ CSKH để gửi hóa đơn\nchuyển khoản.",
      notify_title: "Thông báo",
      num_transfer_gold: "Số GOLD Chuyển",
      receive_money: "Số tiền nhận",
      branch: "Chi nhánh",
      account_owner_name: "Tên chủ tài khoản",
      continue: "Tiếp tục",
      status: "Trạng thái",
      time: "Thời gian",
      transfer_code_short: "MGD",
      num_transfer_money: "Số tiền chuyển",
      title_new_bank: "Nhập tên ngân hàng",
      title_bank_other: "Ngân hàng khác",
      title_new_bank_message: "Nhập tên ngân hàng bạn muốn rút tiền",
      lao: "Lào",
      taiwan: "Đài loan",
      vietnam: "Việt Nam",
      pending: "Đang xử lý",
      accepted: "Đã duyệt",
      rejected: "Hủy lệnh",
      huy: "Hủy",
    },
    gui_list_agency: {
      agency_title: "Đại lý",
      korea: "Hàn quốc",
      japan: "Nhật Bản",
      taiwan: "Đài Loan",
      lao: "Lào",
      campuchia: "Campuchia",
      singapore: "Singapore",
      thailand: "Thái Lan",
      myanmar: "Myanmar",
      no: "STT",
      agency: "Đại lý",
      nickname: "NICKNAME",
      phone_number: "SĐT",
      contact: "Liên hệ",
      area: "Khu vực",
      action: "Hành động",
      buy: "Mua",
      sell: "Bán",
    },
    gui_attendance: {
      attendance: "Điểm danh",
      attendance_title: "Điểm danh",
      day: "Ngày",
      day1: "Ngày 1",
      day2: "Ngày 2",
      day3: "Ngày 3",
      day4: "Ngày 4",
      day5: "Ngày 5",
      day6: "Ngày 6",
      day7: "Ngày 7",
      attendance_note:
        "Hãy điểm danh đầy đủ để nhận thưởng hấp dẫn vào cuối tuần",
    },
    gui_open_egg: {
      open_egg: "Đập trứng",
      gold_egg: "Trứng vàng",
      white_egg: "Trứng trắng",
      no_egg: "Không có quả trứng nào",
    },
    gui_bundle_download: {
      download_game: "Tải game",
      download: "Tải",
    },
    gui_event_list_giftcode: {
      list_giftcode_title: "DS Giftcode",
    },
    gui_events: {
      event_title: "Sự kiện",
      event: "Sự kiện",
      event_top_bet: "SK Top Cược",
      event_attendace: "SK Điểm Danh",
      event_receive_bet: "SK Nhận Cược",
      event_find_million: "SK Tìm Triệu Phú",
      event_sicbo: "SK Tài Xỉu",
      event_jackpot_sicbo: "Nỗ hũ tài xỉu",
      rules: "Thể lệ",
      daily_top: "TOP Ngày",
      top_bet: "TOP Bet",
      attendace_again: "Điểm danh bù",
      rank: "Xếp hạng",
      user: "Nhân vật",
      bet: "Tiền cược",
      refund: "Hoàn cược",
      money: "Số tiền",
    },
    gui_trade_history: {
      trade_history_title: "Lịch sử GD",
      trade_history: "Lịch sử GD",
      play_gold: "Chơi gold",
      play_chip: "Chơi xu",
      deposit_chip: "Nạp xu",
      deposit_gold: "Nạp GOLD",
      expense_gold: "Tiêu gold",
      trade_code: "Mã gd",
      time: "Thời gian",
      service: "Dịch vụ",
      incurred: "Phát sinh",
      credit: "Số dư",
      description: "Mô tả",
      detail: "Chi tiết",
      view: "Xem",
    },
    gui_forgot_password: {
      account: "Tài khoản",
      account_title: "Tài khoản",
      account_note_full_info:
        "Để nhận được hỗ trợ. Vui lòng nhập đầy đủ thông tin \ndưới đây",
      account_note_username: "Tên nhân vật là thông tin bắt buộc",
      type_login_name: "Nhập tên đăng nhập",
      authentication_code: "Mã xác nhận",
      send: "Gửi",
      forgot_password: "Quên mật khẩu",
      forgot_password_title: "Quên mật khẩu",
      telegram_authentication_code: "Mã xác thực telegram...",

      send: "Gửi",
      new_password: "Mật khẩu mới",
      confirm_new_password: "Nhập lại mật khẩu mới",
    },
    gui_display_name: {
      account_title: "Tài Khoản",
      account_note_username: "Tên nhân vật là thông tin bắt buộc",
      username: "Tên nhân vật",
      account_note_username1:
        "Tên nhận vật trong khoảng 6-16 ký tự, không chứa các ký tự nhạy cảm, các ký tự đặc biệt và không có khoảng trắng",
      create_new: "Tạo mới",
    },
    gui_login: {
      login_title: "Tài Khoản",
      login_name: "Tên đăng nhập",
      password: "Mật khẩu",
      save_password: "Lưu mật khẩu",
      login: "Đăng nhập",
      forgot_password: "Quên mật khẩu",
    },
    gui_registry: {
      register_title: "Đăng ký",
      register: "Đăng ký",
      login_name: "Tên đăng nhập",
      password: "Mật khẩu",
      confirm_password: "Nhập lại mật khẩu",
      invite_code_note: "Mã giới thiệu (Không bắt buộc)",
      captcha: "Captcha",
    },
    gui_mailbox: {
      title: "Tiêu Đề:",
      content: "Nội Dung:",
      sender: "Người gửi:",
      unread: "Chưa xem",
      read: "Đã xem",
      mailbox_title: "Hòm thư",
      mess_delete_mail: "Bạn có chắc chắn muốn xoá thư?",
    },
    gui_minigame: {
      game_download: "Tải game",
      taixiu: "Tài Xỉu",
      caothap: "Cao Thấp",
      chanle: "Chẵn Lẻ",
      xocdia: "Xóc Đĩa",
      pokego: "Poke Go",
      baucua: "Bầu Cua",
    },
    gui_confirm_transfer: {
      notify: "Thông báo",
      agency_account: "Tài khoản đại lý",
      notify_note_cheat: "Chỉ nên giao dịch với đại lý để tránh lừa đảo",
      you_sure_send: "Bạn chắc chắn muốn chuyển cho",
      amount_money: "Số tiền",
      reason: "Lý do",
      reject: "Hủy",
      accept: "Đồng ý",
      account: "Tài khoản",
      confirm_transfer_title: "Thông báo",
    },
    gui_buy_gold: {
      buy_gold: "Mua Gold",
      buy_gold_title: "Mua Gold",
      current_credit: "Số dư hiện tại",
      agency: "Đại lý",
      enter_agency: "Nhập Đại lý",
      nickname: "NickName",
      enter_nickname: "Nhập Nickname",
      buy_money: "Tiền nạp",
      number_buy_money: "Số tiền nạp...",
      gold: "Gold",
      receive_gold: "Gold nhận...",
      other_agency: "Đại lý khác",
      lb_warning_1: "Liên hệ đại lý để trực tiếp giao dịch",
      lb_warning_2: "Số điện thoại đại lý: ",
      lb_warning_3: "hoặc truy cập link: ",
    },
    gui_sell_gold: {
      sell_gold: "Bán Gold",
      sell_gold_title: "Bán Gold",
      current_credit: "Số dư hiện tại",
      agency: "Đại lý",
      enter_agency: "Nhập Đại lý",
      nickname: "NickName",
      enter_nickname: "Nhập Nickname",
      buy_money: "Tiền nạp",
      number_sell_gold: "Số gold cần chuyển",
      gold: "Gold",
      receive_money: "Số tiền nhận được",
      other_agency: "Đại lý khác",
      continue: "Tiếp tục",
      transfer_reason: "Lí do chuyển khoản",
      lao: "Lào",
      cam: "Campuchia",
      vn: "Việt Nam",
      kor: "Hàn Quốc",
      jp: "Nhật Bản",
      tw: "Đài Loan",
    },
    safetybox: {
      safetybox_title: "KÉT SẮT",
      lb_goldin: "Gold trong két",
      note: "Để sử dụng két sắt trước tiên bạn phải tạo mật khẩu",
      lb_btn: {
        chuyen: "CHUYỂN VÀO",
        rut: "RÚT RA",
        doimk: "ĐỔI MK",
        dongy: "ĐỒNG Ý",
        back: "QUAY LẠI",
      },
      lb_editbox: {
        lb_chuyen: "Số Gold chuyển",
        lb_rut: "Số Gold rút",
        placeholder_password_rut: "Nhập mật khẩu két sắt để rút ra",
        placeholder_password_create: "Tạo mật khẩu",
        placeholder_re_password_create: "Nhập lại mật khẩu",
        placeholder_password_old: "Mật khẩu cũ",
        placeholder_new_password_update: "Mật khẩu mới",
        placeholder_re_new_password_update: "Nhập lại mật khẩu mới",
      },
      message: {
        wrong_password: "Bạn đã nhập sai mật khẩu. Vui lòng nhập lại!",
        wrong_password_retype:
          "Nhập lại mật khẩu không đúng. Vui lòng nhập lại!",
        wrong_old_pass: "Mật khẩu cũ không đúng. Vui lòng nhập lại!",
        withdraw_success: "Rút ra thành công!",
        transfer_success: "Chuyển vào thành công!",
        transfer_failed: "Chuyển vào thất bại",
        create_password_success: "Tạo mật khẩu thành công!",
        update_password_success: "Cập nhật mật khẩu thành công!",
        please_type_money_withdraw: "Vui lòng nhập số tiền muốn rút",
        please_type_money_transfer: "Vui lòng nhập số tiền muốn chuyển",
        error_create: "Có lỗi trong quá trình tạo. Vui lòng nhập lại!",
        error_update: "Có lỗi trong quá trình cập nhật. Vui lòng nhập lại!",
        error_network: "Kết nối mạng không ổn định. Vui lòng thử lại sau!",
      },
    },
    gui_setting: {
      music: "Âm thanh",
      music_on: "Âm thanh (Bật)",
      music_off: "Âm thanh (Tắt)",
      term_of_use: "Điều khoản sử dụng",
      feedBack: "Góp ý",
    },

    gui_chuyen_quy: {
      transfer_withdraw_title: "NẠP/RÚT",
      num_transfer_gold: "Số Gold chuyển",
      receive_money: "Số tiền nhận",
      transfer_fund: "Chuyển quỹ",
      play_now: "Chơi ngay",
      withdraw_fund: "Rút Quỹ",
      withdraw_money: "Số tiền cần rút",
      num_receive_gold: "Số gold nhận",
      type_num_gold: "Nhập số gold",
      receive_gold: "Gold nhận",
      current_money: "Số tiền hiện tại",
    },
    gui_transfer: {
      transfer: "Chuyển khoản",
      transfer_title: "Chuyển khoản",
      current_credit: "Số dư hiện tại",
      enter_nickname: "Nhập nickname",
      re_enter_nickname: "Nhập lại Nickname",
      enter_sell_money: "Số gold chuyển",
      receive_gold: "Số Gold nhận",
      reason: "Lí do chuyển khoản",
      continue: "Tiếp tục",
      agency: "Đại lý",
      gold: "Gold",
      amount_less_than_minimum:
        "Số tiền chuyển nhỏ hơn giá trị giao dịch tối thiểu!",
      unregister_security: "Tài khoản chưa đăng ký bảo mật! Liên hệ CSKH.",
      otp_expired: "Mã OTP đã hết hạn!",
      otp_not_correct: "Mã OTP không đúng!",
      otp_error: "Lỗi OTP!",
      una_balance: "Số dư không đủ!",
      lock_transfer: "Nickname bị khoá chuyển khoản!",
      acc_not_exist: "Nickname không tồn tại!",
      enter_details: "Vui lòng nhập nội dung chuyển khoản!",
      not_transfer_yourself: "Không thể chuyển khoản cho chính mình!",
      not_transfer_agency: "Đại lý không thể chuyển khoản cho đại lý!",
      not_transfer_agency2:
        "Đại lý cấp 2 không thể chuyển khoản cho đại lý cấp 2!",
      not_transfer_not_your_agency2:
        "Không thể chuyển khoản cho đại lý cấp 2 không phải của mình!",
      amount_maximum:
        "\n\nSố tiền tối đa có thể chuyển khoản\nlà %{money} theo cơ chế GIFTCODE.\n Để biết thêm chi tiết vui lòng liên hệ CSKH!",
      transfer_fail: "Chuyển khoản thất bại",
      transfer_success: "Chuyển khoản thành công",
      sell_gold: "Bán Gold cho ",
    },
    gui_logout: {
      logout_title: "Đăng xuất",
      warning: "Bạn có chắc chắn muốn thoát khỏi trò chơi?",
      no: "Hủy",
      yes: "Đồng ý",
    },
    gui_policy: {
      policy_title: "Điều khoản",
    },
    gui_security: {
      security_title: "Bảo mật",
      account_name: "Tên tài khoản",
      username: "Tên nhật vật",
      cmtnd: "CMTND",
      email: "Email",
      phone_number: "Số điện thoại",
      update: "Cập nhật",
      active: "Kích hoạt",
      get_otp: "Lấy OTP",
    },
    gui_buy_and_sold: {
      buy_and_sold_title: "Cửa hàng",
      transfer: "Chuyển khoản",
      sell_gold: "Bán Gold",
      input_otp: "Nhập OTP",
    },
    gui_gift_code: {
      notice:
        "* Để nhận được giftcode vui lòng nhập đúng mã và lưu ý thời gian nhận giftcode.\n* Mỗi giftcode chỉ áp dụng cho 1 tài khoản",
      gift_code_title: "Gift Code",
      enter_gift_code: "Nhập mã Gift Code",
      receive: "Nhận",
      price: "Mệnh giá: ",
      code: "Mã code: ",
    },
    gui_header: {
      current_language: "Tiếng Việt",
      logout: "Đăng xuất",
      safetybox: "Két sắt",
      history: "Lịch sử",
      language: "Ngôn ngữ",
      shop: "Cửa hàng",
      setting: "Cài đặt",
      confirm_change_language:
        "Bạn có chắc chắn muốn đổi\ngiao diện sang %{language} ?",
      ok: "Đồng ý",
      cancel: "Không",
      win: "Thắng",
      day: "ngày",
    },
    gui_choose_nation: {
      choose_nation_title: "quốc gia",
    },
    gui_language: {
      language_title: "Ngôn ngữ",
    },
  },

  meowhilo: {
    connection_error:
      "Kết nối không ổn định!\nVui lòng kiểm tra lại kết nối wifi/3g.",
    connection_error1: "Kết nối không thành công.\nXin vui lòng thử lại.",
    connection_end: "Bạn đã ngắt kết nối.\nXin vui lòng kết nối lạil",
    spin_error: "Cược không thành công.\nXin vui lòng thử lại",
    not_enough_money: "Bạn không có đủ số dư.\nXin vui lòng bổ sung.",
  }
};
