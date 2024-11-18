interface PersonalInfoFormProps {
  isEditing: boolean;
  onEditToggle: () => void;
}

export function PersonalInfoForm({
  isEditing,
  onEditToggle,
}: PersonalInfoFormProps) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Personal Information
        </h3>
        <button
          onClick={onEditToggle}
          className="px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            disabled={!isEditing}
            defaultValue="John Doe"
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            disabled={!isEditing}
            defaultValue="john.doe@university.edu"
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
          />
        </div>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
}
