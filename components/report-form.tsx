"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { FileUploadComponent } from "./file-upload";
import Link from "next/link";

export default function ReportForm() {
  const [platform, setPlatform] = React.useState("");
  const [
    issueType,
    //  setIssueType
  ] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ platform, issueType });
  };

  return (
    <div className="container max-w-screen-xl mx-auto p-4">
      <Card className="border-0 shadow-none">
        <CardHeader className="text-center space-y-1.5">
          <CardTitle className="text-xl font-extrabold flex flex-col mb-2">
            <span className="mb-2">
              Seen harmful features on your social media and games platforms?
            </span>
            <span className="text-sm font-semibold">
              Report It Here, and We’ll Take Action!
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <Label className="font-jura text-md font-semibold">
              Create Report
            </Label>
            <div className="space-y-2">
              <Label className="font-jura text-sm">Select platform</Label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                  <SelectItem value="tiktok">TikTok</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="font-jura text-sm">Select issue</Label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger>
                  <SelectValue placeholder="Select issue" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="harmful-content">
                    Harmful content
                  </SelectItem>
                  <SelectItem value="algorithmic-issue">
                    Algorithmic issue
                  </SelectItem>
                  <SelectItem value="unsafe-feature">Unsafe feature</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* <div className="space-y-2">
              <Label className="font-jura text-sm">Select Issue</Label>
              <RadioGroup value={issueType} onValueChange={setIssueType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="harmful" id="harmful" />
                  <Label htmlFor="harmful">Harmful content</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="algorithmic" id="algorithmic" />
                  <Label htmlFor="algorithmic">Algorithmic issue</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unsafe" id="unsafe" />
                  <Label htmlFor="unsafe">Unsafe features</Label>
                </div>
              </RadioGroup>
            </div> */}

            <div className="space-y-2">
              <Label className="font-jura text-sm">
                Describe what happened
              </Label>
              <Textarea
                placeholder="Type your description here..."
                className="min-h-[120px]"
              />
            </div>

            <div className="space-y-4">
              <FileUploadComponent />
              <Button type="submit" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send report
              </Button>
            </div>
          </form>
        </CardContent>
        <div className="w-full flex justify-center">
          <Link
            href={"https://www.devnty.com"}
            target="_blank"
            title="Powered by Devnty Websolutions"
            className="flex items-center space-x-2 p-2"
          >
            <span className="text-[0.6rem]">powered by</span>
            <img
              src="/devnty-logo.png"
              alt="devnty websolutions logo"
              width={100}
              height={20}
            ></img>
          </Link>
        </div>
      </Card>
    </div>
  );
}
