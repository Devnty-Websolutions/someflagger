import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/utils/db";
import Report from "@/models/Report";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();
    const platform = formData.get("platform");
    const issueType = formData.get("issueType");
    const files = formData.getAll("file");
    const description = formData.get("description");
    if (!formData) {
      return NextResponse.json(
        { message: "Invalid input: 'formData' is required." },
        { status: 400 }
      );
    }
    if (!platform || !issueType || !description) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const uploadedFiles = files as File[];

    const filesArray: {
      data: Buffer;
      type: string;
      name: string;
      size: number;
      lastModified: number;
    }[] = [];

    if (uploadedFiles) {
      for (const file of uploadedFiles) {
        // Validate file type and size
        const allowedTypes = ["image/jpeg", "image/png", "application/pdf"]; // Adjust as needed

        if (file.type && !allowedTypes.includes(file.type)) {
          return NextResponse.json(
            { message: "Unsupported file type." },
            { status: 400 }
          );
        }

        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
          return NextResponse.json(
            { message: "File size exceeds the limit of 5MB." },
            { status: 400 }
          );
        }

        // Read the file data
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const thisFileData = {
          data: buffer,
          type: file.type,
          name: file.name,
          size: file.size,
          lastModified: file.lastModified,
        };

        filesArray.push(thisFileData);
      }
    }

    // Create the report
    const createdReport = await Report.create({
      platform,
      issueType,
      description,
      files: filesArray,
    });

    return NextResponse.json({ data: createdReport }, { status: 201 });
  } catch (error) {
    console.error("Create report operation failed", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
