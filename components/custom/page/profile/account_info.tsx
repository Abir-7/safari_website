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

  const handleSaveName = () => {
    setName(tempName);
    setEditingName(false);
  };

  const handleCancelName = () => {
    setTempName(name);
    setEditingName(false);
  };

  return (
    <div className=" flex items-start justify-center py-8">
      <div className="w-full max-w-3xl space-y-1">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-neutral-900">Profile Info</h1>
          <p className="mt-1 text-sm text-neutral-500">
            Last updated: January 2025
          </p>
        </div>
        {/* Your Name */}
        <div className="py-5">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-base font-semibold text-neutral-900 mb-1">
                Your name
              </p>
              {editingName ? (
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    ref={nameInputRef}
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSaveName();
                      if (e.key === "Escape") handleCancelName();
                    }}
                    className="h-9 w-64 rounded-lg border-neutral-300 bg-white text-sm text-neutral-800 focus-visible:ring-amber-400"
                  />
                  <Button
                    size="sm"
                    onClick={handleSaveName}
                    className="h-9 rounded-lg bg-amber-700 px-4 text-xs text-white hover:bg-amber-800"
                  >
                    Save
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={handleCancelName}
                    className="h-9 rounded-lg px-3 text-xs text-neutral-500 hover:bg-neutral-200"
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-amber-700">{name}</p>
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
              <p className="text-base font-semibold text-neutral-900 mb-1">
                Email
              </p>
              <p className="text-sm text-amber-700">{email}</p>
            </div>
          </div>
        </div>

        <Separator className="" />

        {/* Password */}
        <div className="py-5">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-base font-semibold text-neutral-900 mb-1">
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
                    <Button
                      onClick={() => setEditingPassword(false)}
                      type="button"
                    >
                      Cancel
                    </Button>
                    <Button type="submit">Update</Button>
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
