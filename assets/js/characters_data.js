const characters = [
  {
    land: "mondstadt",
    list: [
      {
        name: "Venti",
        vision: "Anemo",
        video: "a6XVGdp8BPE",
        desc: 'Nhà Thơ có lai lịch không rõ ràng, có lúc cất lên những lời thơ cũ kỹ, có khi lại hát những bài hát mà chưa ai từng nghe. Thích táo và không khí náo nhiệt, ghét phô mai cùng những thứ dinh dính. Khi dẫn dắt nguyên tố "Phong", nguyên tố thường có hình dạng lông vũ, bởi cậu ấy thích nhìn những thứ bay nhẹ nhàng.',
      },
      {
        name: "Jean",
        vision: "Anemo",
        video: "Ku1dlUwWNU8",
        desc: "Là quyền đội trưởng của Đội Kỵ Sĩ Tây Phong, Jean luôn cần mẫn làm việc, đem lại sự yên bình cho người dân. Tuy rằng không có tài năng thiên phú vượt bậc, nhưng nhờ chăm chỉ luyện tập, hiện nay cô ấy không thua kém ai. Khi sự uy hiếp của Phong Ma Long ngày càng đến gần, vị quyền đội trưởng đáng tin tưởng này đã có sự chuẩn bị, thề phải bảo vệ Mondstadt.",
      },
      {
        name: "Amber",
        vision: "Pyro",
        video: "NkDz8xv78tQ",
        desc: 'Thiếu nữ hoạt bát thẳng thắn, là kỵ sĩ trinh thám duy nhất trong thành Mondstadt. Amber yêu thích dùng cánh bay, liên tiếp ba năm dành được giải "Quán Quân Bay Lượn" của thành Mondstadt. Là một ngôi sao mới của Đội Kỵ Sĩ Tây Phong, ngày hôm nay Amber vẫn là người sôi nổi nhất.',
      },
      {
        name: "Lisa",
        vision: "Electro",
        video: "83Gdb_Ook5o",
        desc: "Là một ma nữ thông minh thích ngủ. Đảm nhiệm công việc quản lý thư viện của Đội Kỵ Sĩ Tây Phong, Lisa thường dùng cách hiệu quả nhất để giải quyết vấn đề gặp phải. Tuy rằng trông có vẻ lười biếng, nhưng cô gái trầm ổn ấy dường như đã nắm vững mọi thứ.",
      },
      {
        name: "Kaeya",
        vision: "Cryo",
        video: "ZKZ3ZO1IXnk",
        desc: "Trong Đội Kỵ Sĩ Tây Phong, Kaeya là đội phó được tin tưởng nhất. Chỉ cần giao nhiệm vụ cho hắn thì chắc chắn sẽ được giải quyết. Trong thành Mondstadt, con người hài hước thú vị như hắn cũng rất được yêu thích, nhưng gã Kỵ Sĩ này dường như có một bí mật không để người khác biết.",
      },
      {
        name: "Barbara",
        vision: "Hydro",
        video: "FbN6jwZuETU",
        desc: 'Là mục sư tế lễ của Giáo Hội Tây Phong, cũng là thần tượng tỏa sáng của Mondstadt. Đối với thành phố Mondstadt nơi đã quen với truyền thống nhà thơ lang thang. "Thần Tượng" vẫn là một thứ khá mới mẻ. Nhưng ở Mondstadt, mọi người đều yêu Barbara. Đây chính là tinh thần tự do của thành phố tự do - Tình yêu mà mọi người dành cho Barbara khiến cô ấy rất cảm động.',
      },
    ],
  },
  {
    land: "liyue",
    list: [
      {
        name: "Zhongli",
        vision: "Geo",
        video: "s9ipHpsytMw",
        desc: "Vị khách bí ẩn của Vãng Sinh Đường. Anh ta có vẻ bề ngoài khôi ngô tuấn tú, phong độ lịch lãm và sở hữu kiến thức vượt xa người thường. Mặc dù có lai lịch thần bí, nhưng anh ấy lại biết lễ nghi, hiểu quy định. Tọa trấn Vãng Sinh Đường, có thể thực hiện các nghi lễ của vạn vật trong trời đất.",
      },
      {
        name: "Xiao",
        vision: "Anemo",
        video: "V8fOgIYL7oU",
        desc: 'Một trong "Tam Nhãn Ngũ Hiển Tiên Nhân" bảo vệ cảng Liyue, còn được gọi là "Hộ Pháp Dạ Xoa Đại Tướng". Tuy có vẻ bề ngoài là một thiếu niên trẻ tuổi, thế nhưng những truyền thuyết về anh sớm đã được ghi chép trong các cổ tịch ngàn năm. Vô cùng yêu thích "Đậu Hũ Hạnh Nhân" của nhà trọ Vọng Thư. Cũng là do mùi vị của "Đậu Hũ Hạnh Nhân" rất giống với giấc mộng đẹp.',
      },
      {
        name: "Beidou",
        vision: "Electro",
        video: "jswQySEOoBs",
        desc: 'Thuyền trưởng "Nam Thập Tự", người có danh vọng khá cao ở Liyue Có người nói rằng cô có thể lấp núi dời sông, một vài người khác lại nói cô có thể dương kiếm dẫn sét, lại có người tin rằng quái vật đáng sợ nơi biển sâu cũng chẳng phải là kẻ địch của cô. Đối với người ngoài, họ sẽ cho đây là những lời nói nhảm, thế nhưng những ai đã từng sát cánh cùng Beidou đều tin như vậy-- "Nếu thật sự có quái vật biển sâu, Beidou có thể chẻ nó ra làm hai mảnh."',
      },
      {
        name: "Ningguang",
        vision: "Geo",
        video: "pEDn5y2d53Y",
        desc: 'Ngồi ở cung điện trên không, có nhiều tin đồn vây quanh, trên khuôn mặt luôn giữ một nụ cười nho nhã thần bí. Là Thiên Quyền Tinh trong "Thất Tinh Liyue", cô không chỉ tượng trưng cho quyền lực và pháp luật, còn là đại diện của tài phú và trí tuệ.',
      },
      {
        name: "Xiangling",
        vision: "Pyro",
        video: "jDA2oXaz-3Q",
        desc: 'Vừa là bồi bàn vừa kiêm đầu bếp mới của "Vạn Dân Đường", vô cùng nhiệt huyết với sự nghiệp nấu nướng, đặc biệt là những món tê cay. Tuổi còn trẻ nhưng kỹ năng nấu nướng tuyệt vời, rất có tiếng tăm trong giới ẩm thực Ngật Hổ Nham. Nếu cô ấy có ý mời bạn ăn thử món mới thì hãy yên tâm mà thưởng thức, chắc chắn sẽ không phụ lòng mong mỏi của bạn, thật đó.',
      },
      {
        name: "Xingqiu",
        vision: "Hydro",
        video: "G1pD4khNpr4",
        desc: "Nhị thiếu gia của Thương Hội Phi Vân ở cảng Liyue, từ nhỏ nổi tiếng là siêng năng ham học, cư xử lễ phép. Có điều, ngay cả một thiếu niên nho nhã như vậy mà cũng có thể chạy nhanh như thỏ.",
      },
    ],
  },
  {
    land: "inazuma",
    list: [
      {
        name: "Raiden",
        vision: "Electro",
        video: "-DZ3QgCs8mU",
        desc: "Raiden Shogun là hoá thân đáng sợ nhất của sấm sét trên thế giới này, cũng là chúa tể tối cao của Inazuma Shogunate. Mang theo sấm sét đầy quyền lực, kẻ huỷ diệt theo đuổi con đường cô đơn mang tên vĩnh hằng.",
      },
      {
        name: "Yoimiya",
        vision: "Pyro",
        video: "TMoIG_kwUiQ",
        desc: 'Nghệ nhân pháo hoa tài năng, chủ nhân hiện tại của "Tiệm Pháo Hoa Naganohara", người được phong là "Nữ Hoàng Lễ Hội Hè". Một cô gái tràn đầy nhiệt huyết. Sự ngây thơ trong sáng của trẻ con và nỗi ám ảnh của người thợ đã hòa quyện vào nhau tạo nên một ngọn lửa phản ứng tuyệt vời trên cơ thể cô.',
      },
      {
        name: "Thoma",
        vision: "Pyro",
        video: "5N-mJSLNJAU",
        desc: 'Quản gia của nhà Kamisato thuộc "Hiệp Hội Yashiro", đồng thời cũng là "thổ địa" của Inazuma. Là người thân thiện dễ gần, có thể dễ dàng hòa nhập vào đám đông cho dù ở bất cứ nơi đâu. Thoạt nhìn, có vẻ là một người rất tùy hứng, nhưng thực chất rất có tinh thần trách nhiệm. Bất kể công việc hay mối quan hệ cá nhân, đều mang dáng vẻ nghiêm túc khác thường.',
      },
      {
        name: "Gorou",
        vision: "Geo",
        video: "3rKNsnOQMJI",
        desc: "Đại tướng quân Watatsumi, vừa sở hữu phẩm cách của một thủ lĩnh, lại không hề có sự kiêu ngạo của một bậc cao nhân. Dù bất cứ lúc nào, bất kỳ nơi đâu cũng luôn được thuộc hạ tin tưởng, có thể khiến người khác không lo lắng mà chung vai gánh vác và trao gửi trái tim.",
      },
      {
        name: "Kazuha",
        vision: "Anemo",
        video: "YHneYvVwt8Y",
        desc: "Ronin Samurai đến từ Inazuma. Con người khiêm tốn có tính cách hoà nhã. Dưới vẻ ngoài trẻ trung phóng khoáng, ẩn chứa rất nhiều chuyện của quá khứ. Trông có vẻ tuỳ hứng nhưng trong lòng lại có quy tắc hành xử của riêng mình.",
      },
    ],
  },
];
