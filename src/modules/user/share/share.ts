import pic1 from '../../../assets/images/share/img1.jpg'
import pic2 from '../../../assets/images/share/img2.png'
import pic3 from '../../../assets/images/share/img3.png'
import pic4 from '../../../assets/images/share/img4.png'
import pic5 from '../../../assets/images/share/img5.jpeg'
import pic6 from '../../../assets/images/share/img6.jpg'

const blog = [
    {
        // "id" : "1",
        "title" : "Chỉ số hiệu suất trong Machine Learning",
        "imgURL" : pic1,
        "author" : "Bích Hường",
        "description" : "Chỉ số hiệu suất là một phần trong mọi quy trình machine learning. Nó biết cho mô hình hiện tại của bạn có tối ưu hơn trước không bằng...",
        "date" : "22/02/2023",
        "directory" : "chi-so-hieu-suat-trong-machine-learning",
        "content" : [
            "Chỉ số hiệu suất là một phần trong mọi quy trình machine learning. Nó biết cho mô hình hiện tại của bạn có tối ưu hơn trước không bằng cách sử dụng các chỉ số. Tất cả các mô hình machine learning bao gồm cả hồi quy tuyến tính, kỹ thuật SOTA như BERT đều cần số liệu để đánh giá hiệu suất.",
            "Mọi tác vụ machine learning có thể được chia nhỏ thành Hồi quy hoặc Phân loại giống như các chỉ số hiệu suất. Có đến hàng chục chỉ số cho cả hai thuật toán, nhưng chúng ta sẽ chỉ nói về những chỉ số phổ biến cùng với thông tin chúng cung cấp về hiệu suất của mô hình. Quan trọng là phải biết được cách mà mô hình của bạn xử lý dữ liệu như thế nào.",
            "Nếu bạn đã từng tham gia cuộc thi trên Kaggle, có thể bạn đã tìm hiểu phần đánh giá. Thông thường, có một thước đo để đánh giá hiệu suất.",
            "Chỉ số khác với hàm mất mát. Hàm mất mát cho ta một loại thước đo hiệu suất của mô hình, để đào tạo machine learning (sử dụng một số loại tối ưu hóa như Gradient Descent) và chúng thường khả vi với các tham số của mô hình.",
            "Các chỉ số theo dõi và đo lường hiệu suất của một mô hình (trong quá trình đào tạo và thử nghiệm) và không cần phải có tính khả vi.",
            "Tuy nhiên, trong một vài bài toán, nếu hàm hiệu suất khả vi thì nó cũng có thể được sử dụng như một hàm mất mát (với một số quy tắc hóa được thêm vào), chẳng hạn như MSE."
        ]
    },
    {
        // "id" : "2",
        "title" : "Perflint- Công cụ hiệu suất trong Python",
        "imgURL" : pic2,
        "author" : "Bích Hường",
        "description" : "Giúp phát hiện sớm các vấn đề về hiệu suất và tìm hiểu cách viết mã hoạt động tốt hơn trong quá trình thực hiện Trong lĩnh vực phát triển...",
        "date" : "14/02/2023",
        "directory" : "hello",
        "content" : [
            "hellooooooooooooooo",
            "bananaaaaaaaaaaaaaa",
            "ruby on railssssssssssssssssssssss",
            "pythonnnnnnnnnnnnnnnnn"
        ]
    },
    {
        // "id" : "3",
        "title" : "SQL Like A Pro: Hãy ngưng sử dụng Distinction!!",
        "imgURL" : pic3,
        "author" : "Bích Hường",
        "description" : "Con người có xu hướng làm đủ mọi cách giả định. Một giả định xuất hiện nhiều nhất, đó là “DISTINCT” là một loại từ khóa ma thuật đen...",
        "date" : "14/02/2023",
        "directory" : "hello",
        "content" : [
            "helloskjmdghsduiogsduofgh",
            "bananagdfgdfgdfgdfg",
            "ruby on rails",
            "python"
        ]
    },
    {
        // "id" : "4",
        "title" : "Tạm biệt Notebook Jupyter. Xin chào DataSpell!",
        "imgURL" : pic4,
        "author" : "Bích Hường",
        "description" : "IDE dành cho các nhà khoa học dữ liệu chuyên nghiệp. Nếu bạn thích Pycharm, bạn sẽ thích DataSpell. Các IDE như Pycharm không dành...",
        "date" : "14/02/2023",
        "directory" : "hello",
        "content" : [
            "hello",
            "banana",
            "ruby on railssdfsdghfhjertyrwegerhg",
            "python"
        ]
    },
    {
        // "id" : "5",
        "title" : "Cách xóa chuỗi câu lệnh if-else trùng lặp",
        "imgURL" : pic5,
        "author" : "Bích Hường",
        "description" : "Khi làm việc với bất kỳ ngôn ngữ lập trình nào khác, chúng ta sẽ phải xử lý rất nhiều khối câu điều kiện if-else, đôi khi sẽ xuất hiện các câu...",
        "date" : "14/02/2023",
        "directory" : "hello",
        "content" : [
            "hello",
            "banana",
            "ruby on rails",
            "pythonshtregherugery"
        ]
    },
    {
        // "id" : "6",
        "title" : "Mẹo sử dụng IntelliJ để gỡ lỗi hiệu quả",
        "imgURL" : pic6,
        "author" : "Bích Hường",
        "description" : "Rất nhiều người vẫn sử dụng các câu lệnh print để gỡ lỗi. Tuy cách này vẫn có những hiệu quả nhất định nhưng khi gặp những lỗi phức...",
        "date" : "14/02/2023",
        "directory" : "hello",
        "content" : [
            "hello",
            "bananafehsrtjertstwerger",
            "ruby on rails",
            "python"
        ]
    }
]

export default blog