// models/law.js
import mongoose from "mongoose";

// Định nghĩa schema cho bộ luật
const LawSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: [
      {
        type: String,
        required: true,
      }
    ],
    category: {
      type: String,
      enum: [
        "Hình sự",
        "Dân sự",
        "Lao động",
        "Thuế",
        "Doanh nghiệp",
        "Hành chính",
      ],
      required: true,
    },
    enactedDate: {
      type: String,
      required: true,
    },
    effectiveDate: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Tạo model từ schema
const LawModel = mongoose.model("Law", LawSchema);

export default LawModel;
