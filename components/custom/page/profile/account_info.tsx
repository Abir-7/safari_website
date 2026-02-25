"use client";

import { useState, useRef, useEffect } from "react";
import { ClipboardEdit } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RHFForm } from "../../common/form/RHFForm";
import { RHFInput } from "../../common/form/RHFInput";

interface AccountInfoProps {
  initialName: string;
  initialEmail: string;
}

export default function AccountInformation({
  initialName,
  initialEmail,
}: AccountInfoProps) {
  const [name, setName] = useState(initialName);
  const [email] = useState(initialEmail);
  const [editingName, setEditingName] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);

  const [tempName, setTempName] = useState(name);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingName) nameInputRef.current?.focus();
  }, [editingName]);

  useEffect(() => {
    if (editingPassword) passwordInputRef.current?.focus();
  }, [editingPassword]);

  const handleEditName = () => {
    setTempName(name);
    setEditingName(true);
  };

  const handleCancelName = () => {
    setTempName(name);
    setEditingName(false);
  };

  return (
    <div className=" flex items-start justify-center ">
      <div className="w-full max-w-3xl space-y-1 py-8 lg:py-2">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-neutral-900">Profile Info</h1>
          <p className="mt-1 text-sm text-neutral-500">
            Last updated: January 2025
          </p>
        </div>
        {/* Your Name */}
        <div className="py-5 ">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-base font-medium  mb-1">Your name</p>
              {editingName ? (
                <div className="flex items-center gap-2 mt-2   ">
                  <RHFForm onSubmit={() => {}} className="w-full">
                    <RHFInput
                      name="Your Name"
                      label="Name"
                      className="bg-app-bg-color"
                    ></RHFInput>
                    <div className="flex gap-2 justify-end">
                      <Button
                        size="sm"
                        onClick={handleCancelName}
                        className="bg-app-secondary text-white hover:bg-app-primary"
                      >
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        onClick={handleCancelName}
                        className="bg-app-secondary text-white hover:bg-app-primary"
                      >
                        Save
                      </Button>
                    </div>
                  </RHFForm>
                </div>
              ) : (
                <p className="text-sm  text-app-secondary">{name}</p>
              )}
            </div>

            {!editingName && (
              <button
                onClick={handleEditName}
                className="flex items-center gap-1.5 text-sm font-semibold text-neutral-800 hover:text-amber-700 transition-colors mt-0.5"
              >
                <ClipboardEdit className="h-4 w-4" strokeWidth={1.8} />
                Edit
              </button>
            )}
          </div>
        </div>

        <Separator className="" />

        {/* Email */}
        <div className="py-5">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-base font-medium text-neutral-900 mb-1">
                Email
              </p>
              <p className="text-sm text-app-secondary">{email}</p>
            </div>
          </div>
        </div>

        <Separator className="" />

        {/* Password */}
        <div className="py-5">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-base font-medium text-neutral-900 mb-1">
                Password
              </p>
              {editingPassword ? (
                <div className="mt-4">
                  <RHFForm onSubmit={() => {}}>
                    <RHFInput
                      name=""
                      label="Old Password"
                      className="bg-app-bg-color"
                    ></RHFInput>
                    <RHFInput
                      name=""
                      label="New Password"
                      className="bg-app-bg-color"
                    ></RHFInput>
                    <RHFInput
                      name=""
                      label="Confirm Password"
                      className="bg-app-bg-color"
                    ></RHFInput>
                    <div className="flex gap-2 justify-end">
                      <Button
                        onClick={() => setEditingPassword(false)}
                        type="button"
                        className="bg-app-secondary text-white hover:bg-app-primary"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => setEditingPassword(false)}
                        className="bg-app-secondary text-white hover:bg-app-primary"
                        type="submit"
                      >
                        Update
                      </Button>
                    </div>
                  </RHFForm>
                </div>
              ) : (
                <p className="text-sm tracking-widest text-neutral-400 mt-1">
                  ••••••••••••••
                </p>
              )}
            </div>

            {!editingPassword && (
              <button
                onClick={() => setEditingPassword(true)}
                className="flex items-center gap-1.5 text-sm font-semibold text-neutral-800 hover:text-amber-700 transition-colors mt-0.5"
              >
                <ClipboardEdit className="h-4 w-4" strokeWidth={1.8} />
                Change
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
