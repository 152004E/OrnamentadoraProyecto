import { ProgressBar } from "./AdminDashComponents/Home/ProgressBar";

export const SectionProjectsStatus = () => {
  return (
    <section className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 px-5 py-2 my-4">
      
      <div className="flex items-center justify-between">

        {/* En fabricación */}
        <article className="flex-1 text-center pb-2">
          <h4 className="text-4xl font-bold text-gray-800">14</h4>
          <p className="text-gray-500 font-medium text-sm mt-1">
            En fabricación
          </p>

          <div className="mt-3">
            <ProgressBar color="bg-red-500" value={70} />
          </div>

        </article>

        {/* Divider elegante */}
        <div className="w-px h-20 bg-linear-to-b from-transparent via-gray-300 to-transparent mx-6"></div>

        {/* Pendientes */}
        <article className="flex-1 text-center pb-2">
          <h4 className="text-4xl font-bold text-gray-800">7</h4>
          <p className="text-gray-500 font-medium text-sm mt-1">
            Pendientes
          </p>

          <div className="mt-3">
            <ProgressBar color="bg-green-500" value={20} />
          </div>

        </article>

      </div>
    </section>
  );
};
