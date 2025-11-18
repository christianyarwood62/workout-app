import { useTemplates } from "../../contexts/TemplatesContext";

function AddTemplateButton() {
  const { isCreateWorkoutTemplateOpen, templates, toggleNewTemplate } =
    useTemplates();

  return (
    <>
      {!isCreateWorkoutTemplateOpen && (
        <div className="add-template-button">
          <button className="button" onClick={toggleNewTemplate}>
            {templates.length === 0 ? (
              <h3>Create your first template! 🏋️‍♀️</h3>
            ) : (
              <h3>Add another template!</h3>
            )}
          </button>
        </div>
      )}
    </>
  );
}

export default AddTemplateButton;
