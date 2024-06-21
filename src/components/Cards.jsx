/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Yb3FK8oyjfb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Cards() {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <img src="/placeholder.svg" alt="Card Image" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Minimalist Workspace</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                A clean and organized workspace to boost your productivity.
              </p>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <img src="/placeholder.svg" alt="Card Image" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Cozy Home Office</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Create a comfortable and inspiring home office space.
              </p>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <img src="/placeholder.svg" alt="Card Image" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Sustainable Living</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Discover eco-friendly home decor and lifestyle solutions.
              </p>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <img src="/placeholder.svg" alt="Card Image" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Modern Farmhouse</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Blend rustic charm with contemporary design.</p>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <img src="/placeholder.svg" alt="Card Image" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Scandinavian Simplicity</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Embrace the beauty of minimalism and functionality.
              </p>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow-lg overflow-hidden">
            <img src="/placeholder.svg" alt="Card Image" width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Boho Chic Retreat</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Create a relaxing and eclectic oasis in your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }