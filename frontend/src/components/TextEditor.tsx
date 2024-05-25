import { ChangeEvent } from "react";

export default function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <>
            <form>
                <div className="w-full mb-4 border-gray-300 mt-8">
                    <div className="flex items-center justify-between">
                        <div className="py-2 bg-white rounded-b-lg w-full">
                            <label htmlFor="editor" className="sr-only">Publish post</label>
                            <textarea
                                id="editor"
                                rows={8}
                                className="block w-full border-gray-300 px-0 text-sm text-gray-800 bg-white border pl-2"
                                placeholder="Write an article..."
                                required
                                onChange={onChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
