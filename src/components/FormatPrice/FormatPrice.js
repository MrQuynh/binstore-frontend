const FormatPrice = ({ price }) => {
    return Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 3,
    }).format((price * 1000) / 1000);
};

export default FormatPrice;
