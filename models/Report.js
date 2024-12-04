import { Schema, model, models } from "mongoose";

const FileSchema = new Schema({
  data: {
    type: Buffer,
  },
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  size: {
    type: Number,
  },
  lastModified: {
    type: Number,
  },
});

const ReportSchema = new Schema(
  {
    platform: {
      type: String,
      required: true,
    },
    issueType: {
      type: String,
      required: [true, "Please provide an issue"],
    },

    description: {
      type: String,
      required: true,
    },
    files: [FileSchema],
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Report = models.Report || model("Report", ReportSchema);

export default Report;
