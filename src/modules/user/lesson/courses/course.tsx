export const coursesList = [
  {
    "name": "Python",
    "chapter": [
      {
        "title": "Bài 1: Giới thiệu về lập trình python",
        "lesson": [
          {
            "directory": "/gioi-thieu",
            "subtitle": "Giới thiệu",
            "content": "Python đã ra đời từ cách đây khá lâu và trải qua một quá trình lịch sử phát triển lâu dài. Nó là một trong những ngôn ngữ được sử dụng phổ biến trong rất nhiều sản phẩm của các hãng công nghệ lớn trên thế giới như Google, Facebook, Instagram, Spotify, Quora, Netflix, Dropbox... với cơ số các ứng dụng bạn tiếp xúc hàng ngày. Tuy nhiên, Python mới chỉ thực sự phổ biến nhiều ở Việt Nam trong những năm gần đây bởi sự phát triển cực kỳ sâu rộng của Machine Learning và các thư viện đi kèm đa dạng của nó. Chính vì vậy vẫn có rất ít các tài liệu bằng tiếng Việt về ngôn ngữ lập trình Python cho người mới bắt đầu tại Việt Nam. Với mong muốn mang đến cho bạn đọc, những ai muốn tìm hiểu về Python, nhưng chưa biết bắt đầu từ đâu một tài liệu tổng quan nhất, dễ hiểu nhất và đầy đủ nhất về Python, WrCoding đã xây dựng khóa học Lập trình Python căn bản này."
          },
          {
            "directory": "/tu-khoa-va-dinh-dang",
            "subtitle": "Từ khóa & Định dạng",
            "content": "Trong bài học này, chúng ta sẽ cùng tìm hiểu về bộ từ khóa (các từ dành riêng cho Python) và định danh (tên biến, hàm, v.v.). Từ khóa là những từ dành riêng cho Python. Chúng ta không thể sử dụng từ khóa để đặt tên cho biến, hàm hoặc sử dụng chúng như tên định danh. Từ khóa được sử dụng để xác định cú pháp và cấu trúc của ngôn ngữ Python. Trong Python, từ khóa có phân biệt chữ hoa chữ thường. Có 33 từ khóa trong Python 3.10. Con số này có thể thay đổi theo thời gian. Ngoại trừ các từ khóa True, False và None được viết hoa thì các từ khóa khác đều được viết thường"
          },
          {
            "directory": "/cau-lenh-va-comment",
            "subtitle": "Câu lệnh & Comment",
            "content": "Trong hướng dẫn này, chúng ta sẽ cùng tìm hiểu các kiến thức về câu lệnh, tầm quan trọng của thụt lề và sử dụng comment trong Python.\nCâu lệnh trong Python\nCâu lệnh là những hướng dẫn mà trình thông dịch Python có thể thực hiện được. Ví dụ: a = 1 là câu lệnh gán. Câu lệnh if, câu lệnh for, câu lệnh while, v.v. là những kiểu lệnh khác sẽ được tìm hiểu chi tiết trong các bài sau.\nViết câu lệnh trên nhiều dòng\nTrong Python, câu lệnh được kết thúc bằng ký tự dòng mới. Tuy nhiên, ta có thể mở rộng câu lệnh trên nhiều dòng bằng ký tự tiếp tục dòng lệnh (\\)."
          },
          {
            "directory": "/bien-va-hang-so",
            "subtitle": "Biến & Hằng số",
            "content": "Trong hướng dẫn này, chúng ta sẽ cùng tìm hiểu kiến thức về biến, hằng số, hằng giá trị và cách sử dụng của chúng trong Python.\nBiến\nBiến là một vị trí được đặt tên và sử dụng để lưu trữ dữ liệu trong bộ nhớ. Ta có thể coi biến như một nơi chứa dữ liệu và những dữ liệu này có thể được thay đổi trong chương trình.Chúng ta có thể coi biến như một chiếc túi đựng sách và một cuốn sách có thể thay đổi bằng cuốn khác bất cứ lúc nào. "
          },
          {
            "directory": "/kieu-du-lieu",
            "subtitle": "Kiểu dữ liệu",
            "content": "Trong hướng dẫn này, chúng ta sẽ cùng tìm hiểu về các kiểu dữ liệu khác nhau được sử dụng trong Python.\nCác kiểu dữ liệu trong Python\nMỗi giá trị trong Python có một kiểu dữ liệu. Mọi thứ trong Python đều là đối tượng, vì thế các kiểu dữ liệu thực ra là lớp và biến là instance (đối tượng) của các lớp này.\nTrong Python có rất nhiều kiểu dữ liệu. Dưới đây là một số kiểu dữ liệu quan trọng nhất."
          },
          {
            "directory": "/ep-kieu",
            "subtitle": "Ép kiểu",
            "content": "Trong hướng dẫn này, chúng ta sẽ cùng tìm hiểu về các phương pháp chuyển đổi kiểu dữ liệu (ép kiểu) và cách sử dụng trong Python.\nChuyển đổi kiểu dữ liệu\nQuá trình chuyển đổi một kiểu dữ liệu (số nguyên, chuỗi, số thực) thành kiểu dữ liệu khác được gọi là chuyển đổi kiểu dữ liệu (ép kiểu). Python có hai kiểu chuyển đổi:\nChuyển đổi kiểu ngầm định\nVới kiểu chuyển đổi này, Python sẽ tự động chuyển đổi một kiểu dữ liệu thành kiểu khác mà lập trình viên không cần phải đụng tay vào.\nChuyển đổi kiểu tường minh\nTrong chuyển đổi kiểu tường minh, ta chuyển đổi kiểu dữ liệu của một đối tượng thành kiểu dữ liệu mong muốn. Chúng ta sử dụng các hàm được xác định trước như int(), float(), str(), v.v để thực hiện kiểu chuyển đổi tường minh."

          },
          {
            "directory": "/nhap-xuat-va-import-du-lieu",
            "subtitle": "Nhập/Xuất & Import dữ liệu",
            "content": "Bài hướng dẫn này tập trung cung cấp cho bạn cách sử dụng hàm print() và input() để nhập/xuất dữ liệu trong Python. Đồng thời, chúng ta cũng sẽ tìm hiểu các import mô-đun và sử dụng chúng trong chương trình.\nPython output sử dụng hàm print()\nTrong Python, chúng ta sử dụng hàm print() để hiển thị dữ liệu ra màn hình.\nPython Input\nCho đến thời điểm hiện tại, các chương trình trong bài học đều là tĩnh. Tức là giá trị của biến đã được xác định hoặc được mã hóa cứng vào mã nguồn.\nĐể linh hoạt trong các trường hợp như người dùng nhập thông tin đầu vào, Python cung cấp hàm input()."

          },
          {
            "directory": "/toan-tu",
            "subtitle": "Toán tử",
            "content": "Trong hướng dẫn này, chúng ta sẽ cùng tìm hiểu các kiến thức về những kiểu toán tử khác nhau trong Python, cú pháp của chúng và cách sử dụng thông qua các ví dụ minh họa.\nToán tử số học\nToán tử số học thực hiện các phép tính số học khác nhau như cộng, trừ, nhân, chia, v.v\nToán tử so sánh\nToán tử so sánh được sử dụng để so sánh các giá trị. Nó trả về True hoặc False tùy theo điều kiện bài toán.\nToán tử logic\nToán tử logic bao gồm toán tử and, or, not.\nToán tử bitwise\nToán tử Bitwise trong Python hoạt động dựa trên bit và thực hiện thao tác trên từng bit.\nToán tử gán\nToán tử gán được sử dụng trong Python để gán giá trị cho biến.\nToán tử đặc biệt\nNgôn ngữ Python cung cấp một số loại toán tử đặc biệt như toán tử định danh hoặc toán tử thành viên.\nToán tử thành viên\nin và not in là các toán tử thành viên trong Python. Chúng được sử dụng để kiểm tra xem một giá trị hoặc biến có trong chuỗi hay không (chuỗi, danh sách, tuple, set và dictionary)."

          },
          {
            "directory": "/namespace-va-pham-vi",
            "subtitle": "Namespace & Phạm vi",
            "content": "Trong hướng dẫn này, chúng ta sẽ cùng tìm hiểu về namespace, ánh xạ từ tên sang đối tượng và phạm vi của biến trong Python.\nNamespace trong Python là gì?\nNói một cách đơn giản, Namespace là một tập hợp các tên. Trong Python, ta có thể tưởng tượng Namespace giống như một ánh xạ của những tên mà ta đã định nghĩa với đối tượng tương ứng.\nCác Namespace khác nhau có thể cùng tồn tại vào một thời điểm nhất định nhưng hoàn toàn được cô lập riêng biệt.\nMột Namespace chứa tất cả các tên có sẵn được tạo khi chúng ta khởi động trình thông dịch Python.\nĐây là lý do mà các hàm tích đã được hợp sẵn như id() và print() có thể được sử dụng từ bất kỳ phần nào của chương trình. Mỗi module (mô-đun) có một Namespace riêng. Các Namespace này là khác nhau. Do đó, một tên có thể lặp lại trong nhiều mô-đun khác nhau và không xung đột lẫn nhau.\nMột Module có thể chứa nhiều hàm và lớp khác nhau. Namespace cục bộ được tạo ra khi một hàm được gọi, chứa tất cả các tên được xác định trong đó. Tương tự với trường hợp của lớp (Class). Xem biểu đồ sau để hiểu rõ hơn về khái niệm.\nPhạm vi của biến trong Python\nPhạm vi là vùng code mà từ đó Namespace có thể được truy cập được. Python có các phạm vi sau:\n1. Phạm vi của hàm hiện tại chứa các tên cục bộ.\n2. Phạm vi của mô-đun chứa các tên toàn cục.\n3. Phạm vi ngoài cùng chứa các tên dựng sẵn.\nKhi một tham chiếu được tạo bên trong hàm, tên sẽ được tìm kiếm trong Namespace cục bộ, sau đó trong Namespace toàn cục và cuối cùng là trong Namespace dựng sẵn. Nếu có một hàm bên trong hàm khác, một phạm vi mới sẽ được lồng vào trong phạm vi cục bộ."

          }
        ]
      },
      {
        "title": "Bài 2: Điều khiển luồng trong python",
        "lesson": [
          {
            "directory": "/if-else",
            "subtitle": "If ... else"
          },
          {
            "directory": "/for",
            "subtitle": "For"
          },
          {
            "directory": "/while",
            "subtitle": "While"
          },
          {
            "directory": "/break-va-continue",
            "subtitle": "Break & continue"
          },
          {
            "directory": "/pass",
            "subtitle": "Pass"
          }
        ]
      },
      {
        "title": "Bài 3. Hàm trong Python",
        "lesson": [
          {
            "directory": "/ham",
            "subtitle": "Hàm"
          },
          {
            "directory": "/ham-tu-dinh-nghia",
            "subtitle": "Hàm tự định nghĩa"
          },
          {
            "directory": "/doi-so-cua-ham",
            "subtitle": "Đối số của hàm"
          },
          {
            "directory": "/de-quy",
            "subtitle": "Đệ quy"
          },
          {
            "directory": "/ham-an-danh-va-lambda",
            "subtitle": "Hàm ẩn danh/lambda"
          },
          {
            "directory": "/pham-vi-cua-bien",
            "subtitle": "Phạm vi của biến"
          },
          {
            "directory": "/tu-khoa-global",
            "subtitle": "Từ khóa global"
          },
          {
            "directory": "/module",
            "subtitle": "Module"
          },
          {
            "directory": "/package",
            "subtitle": "Package"
          }
        ]
      },
      {
        "title": "Bài 4. Kiểu dữ liệu trong Python",
        "lesson": [
          {
            "directory": "/kieu-du-lieu-so",
            "subtitle": "Kiểu dữ liệu số"
          },
          {
            "directory": "/danh-sach",
            "subtitle": "Danh sách"
          },
          {
            "directory": "/tuple",
            "subtitle": "Tuple"
          },
          {
            "directory": "/chuoi",
            "subtitle": "Chuỗi"
          },
          {
            "directory": "/set",
            "subtitle": "Set"
          },
          {
            "directory": "/dictionary",
            "subtitle": "Dictionary"
          }
        ]
      },
      {
        "title": "Bài 5. Làm việc với File trong Python",
        "lesson": [
          {
            "directory": "/file-i-va-o",
            "subtitle": "File I/O"
          },
          {
            "directory": "/quan-ly-tep-va-thu-muc",
            "subtitle": "Quản lý tệp và thư mục"
          },
          {
            "directory": "/ngoai-le",
            "subtitle": "Ngoại lệ"
          },
          {
            "directory": "/xu-ly-ngoai-le",
            "subtitle": "Xử lý ngoại lệ"
          },
          {
            "directory": "/ngoai-le-tu-dinh-nghia",
            "subtitle": "Ngoại lệ tự định nghĩa"
          }
        ]
      },
      {
        "title": "Bài 6. Đối tượng và lớp trong Python",
        "lesson": [
          {
            "directory": "/lap-trinh-huong-doi-tuong",
            "subtitle": "Lập trình hướng đối tượng"
          },
          {
            "directory": "/doi-tuong-va-lop",
            "subtitle": "Đối tượng & lớp"
          },
          {
            "directory": "/ke-thua",
            "subtitle": "Kế thừa"
          },
          {
            "directory": "/da-ke-thua",
            "subtitle": "Đa kế thừa"
          },
          {
            "directory": "/nap-chong-toan-tu",
            "subtitle": "Nạp chồng toán tử"
          }
        ]
      },
      {
        "title": "Bài 7. Các chủ đề nâng cao trong Python",
        "lesson": [
          {
            "directory": "/iterator",
            "subtitle": "Iterator"
          },
          {
            "directory": "/generator",
            "subtitle": "Generator"
          },
          {
            "directory": "/closure",
            "subtitle": "Closure"
          },
          {
            "directory": "/decorator",
            "subtitle": "Decorator"
          },
          {
            "directory": "/property",
            "subtitle": "Property"
          },
          {
            "directory": "/regex",
            "subtitle": "RegEx"
          }
        ]
      },
      {
        "title": "Bài 8. Xử lý ngày giờ trong Python",
        "lesson": [
          {
            "directory": "/datetime",
            "subtitle": "Datetime",
            "content": "Trong hướng dẫn này, chúng ta sẽ cùng tìm hiểu các thao tác xử lý ngày và giờ trong Python.\nPython cung cấp module datetime để làm việc và xử lý ngày giờ.\nClass datetime được khai báo trong module datetime, sau đó sử dụng lệnh now() để tạo một đối tượng datetime chứa ngày và giờ cục bộ hiện tại."
          },
          {
            "directory": "/datetime-strftime",
            "subtitle": "datetime.strftime()",
            "content": "Trong hướng dẫn này, chúng ta sẽ cùng tìm hiểu cách chuyển đổi đối tượng ngày, giờ và thời gian thành chuỗi tương ứng trong Python\nPhương thức strftime() trả về chuỗi biểu diễn giá trị ngày, giờ và thời gian bằng cách sử dụng các đối tượng date, time và datetime."
          },
          {
            "directory": "/datetime-strptime",
            "subtitle": "datetime.strptime()",
            "content": "Trong hướng dẫn này, chúng ta sẽ cùng tìm hiểu cách tạo một đối tượng datetime từ chuỗi tương ứng.\nPhương thức strptime() được sử dụng để tạo đối tượng datetime từ một chuỗi cho trước."
          },
          {
            "directory": "/lay-ngay-va-gio-hien-tai",
            "subtitle": "Lấy ngày và giờ hiện tại",
            "content": "hellllllloooooooooooo"
          },
          {
            "directory": "/lay-thoi-gian-hien-tai",
            "subtitle": "Lấy thời gian hiện tại",
            "content": "hellllllloooooooooooo"
          },
          {
            "directory": "/chuyen-timestamp-thanh-datetime-va-nguoc-lai",
            "subtitle": "Chuyển timestamp thành datetime và ngược lại",
            "content": "hellllllloooooooooooo"
          },
          {
            "directory": "/module-time",
            "subtitle": "Module time",
            "content": "hellllllloooooooooooo"
          },
          {
            "directory": "/time-sleep",
            "subtitle": "time.sleep()",
            "content": "hellllllloooooooooooo"
          }
        ]
      }
    ]
  },
  {
    "name": "Java",
    "chapter": [
      {
        "title": "Bài 1: Làm quen với Java",
        "lesson": [
          {
            "directory": "/bien-va-hang",
            "subtitle": "Biến & hằng",
            "content": "Biến và hằng trong Java là các khái niệm cơ bản trong quá trình lập trình. Do vậy, trong bài này, chúng ta sẽ cùng tìm hiểu về các khái niệm này.\nBiến\nMột biến là một vị trí trong bộ nhớ (vùng lưu trữ) để chứa dữ liệu. Để chỉ ra vùng lưu trữ, mỗi biến phải được đặt một tên duy nhất (hay còn gọi là định danh).\nCó 4 kiểu biến trong ngôn ngữ lập trình Java:\n\t1. Biến thực thể\n\t2. Biến của lớp\n\t3. Biến cục bộ\n\t4. Tham số"
          },
          {
            "directory": "/toan-tu",
            "subtitle": "Toán tử",
            "content": "Toán tử trong Java là các ký hiệu thực hiện các thao tác trên các biến và giá trị, ví dụ như dấu cộng + là một toán tử được sử dụng để thực hiện phép cộng hoặc tính tổng. Trong bài này, ta sẽ tìm hiểu về các loại toán tử khác nhau trong Java, cú pháp và cách sử dụng của chúng.\nCác toán tử trong Java có thể được phân thành 6 loại:\n1. Toán tử số học\n2. Toán tử gán\n3. Toán tử quan hệ\n4. Toán tử Logic\n5. Toán tử một ngôi\n6. Toán tử Bitwise"
          },
          {
            "directory": "/bieu-thuc-va-cau-lenh",
            "subtitle": "Biểu thức & câu lệnh",
            "content": "Biểu thức và câu lệnh trong Java là khái niệm cơ bản trong lập trình. Trong bài này, ta sẽ cùng tìm hiểu về biểu thức, câu lệnh trong Java để có thể thấy được sự khác biệt giữa biểu thức, câu lệnh, và các khối lệnh.\nMột biểu thức bao gồm các biến, toán tử, ký tự và lời gọi phương thức.\nTrong Java, mỗi câu lệnh là một đơn vị thực thi hoàn chỉnh và kết thúc bởi dấu chấm phẩy (;)."
          },
          {
            "directory": "/kieu-du-lieu",
            "subtitle": "Kiểu dữ liệu",
            "content": "Kiểu dữ liệu trong Java được sử dụng để chỉ định kích thước và kiểu giá trị có thể được lưu trữ trong một biến mà ta đã học ở bài trước. Ngôn ngữ Java rất phong phú về các kiểu dữ liệu của nó. Các kiểu dữ liệu khác nhau cho phép ta chọn các kiểu phù hợp với tính ứng dụng của chương trình.\nCó 8 kiểu dữ liệu căn bản được định nghĩa trong ngôn ngữ lập trình Java:\n1. Kiểu boolean\n2. Kiểu byte\n3. Kiểu dữ liệu short\n4. Kiểu int\n5. Kiểu long\n6. Kiểu double\n7. Kiểu float\n8. Kiểu char"
          },
          {
            "directory": "/chuoi-ky-tu",
            "subtitle": "Chuỗi ký tự",
            "content": "Chuỗi ký tự trong Java là một trong các kiểu dữ liệu được sử dụng trong khi lập trình, tuy nhiên nó khác với các kiểu dữ liệu căn bản. Trong bài viết này, chúng ta sẽ tìm hiểu về dữ liệu kiểu chuỗi ký tự (String) trong Java.\nTrong Java, một chuỗi ký tự là một tập hợp các ký tự. Ví dụ: \"xin chào\" là một chuỗi bao gồm các ký tự 'h', 'e', 'l', 'l' và 'o'. Chúng ta sử dụng dấu nháy kép để biểu diễn một đối tượng kiểu chuỗi ký tự hay String trong Java."
          },
          {
            "directory": "/nhap-xuat",
            "subtitle": "Nhập xuất",
            "content": "Nhập xuất trong Java là khái niệm cơ bản ban đầu trong lập trình. Trong bài viết này, ta sẽ cùng tìm hiểu về các cách đơn giản để hiển thị đầu ra cho người dùng và nhận đầu vào từ người dùng trong Java.\nTrong Java, ta có thể sử dụng các câu lệnh sau để in ra dữ liệu đến đầu ra tiêu chuẩn (ví dụ như màn hình).\nSystem.out.println();\nSystem.out.print();\nSystem.out.printf();\nJava cung cấp các cách khác nhau để lấy đầu vào từ người dùng. Tuy nhiên, trong hướng dẫn này, ta sẽ tìm hiểu cách lấy đầu vào từ người dùng bằng cách sử dụng đối tượng của lớp Scanner."
          },
          {
            "directory": "/chu-thich",
            "subtitle": "Chú thích",
            "content": "Chú thích trong Java, hay Comment, là các câu lệnh không được trình biên dịch thực thi. Các chú thích có thể được sử dụng để cung cấp thông tin hoặc giải thích ý nghĩa, thông tin về các biến, phương thức, lớp hoặc bất kỳ câu lệnh nào trong chương trình.\nCó hai kiểu chú thích trong Java:\n1. Chú thích cho một dòng.\n2. Chú thích cho nhiều dòng."
          }
        ]
      },
      {
        "title": "Bài 2: Luồng điều khiển trong Java",
        "lesson": [
          {
            "directory": "/switch",
            "subtitle": "Switch"
          },
          {
            "directory": "/if-else",
            "subtitle": "If...else"
          },
          {
            "directory": "/de-quy",
            "subtitle": "Đệ quy"
          }
        ]
      },
      {
        "title": "Bài 3. Hướng đối tượng trong Java",
        "lesson": [
          {
            "directory": "/lop-va-doi-tuong",
            "subtitle": "Lớp & đối tượng"
          },
          {
            "directory": "/chi-dinh-truy-cap",
            "subtitle": "Chỉ định truy cập"
          },
          {
            "directory": "/phuong-thuc",
            "subtitle": "Phương thức"
          },
          {
            "directory": "/ham-tao",
            "subtitle": "Hàm tạo"
          },
          {
            "directory": "/nap-chong",
            "subtitle": "Nạp chồng"
          },
          {
            "directory": "/ke-thua",
            "subtitle": "Kế thừa"
          },
          {
            "directory": "/instanceof",
            "subtitle": "Instanceof"
          },
          {
            "directory": "/final",
            "subtitle": "Final"
          },
          {
            "directory": "/con-tro-this",
            "subtitle": "Con trỏ this"
          },
          {
            "directory": "/ghi-de",
            "subtitle": "Ghi đè"
          },
          {
            "directory": "/tu-khoa-super",
            "subtitle": "Từ khóa super"
          },
          {
            "directory": "/tinh-truu-tuong",
            "subtitle": "Tính trừu tượng"
          },
          {
            "directory": "/interface",
            "subtitle": "Interface"
          },
          {
            "directory": "/lop-singleton",
            "subtitle": "Lớp Singleton"
          },
          {
            "directory": "/enum",
            "subtitle": "Enum"
          },
          {
            "directory": "/reflection",
            "subtitle": "Reflection"
          },
          {
            "directory": "/da-hinh",
            "subtitle": "Đa hình"
          },
          {
            "directory": "/dong-goi",
            "subtitle": "Đóng gói"
          },
          {
            "directory": "/lop-long-nhau",
            "subtitle": "Lớp lồng nhau"
          },
          {
            "directory": "/lop-an-danh",
            "subtitle": "Lớp ẩn danh"
          }
        ]
      },
      {
        "title": "Bài 4. Xử lý ngoại lệ trong Java",
        "lesson": [
          {
            "directory": "/ngoai-le",
            "subtitle": "Ngoại lệ"
          },
          {
            "directory": "/try-catch",
            "subtitle": "Try Catch"
          },
          {
            "directory": "/xu-ly-nhieu-ngoai-le",
            "subtitle": "Xử lý nhiều ngoại lệ"
          },
          {
            "directory": "/try-with-resources",
            "subtitle": "Try-with-resources"
          },
          {
            "directory": "/annotation",
            "subtitle": "Annotation"
          },
          {
            "directory": "/cac-kieu-annotation",
            "subtitle": "Các kiểu Annotation"
          },
          {
            "directory": "/throw-va-throws",
            "subtitle": "Throw & Throws"
          },
          {
            "directory": "/ghi-log",
            "subtitle": "Ghi log"
          },
          {
            "directory": "/assertion",
            "subtitle": "Assertion"
          }
        ]
      },
      {
        "title": "Bài 5. Các lớp nâng cao trong Java",
        "lesson": [
          {
            "directory": "/collection-interface",
            "subtitle": "Collection Interface"
          },
          {
            "directory": "/arraylist",
            "subtitle": "Arraylist"
          },
          {
            "directory": "/queue-interface",
            "subtitle": "Queue Interface"
          },
          {
            "directory": "/priorityqueue",
            "subtitle": "PriorityQueue"
          },
          {
            "directory": "/deque-interface",
            "subtitle": "Deque Interface"
          },
          {
            "directory": "/linkedList",
            "subtitle": "LinkedList"
          },
          {
            "directory": "/arraydeque",
            "subtitle": "ArrayDeque"
          },
          {
            "directory": "/blockingqueue-interface",
            "subtitle": "BlockingQueue Interface"
          },
          {
            "directory": "/arrayblockingqueue",
            "subtitle": "ArrayBlockingQueue"
          },
          {
            "directory": "/linkedblockingqueue",
            "subtitle": "LinkedBlockingQueue"
          },
          {
            "directory": "/map-interface",
            "subtitle": "Map Interface"
          },
          {
            "directory": "/hashmap",
            "subtitle": "Hashmap"
          },
          {
            "directory": "/linkedhashmap",
            "subtitle": "LinkedHashmap"
          },
          {
            "directory": "/stack",
            "subtitle": "Stack"
          },
          {
            "directory": "/vector",
            "subtitle": "Vector"
          },
          {
            "directory": "/framework-collection",
            "subtitle": "Framework Collection"
          },
          {
            "directory": "/weakhashmap",
            "subtitle": "WeakHashMap"
          },
          {
            "directory": "/enummap",
            "subtitle": "EnumMap"
          },
          {
            "directory": "/sortedmap-interface",
            "subtitle": "SortedMap Interface"
          },
          {
            "directory": "/navigablemap-interface",
            "subtitle": "NavigableMap Interface"
          },
          {
            "directory": "/TreeMap",
            "subtitle": "TreeMap"
          },
          {
            "directory": "/concurrentmap-interface",
            "subtitle": "ConcurrentMap Interface"
          },
          {
            "directory": "/concurrenthashmap",
            "subtitle": "ConcurrentHashMap"
          },
          {
            "directory": "/set-interface",
            "subtitle": "Set Interface"
          },
          {
            "directory": "/hashset",
            "subtitle": "Hashset"
          },
          {
            "directory": "/enumset",
            "subtitle": "EnumSet"
          },
          {
            "directory": "/linkedhashset",
            "subtitle": "LinkedHashSet"
          },
          {
            "directory": "/navigableset-interface",
            "subtitle": "NavigableSet Interface"
          },
          {
            "directory": "/sortedset-interface",
            "subtitle": "SortedSet Interface"
          },
          {
            "directory": "/treeset",
            "subtitle": "TreeSet"
          },
          {
            "directory": "/phuong-thuc-co-san",
            "subtitle": "Phương thức có sẵn"
          },
          {
            "directory": "/iterator-interface",
            "subtitle": "Iterator Interface"
          },
          {
            "directory": "/listiterator-interface",
            "subtitle": "ListIterator Interface"
          }
        ]
      },
      {
        "title": "Bài 6. Luồng nhập xuất trong Java (Đọc file và ghi file)",
        "lesson": [
          {
            "directory": "/luong-nhap-xuat",
            "subtitle": "Luồng nhập xuất"
          },
          {
            "directory": "/inputstream",
            "subtitle": "InputStream"
          },
          {
            "directory": "/outputstream",
            "subtitle": "OutputStream"
          },
          {
            "directory": "/fileinputstream",
            "subtitle": "FileInputStream"
          },
          {
            "directory": "/fileoutputstream",
            "subtitle": "FileOutputStream"
          },
          {
            "directory": "/bytearrayinputstream",
            "subtitle": "ByteArrayInputStream"
          },
          {
            "directory": "/bytearrayoutputstream",
            "subtitle": "ByteArrayOutputStream"
          },
          {
            "directory": "/objectinputstream",
            "subtitle": "ObjectInputStream"
          },
          {
            "directory": "/objectoutputstream",
            "subtitle": "ObjectOutputStream"
          },
          {
            "directory": "/bufferedinputstream",
            "subtitle": "BufferedInputStream"
          },
          {
            "directory": "/bufferedoutputstream",
            "subtitle": "BufferedOutputStream"
          },
          {
            "directory": "/printstream",
            "subtitle": "PrintStream"
          },
          {
            "directory": "/reader-va-writer",
            "subtitle": "Reader & Writer"
          },
          {
            "directory": "/inputstreamreader-va-outputstreamwriter",
            "subtitle": "InputStreamReader & OutputStreamWriter"
          },
          {
            "directory": "/filereader-va-filewriter",
            "subtitle": "FileReader & FileWriter"
          },
          {
            "directory": "/bufferedreader-va-bufferedwriter",
            "subtitle": "BufferedReader & BufferedWriter"
          },
          {
            "directory": "/stringreader-va-stringwriter",
            "subtitle": "StringReader & StringWriter"
          },
          {
            "directory": "/printwriter",
            "subtitle": "PrintWriter"
          },
          {
            "directory": "/scanner",
            "subtitle": "Scanner"
          }
        ]
      },
      {
        "title": "Bài 7. Kiến thức bổ sung",
        "lesson": [
          {
            "directory": "/ep-kieu",
            "subtitle": "Ép kiểu"
          },
          {
            "directory": "/autoboxing-va-unboxing",
            "subtitle": "Autoboxing & Unboxing"
          },
          {
            "directory": "/bieu-thuc-lambda",
            "subtitle": "Biểu thức Lambda"
          },
          {
            "directory": "/tinh-tong-quat",
            "subtitle": "Tính tổng quát"
          },
          {
            "directory": "/file",
            "subtitle": "File"
          },
          {
            "directory": "/wrapper",
            "subtitle": "Wrapper"
          },
          {
            "directory": "/tham-so-tren-commandline",
            "subtitle": "Tham số trên CommandLine"
          }
        ]
      }
    ]
  },
  {
    "name": "C",
    "chapter": [
      {
        "title": "Bài 1. Tổng quan về ngôn ngữ C",
        "lesson": [
          {
            "directory": "/chuong-trinh-hello-world",
            "subtitle": "Chương trình \"Hello, World!\""
          },
          {
            "directory": "/chuong-trinh-in-mot-so-nguyen",
            "subtitle": "Chương trình in một số nguyên (Do người dùng nhập vào)"
          },
          {
            "directory": "/chuong-trinh-cong-hai-so-nguyen",
            "subtitle": "Chương trình cộng hai số nguyên"
          },
          {
            "directory": "/chuong-trinh-nhan-hai-so-thuc",
            "subtitle": "Chương trình nhân hai số thực"
          },
          {
            "directory": "/chuong-trinh-tim-gia-tri-ascii-cua-mot-ky-tu",
            "subtitle": "Chương trình tìm giá trị ASCII của một ký tự"
          },
          {
            "directory": "/chuong-trinh-tinh-thuong-va-so-du",
            "subtitle": "Chương trình tính thương và số dư"
          },
          {
            "directory": "/chuong-trinh-tim-kich-thuoc-cua-cac-kieu-du-lieu-trong-c",
            "subtitle": "Chương trình tìm kích thước của các kiểu dữ liệu trong C"
          },
          {
            "directory": "/chuong-trinh-chung-minh-hoat-dong-cua-kieu-long",
            "subtitle": "Chương trình chứng minh hoạt động của kiểu \"long\""
          },
          {
            "directory": "/chuong-trinh-hoan-doi-hai-so",
            "subtitle": "Chương trình hoán đổi hai số"
          }
        ]
      },
      {
        "title": "Bài 2: Kiểm soát luồng trong C",
        "lesson": [
          {
            "directory": "/chuong-trinh-kiem-tra-xem-mot-so-la-chan-hay-le",
            "subtitle": "Chương trình kiểm tra xem một số là chẵn hay lẻ"
          },
          {
            "directory": "/chuong-trinh-kiem-tra-xem-mot-ki-tu-la-nguyen-am-hay-phu-am",
            "subtitle": "Chương trình kiểm tra xem một kí tự là nguyên âm hay phụ âm"
          },
          {
            "directory": "/chuong-trinh-tim-so-lon-nhat-trong-ba-so",
            "subtitle": "Chương trình tìm số lớn nhất trong ba số"
          },
          {
            "directory": "/chuong-trinh-tim-nghiem-cua-phuong-trinh-bac-hai",
            "subtitle": "Chương trình tìm nghiệm của phương trình bậc hai"
          },
          {
            "directory": "/chuong-trinh-kiem-tra-nam-nhuan",
            "subtitle": "Chương trình kiểm tra năm nhuận"
          },
          {
            "directory": "/chuong-trinh-kiem-tra-xem-mot-so-la-so-am-hay-so-duong",
            "subtitle": "Chương trình kiểm tra xem một số là số âm hay số dương"
          },
          {
            "directory": "/chuong-trinh-kiem-tra-mot-ki-tu-co-nam-trong-bang-chu-cai-hay-khong",
            "subtitle": "Chương trình kiểm tra một kí tự có nằm trong bảng chữ cái hay không"
          },
          {
            "directory": "/chuong-trinh-tinh-tong-cac-so-tu-nhien",
            "subtitle": "Chương trình tính tổng các số tự nhiên"
          },
          {
            "directory": "/chuong-trinh-tim-giai-thua-cua-mot-so",
            "subtitle": "Chương trình tìm giai thừa của một số"
          },
          {
            "directory": "/chuong-trinh-tim-nghiem-cua-phuong-trinh-bac-hai",
            "subtitle": "Chương trình tìm nghiệm của phương trình bậc hai"
          },
          {
            "directory": "/chuong-trinh-tao-bang-cuu-chuong",
            "subtitle": "Chương trình tạo bảng cửu chương"
          },
          {
            "directory": "/chuong-trinh-hien-thi-chuoi-fibonacci",
            "subtitle": "Chương trình hiển thị chuỗi Fibonacci"
          },
          {
            "directory": "/tim-gcd-cua-hai-so",
            "subtitle": "Tìm GCD của hai số"
          },
          {
            "directory": "/tim-lcm-cua-hai-so",
            "subtitle": "Tìm LCM của hai số"
          },
          {
            "directory": "/dem-so-chu-so-cua-mot-so-nguyen",
            "subtitle": "Đếm số chữ số của một số nguyên"
          },
          {
            "directory": "/chuong-trinh-dao-nguoc-mot-so",
            "subtitle": "Chương trình đảo ngược một số"
          },
          {
            "directory": "/tinh-luy-thua-cua-mot-so",
            "subtitle": "Tính lũy thừa của một số"
          },
          {
            "directory": "/kiem-tra-mot-so-co-phai-palindrome-hay-khong",
            "subtitle": "Kiểm tra một số có phải Palindrome hay không"
          },
          {
            "directory": "/kiem-tra-mot-so-co-phai-so-nguyen-to-hay-khong",
            "subtitle": "Kiểm tra một số có phải số nguyên tố hay không"
          },
          {
            "directory": "/hien-thi-cac-so-nguyen-to-giua-hai-khoang-gia-tri",
            "subtitle": "Hiển thị các số nguyên tố giữa hai khoảng giá trị"
          },
          {
            "directory": "/kiem-tra-so-armstrong",
            "subtitle": "Kiểm tra số Armstrong"
          },
          {
            "directory": "/hien-thi-so-armstrong-giua-hai-khoang-gia-tri",
            "subtitle": "Hiển thị số Armstrong giữa hai khoảng giá trị"
          },
          {
            "directory": "/hien-thi-cac-uoc-cua-mot-so",
            "subtitle": "Hiển thị các ước của một số"
          },
          {
            "directory": "/tao-kim-tu-thap-va-hoa-van",
            "subtitle": "Tạo kim tự tháp và hoa văn"
          },
          {
            "directory": "/tao-mot-may-tinh-don-gian-su-dung-switch-case",
            "subtitle": "Tạo một máy tính đơn giản sử dụng switch...case"
          },
          {
            "directory": "/hien-thi-cac-ki-tu-tu-a-den-z-su-dung-vong-lap",
            "subtitle": "Hiển thị các kí tự từ A đến Z sử dụng vòng lặp"
          }
        ]
      },
      {
        "title": "Bài 3. Hàm trong C",
        "lesson": [
          {
            "directory": "/hien-thi-cac-so-nguyen-to-giua-cac-khoang-su-dung-ham",
            "subtitle": "Hiển thị các số nguyên tố giữa các khoảng sử dụng hàm"
          },
          {
            "directory": "/kiem-tra-so-nguyen-to-hoac-so-armstrong-su-dung-ham-tu-dinh-nghia",
            "subtitle": "Kiểm tra số Nguyên tố hoặc số Armstrong sử dụng hàm tự định nghĩa"
          },
          {
            "directory": "/kiem-tra-xem-mot-so-co-the-duoc-bieu-thi-duoi-dang-tong-cua-hai-so-nguyen-to-hay-khong",
            "subtitle": "Kiểm tra xem một số có thể được biểu thị dưới dạng tổng của hai số nguyên tố hay không"
          },
          {
            "directory": "/tinh-tong-cac-so-tu-nhien-su-dung-de-quy",
            "subtitle": "Tính tổng các số tự nhiên sử dụng đệ quy"
          },
          {
            "directory": "/tinh-giai-thua-cua-mot-so-su-dung-de-quy",
            "subtitle": "Tính giai thừa của một số sử dụng đệ quy"
          },
          {
            "directory": "/tim-g-c-d-su-dung-de-quy",
            "subtitle": "Tìm G.C.D sử dụng đệ quy"
          },
          {
            "directory": "/dao-nguoc-mot-chuoi-su-dung-de-quy",
            "subtitle": "Đảo ngược một chuỗi sử dụng đệ quy"
          },
          {
            "directory": "/tinh-luy-thua-cua-mot-so-su-dung-de-quy",
            "subtitle": "Tính lũy thừa của một số sử dụng đệ quy"
          },
          {
            "directory": "/chuyen-doi-so-nhi-phan-thanh-so-thap-phan-va-nguoc-lai",
            "subtitle": "Chuyển đổi số nhị phân thành số thập phân và ngược lại"
          },
          {
            "directory": "/chuyen-doi-so-bat-phan-thanh-so-thap-phan-va-nguoc-lai",
            "subtitle": "Chuyển đổi số bát phân thành số thập phân và ngược lại"
          },
          {
            "directory": "/chuyen-doi-so-nhi-phan-thanh-so-bat-phan-va-nguoc-lai",
            "subtitle": "Chuyển đổi số nhị phân thành số bát phân và ngược lại"
          }
        ]
      },
      {
        "title": "Bài 4. Mảng và con trỏ trong C",
        "lesson": [
          {
            "directory": "/tinh-trung-binh-cong-cua-cac-phan-tu-mang",
            "subtitle": "Tính trung bình cộng của các phần tử mảng"
          },
          {
            "directory": "/tim-phan-tu-lon-nhat-trong-mot-mang",
            "subtitle": "Tìm phần tử lớn nhất trong một mảng"
          },
          {
            "directory": "/tinh-toan-do-lech-tieu-chuan",
            "subtitle": "Tính toán độ lệch tiêu chuẩn"
          },
          {
            "directory": "/cong-hai-ma-tran",
            "subtitle": "Cộng hai ma trận"
          },
          {
            "directory": "/nhan-hai-ma-tran",
            "subtitle": "Nhân hai ma trận"
          },
          {
            "directory": "/tim-chuyen-vi-cua-mot-ma-tran",
            "subtitle": "Tìm chuyển vị của một ma trận"
          },
          {
            "directory": "/nhan-hai-ma-tran-bang-cach-truyen-ma-tran-vao-ham",
            "subtitle": "Nhân hai ma trận bằng cách truyền ma trận vào hàm"
          },
          {
            "directory": "/truy-cap-toi-cac-phan-tu-mang-su-dung-con-tro",
            "subtitle": "Truy cập tới các phần tử mảng sử dụng con trỏ"
          },
          {
            "directory": "/hoan-doi-cac-so-bang-cach-goi-tham-chieu",
            "subtitle": "Hoán đổi các số bằng cách gọi tham chiếu"
          },
          {
            "directory": "/tim-so-lon-nhat-su-dung-cap-phat-bo-nho-dong",
            "subtitle": "Tìm số lớn nhất sử dụng cấp phát bộ nhớ động"
          }
        ]
      },
      {
        "title": "Bài 5. Chuỗi kí tự trong C",
        "lesson": [
          {
            "directory": "/tim-tan-suat-cua-cac-ki-tu-trong-mot-chuoi",
            "subtitle": "Tìm tần suất của các kí tự trong một chuỗi"
          },
          {
            "directory": "/dem-so-ki-tu-nguyen-am-phu-am",
            "subtitle": "Đếm số kí tự nguyên âm, phụ âm, v.v."
          },
          {
            "directory": "/tim-kich-thuoc-cua-mot-chuoi",
            "subtitle": "Tìm kích thước của một chuỗi"
          },
          {
            "directory": "/noi-hai-chuoi",
            "subtitle": "Nối hai chuỗi"
          },
          {
            "directory": "/sao-chep-chuoi-khong-su-dung-strcpy",
            "subtitle": "Sao chép chuỗi không sử dụng strcpy()"
          },
          {
            "directory": "/xoa-tat-ca-cac-ky-tu-trong-mot-chuoi-ngoai-tru-bang-chu-cai",
            "subtitle": "Xóa tất cả các ký tự trong một chuỗi ngoại trừ bảng chữ cái"
          },
          {
            "directory": "/sap-xep-cac-phan-tu-theo-thu-tu-tu-vung",
            "subtitle": "Sắp xếp các phần tử theo thứ tự từ vựng (thứ tự từ điển)"
          }
        ]
      },
      {
        "title": "Bài 6. Struct và Union",
        "lesson": [
          {
            "directory": "/luu-tru-thong-tin-cua-mot-sinh-vien-su-dung-cau-truc",
            "subtitle": "Lưu trữ thông tin của một sinh viên sử dụng cấu trúc"
          },
          {
            "directory": "/cong-hai-khoang-cach",
            "subtitle": "Cộng hai khoảng cách (trong hệ thống inch-feet)"
          },
          {
            "directory": "/cong-hai-so-phuc-bang-cach-truyen-cau-truc-vao-mot-ham",
            "subtitle": "Cộng hai số phức bằng cách truyền cấu trúc vào một hàm"
          },
          {
            "directory": "/tinh-do-chenh-lech-giua-hai-khoang-thoi-gian",
            "subtitle": "Tính độ chênh lệch giữa hai khoảng thời gian"
          },
          {
            "directory": "/luu-tru-thong-tin-cua-nhieu-sinh-vien-su-dung-cau-truc",
            "subtitle": "Lưu trữ thông tin của nhiều sinh viên sử dụng cấu trúc"
          },
          {
            "directory": "/luu-tru-du-lieu-su-dung-cau-truc-cap-phat-dong",
            "subtitle": "Lưu trữ dữ liệu sử dụng cấu trúc cấp phát động"
          }
        ]
      },
      {
        "title": "Bài 7. Làm việc với file trong C",
        "lesson": [
          {
            "directory": "/ghi-mot-cau-vao-tep",
            "subtitle": "Ghi một câu vào tệp"
          },
          {
            "directory": "/doc-dong-dau-tien-tu-mot-tep",
            "subtitle": "Đọc dòng đầu tiên từ một tệp"
          },
          {
            "directory": "/hien-thi-ma-nguon-duoi-dang-dau-ra",
            "subtitle": "Hiển thị mã nguồn dưới dạng đầu ra"
          }
        ]
      }
    ]
  },
  {
    "name": "Cpp",
    "chapter": [
      {
        "title": "Bài 1: Giới thiệu ngôn ngữ C++",
        "lesson": [
          {
            "directory": "/hello-world",
            "subtitle": "Hello World",
            "content": "Chương trình C++ đầu tiên – Hello World! là một chương trình đơn giản nhằm in ra chuỗi ký tự \"Hello, World!\" trên màn hình. Chúng ta sẽ cùng đi tìm hiểu về cách mà chương trình này hoạt động."
          },
          {
            "directory": "/bien-hang-so-va-literal",
            "subtitle": "Biến, hằng số & literal",
            "content": "Trong lập trình, biến, hay Variable, là một nơi lưu trữ dữ liệu. Để xác định được nơi lưu trữ, mỗi biến sẽ được đặt một tên duy nhất, và tùy theo ý của người lập trình. Vì giá trị của các biến có thể thay đổi, do đó mà nó được gọi là biến.\nLiteral (Hằng), sau đây là danh sách các hằng trong lập trình C ++:\n1. Số nguyên\n2. Số thực\n3. Ký tự\n4. Escape Sequence\n5. Chuỗi ký tự\n6. Hằng số"
          },
          {
            "directory": "/kieu-du-lieu",
            "subtitle": "Kiểu dữ liệu",
            "content": "Các kiểu dữ liệu chính trong C++\n1. Kiểu int\n2. Kiểu double và float\n3. Kiểu char\n4. Kiểu wchar_t\n5. Kiểu Bool\n6. Kiểu void"
          },
          {
            "directory": "/nhap-xuat",
            "subtitle": "Nhập xuất",
            "content": "Xuất dữ liệu đầu ra\nVào ra cơ bản trong C++ là các thao tác quan trọng và cơ bản với dữ liệu của người dùng. Trong bài này, chúng ta sẽ học cách sử dụng đối tượng cin để nhận đầu vào và đối tượng cout để hiển thị đầu ra cho người dùng.\nNhập dữ liệu đầu vào\nTrong C ++, cin nhận đầu vào được định dạng từ các thiết bị như bàn phím. Chúng ta sẽ sử dụng đối tượng cin cùng với toán tử >> để lấy đầu vào từ người dùng."
          },
          {
            "directory": "/toan-tu-va-bieu-thuc",
            "subtitle": "Toán tử & biểu thức",
            "content": "Toán tử trong C++\nToán từ là các ký hiệu thực hiện các thao tác trên các biến và giá trị. Ví dụ, dấu cộng + là một toán tử được sử dụng để tính phép cộng, và dấu trừ - là một toán tử được sử dụng để thực hiện phép trừ.\nCác toán tử trong C ++ có thể được phân thành 6 loại:\n1. Toán tử số học\n2. Toán tử gán\n3. Toán tử quan hệ\n4. Toán tử Logic\n5. Toán tử Bitwise\n6. Các toán tử khác"
          }
        ]
      },
          {
            "title": "Bài 2: Kiểm soát luồng trong C++",
            "lesson": [
              {
                "directory": "/dieu-kien",
                "subtitle": "Điều kiện"
              },
              {
                "directory": "/for",
                "subtitle": "For"
              },
              {
                "directory": "/while-va-do-while",
                "subtitle": "While & do...while"
              },
              {
                "directory": "/break-va-continue",
                "subtitle": "Break & continue"
              }
            ]
          },
          {
            "title": "Bài 3. Hàm trong C++",
            "lesson": [
              {
                "directory": "/ham",
                "subtitle": "Hàm"
              },
              {
                "directory": "/cac-kieu-ham",
                "subtitle": "Các kiểu hàm"
              },
              {
                "directory": "/nap-chong-ham",
                "subtitle": "Nạp chồng hàm"
              },
              {
                "directory": "/de-quy",
                "subtitle": "Đối số của hàm"
              },
              {
                "directory": "/pham-vi-cua-bien",
                "subtitle": "Phạm vi của biến"
              },
              {
                "directory": "/de-quy",
                "subtitle": "Đệ quy"
              },
              {
                "directory": "/tham-chieu",
                "subtitle": "Tham chiếu"
              }
            ]
          },
          {
            "title": "Bài 4. Mảng trong C++",
            "lesson": [
              {
                "directory": "/mang",
                "subtitle": "Mảng"
              },
              {
                "directory": "/mang-da-chieu",
                "subtitle": "Mảng đa chiều"
              },
              {
                "directory": "/mang-va-ham",
                "subtitle": "Mảng & hàm"
              },
              {
                "directory": "/xau-ky-tu",
                "subtitle": "Xâu ký tự"
              }
            ]
          },
          {
            "title": "Bài 5. Con trỏ trong C++",
            "lesson": [
              {
                "directory": "/con-tro",
                "subtitle": "Con trỏ"
              },
              {
                "directory": "/con-tro-this",
                "subtitle": "Con trỏ this"
              },
              {
                "directory": "/con-tro-va-ham",
                "subtitle": "Con trỏ & hàm"
              },
              {
                "directory": "/con-tro-va-mang",
                "subtitle": "Con trỏ & mảng"
              },
              {
                "directory": "/quan-ly-bo-nho",
                "subtitle": "Quản lý bộ nhớ"
              }
            ]
          },
          {
            "title": "Bài 6. Cấu trúc trong C++",
            "lesson": [
              {
                "directory": "/cau-truc",
                "subtitle": "Cấu trúc"
              },
              {
                "directory": "/cau-truc-va-ham",
                "subtitle": "Cấu trúc & hàm"
              },
              {
                "directory": "/cau-truc-va-con-tro",
                "subtitle": "Cấu trúc & con trỏ"
              }
            ]
          },
      {
        "title": "Bài 7. Hướng đối tượng C++",
        "lesson": [
          {
            "directory": "/lop-va-doi-tuong",
            "subtitle": "Lớp & đối tượng"
          },
          {
            "directory": "/ham-tao-va-ham-huy",
            "subtitle": "Hàm tạo & hàm hủy"
          },
          {
            "directory": "/doi-tuong-va-ham",
            "subtitle": "Đối tượng & hàm"
          },
          {
            "directory": "/ke-thua",
            "subtitle": "Kế thừa"
          },
          {
            "directory": "/cac-kieu-ke-thua",
            "subtitle": "Các kiểu kế thừa"
          },
          {
            "directory": "/da-hinh",
            "subtitle": "Đa hình"
          },
          {
            "directory": "/nap-chong",
            "subtitle": "Nạp chồng"
          },
          {
            "directory": "/ham-ao",
            "subtitle": "Hàm ảo"
          },
          {
            "directory": "/truu-tuong-va-dong-goi",
            "subtitle": "Trừu tượng & đóng gói"
          },
          {
            "directory": "/interface-lop-abstract",
            "subtitle": "Interface - Lớp Abstract"
          },
          {
            "directory": "/truyen-va-tra-ve-doi-tuong-tu-ham",
            "subtitle": "Truyền và trả về đối tượng từ hàm"
          },
          {
            "directory": "/lop-ban-va-ham-ban",
            "subtitle": "Lớp bạn & hàm bạn"
          },
          {
            "directory": "/template",
            "subtitle": "Template"
          },
          {
            "directory": "/ke-thua-da-cap-va-phan-cap",
            "subtitle": "Kế thừa đa cấp & phân cấp"
          },
          {
            "directory": "/ghi-de-ham",
            "subtitle": "Ghi đè hàm"
          },
          {
            "directory": "/enumeration",
            "subtitle": "Enumeration"
          },
          {
            "directory": "/chu-thich",
            "subtitle": "Chú thích"
          },
          {
            "directory": "/chuyen-doi-kieu",
            "subtitle": "Chuyển đổi kiểu"
          }
        ]
      }
    ]
  },
  {
    "name": "Javascript",
    "chapter": [
      {
        "title": "Bài 1: Giới thiệu về Javascript",
        "lesson": [
          {
            "directory": "/gioi-thieu",
            "subtitle": "Giới thiệu"
          },
          {
            "directory": "/bien-va-hang-so",
            "subtitle": "Biến & hằng số"
          },
          {
            "directory": "/console-log",
            "subtitle": "console.log()"
          },
          {
            "directory": "/chu-thich",
            "subtitle": "Chú thích"
          },
          {
            "directory": "/let-va-var",
            "subtitle": "let & var"
          }
        ]
      },
      {
        "title": "Bài 2: Hàm trong Javascript",
        "lesson": [
          {
            "directory": "/ham",
            "subtitle": "Hàm"
          },
          {
            "directory": "/pham-vi-cua-bien",
            "subtitle": "Phạm vi của biến"
          }
        ]
      },
      {
        "title": "Bài 3. Các kiểu dữ liệu cơ bản trong JavaScript",
        "lesson": [
          {
            "directory": "/kieu-du-lieu",
            "subtitle": "Kiểu dữ liệu"
          },
          {
            "directory": "/kieu-du-lieu-so",
            "subtitle": "Kiểu dữ liệu số"
          },
          {
            "directory": "/toan-tu",
            "subtitle": "Toán tử"
          },
          {
            "directory": "/symbol",
            "subtitle": "Symbol"
          },
          {
            "directory": "/ep-kieu",
            "subtitle": "Ép kiểu"
          }
        ]
      },
      {
        "title": "Bài 4. Mảng trong Javascript",
        "lesson": [
          {
            "directory": "/mang",
            "subtitle": "Mảng"
          },
          {
            "directory": "/chuoi-ky-tu",
            "subtitle": "Chuỗi ký tự"
          },
          {
            "directory": "/mang-da-chieu",
            "subtitle": "Mảng đa chiều"
          }
        ]
      },
      {
        "title": "Bài 5. Kiểm soát luồng trong Javascript",
        "lesson": [
          {
            "directory": "/toan-tu",
            "subtitle": "Toán tử"
          },
          {
            "directory": "/if",
            "subtitle": "if"
          },
          {
            "directory": "/for",
            "subtitle": "for"
          },
          {
            "directory": "/break-va-continue",
            "subtitle": "break & continue"
          },
          {
            "directory": "/switch",
            "subtitle": "switch"
          },
          {
            "directory": "/for-in",
            "subtitle": "for...in"
          },
          {
            "directory": "/for-of",
            "subtitle": "for...of"
          },
          {
            "directory": "/de-quy",
            "subtitle": "while"
          },
          {
            "directory": "/de-quy",
            "subtitle": "Đệ quy"
          }
        ]
      },
      {
        "title": "Bài 6. Đối tượng trong JS",
        "lesson": [
          {
            "directory": "/lop",
            "subtitle": "Lớp"
          },
          {
            "directory": "/doi-tuong",
            "subtitle": "Đối tượng"
          },
          {
            "directory": "/prototype",
            "subtitle": "Prototype"
          },
          {
            "directory": "/ke-thua",
            "subtitle": "Kế thừa"
          },
          {
            "directory": "/this",
            "subtitle": "this"
          },
          {
            "directory": "/phuong-thuc",
            "subtitle": "Phương thức"
          },
          {
            "directory": "/ham-tao",
            "subtitle": "Hàm tạo"
          },
          {
            "directory": "/getter-va-setter",
            "subtitle": "Getter & Setter"
          },
          {
            "directory": "/tham-so-mac-dinh",
            "subtitle": "Tham số mặc định"
          }
        ]
      },
      {
        "title": "Bài 7. Xử lý ngoại lệ trong JS",
        "lesson": [
          {
            "directory": "/ngoai-le",
            "subtitle": "Ngoại lệ"
          },
          {
            "directory": "/throw",
            "subtitle": "throw"
          }
        ]
      },
      {
        "title": "Bài 8. Bất đồng bộ trong JS",
        "lesson": [
          {
            "directory": "/json",
            "subtitle": "JSON"
          },
          {
            "directory": "/promise",
            "subtitle": "Promise"
          },
          {
            "directory": "/async-va-await",
            "subtitle": "async & await"
          }
        ]
      },
      {
        "title": "Bài 9. ES6 trong JS",
        "lesson": [
          {
            "directory": "/gioi-thieu-javascript-es6",
            "subtitle": "Giới thiệu JavaScript ES6"
          },
          {
            "directory": "/template-literal",
            "subtitle": "Template Literal"
          },
          {
            "directory": "/toan-tu-spread",
            "subtitle": "Toán tử Spread"
          },
          {
            "directory": "/destructuring",
            "subtitle": "Destructuring"
          }
        ]
      },
      {
        "title": "Bài 10. Kiến thức nâng cao trong JS",
        "lesson": [
          {
            "directory": "/gioi-thieu-javascript-es6",
            "subtitle": "Arrow"
          },
          {
            "directory": "/template-literal",
            "subtitle": "Closures"
          },
          {
            "directory": "/toan-tu-spread",
            "subtitle": "Cơ chế Hoisting"
          },
          {
            "directory": "/cu-phap-use-strict",
            "subtitle": "Cú pháp \"use strict\""
          },
          {
            "directory": "/module",
            "subtitle": "Module"
          },
          {
            "directory": "/settimeout",
            "subtitle": "setTimeout()"
          },
          {
            "directory": "/callback",
            "subtitle": "Callback"
          },
          {
            "directory": "/setinterval",
            "subtitle": "setInterval()"
          },
          {
            "directory": "/map-va-weakmap",
            "subtitle": "Map & WeakMap"
          },
          {
            "directory": "/set-va-weakset",
            "subtitle": "Set & WeakSet"
          },
          {
            "directory": "/proxy",
            "subtitle": "Proxy"
          },
          {
            "directory": "/ngay-va-thoi-gian",
            "subtitle": "Ngày & thời gian"
          },
          {
            "directory": "/iterator-va-iterable",
            "subtitle": "Iterator & Iterable"
          },
          {
            "directory": "/generator",
            "subtitle": "Generator"
          },
          {
            "directory": "/regex",
            "subtitle": "Regex"
          },
          {
            "directory": "/kiem-tra-loi",
            "subtitle": "Kiểm tra lỗi"
          }
        ]
      }
    ]

  },
  {
    "name": "HTML",
    "chapter": [
      {
        "title": "Bài 1: Tổng quan về ứng dụng Web",
        "lesson": [
          {
            "directory": "/web-la-gi",
            "subtitle": "Web là gì?"
          },
          {
            "directory": "/web-hoat-dong-nhu-the-nao-giao-thuc-http-va-https",
            "subtitle": "Web hoạt động như thế nào, giao thức HTTP và HTTPS"
          },
          {
            "directory": "/phia-may-chu-va-phia-may-khach",
            "subtitle": "Phía máy chủ và Phía máy khách"
          },
          {
            "directory": "/thanh-phan-front-end",
            "subtitle": "Thành phần Front-End"
          },
          {
            "directory": "/lap-trinh-back-end",
            "subtitle": "Lập trình Back-end"
          }
        ]
      },
      {
        "title": "Bài 2: Tổng quan về HTML và HTML5",
        "lesson": [
          {
            "directory": "/cau-truc-tep-html",
            "subtitle": "Cấu trúc tệp HTML"
          },
          {
            "directory": "/the-tieu-de",
            "subtitle": "Thẻ tiêu đề"
          },
          {
            "directory": "/tong-quan-ve-html5",
            "subtitle": "Tổng quan về HTML5"
          }
        ]
      },
      {
        "title": "Bài 3. Trang trí làm màu web với CSS",
        "lesson": [
          {
            "directory": "/tong-quan-ve-css",
            "subtitle": "Tổng quan về CSS"
          },
          {
            "directory": "/cach-thuc-su-dung-css",
            "subtitle": "Cách thức sử dụng CSS"
          }
        ]
      },
      {
        "title": "Bài 4. CSS nâng cao",
        "lesson": []
      },
      {
        "title": "Bài 5. Các nguyên tắc đảm bảo tính Responsive",
        "lesson": [
          {
            "directory": "/tong-quan-ve-web-responsive",
            "subtitle": "Tổng quan về web responsive"
          }
        ]
      },
      {
        "title": "Bài 6. CSS Flexbox",
        "lesson": [
          {
            "directory": "/tong-quan-ve-flexbox-trong-css",
            "subtitle": "Tổng quan về flexbox trong CSS"
          }
        ]
      },
      {
        "title": "Bài 7. CSS Grid",
        "lesson": [
          {
            "directory": "/tong-quan-ve-css-grid",
            "subtitle": "Tổng quan về CSS grid"
          }
        ]
      },
      {
        "title": "Bài 8. Một số kiến thức nâng cao về lập trình web hiện đại",
        "lesson": [
          {
            "directory": "/microservices",
            "subtitle": "Microservices"
          },
          {
            "directory": "/framework-la-gi",
            "subtitle": "Framework là gì?"
          }
        ]
      },
      {
        "title": "Bài 8. Một số kiến thức cần khi làm việc thực tế",
        "lesson": []
      }
  ]
  }
]