import React from "react"
import { HiCalendar, HiClock, HiLocationMarker, HiUsers, HiCog, HiPencil, } from "react-icons/hi"
import useAuthStore from "../stores/authStore"


const registeredEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    description: "Annual technology conference featuring the latest innovations",
    date: "2024-06-15",
    time: "09:00 AM",
    location: "San Francisco, CA",
    attendees: 250,
    status: "upcoming",
    category: "Technology",
  },
  {
    id: 2,
    title: "Design Workshop",
    description: "Hands-on workshop for UI/UX design principles",
    date: "2024-05-20",
    time: "02:00 PM",
    location: "New York, NY",
    attendees: 50,
    status: "completed",
    category: "Design",
  },
  {
    id: 3,
    title: "Startup Networking Event",
    description: "Connect with entrepreneurs and investors",
    date: "2024-07-10",
    time: "06:00 PM",
    location: "Austin, TX",
    attendees: 120,
    status: "upcoming",
    category: "Business",
  },
  {
    id: 4,
    title: "AI & Machine Learning Summit",
    description: "Exploring the future of artificial intelligence",
    date: "2024-04-18",
    time: "10:00 AM",
    location: "Seattle, WA",
    attendees: 300,
    status: "completed",
    category: "Technology",
  },
]

function getStatusColor(status) {
  switch (status) {
    case "upcoming":
      return "bg-green-100 text-green-800"
    case "completed":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-blue-100 text-blue-800"
  }
}

function getCategoryColor(category) {
  switch (category) {
    case "Technology":
      return "bg-blue-100 text-blue-800"
    case "Design":
      return "bg-purple-100 text-purple-800"
    case "Business":
      return "bg-orange-100 text-orange-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function Component() {

  const { user } = useAuthStore();
  const userData = user || "John"
  const enrolledEvents = user?.enrolledEvents || [];

  const upcomingEvents = registeredEvents.filter((event) => event.status === "upcoming")
  const completedEvents = registeredEvents.filter((event) => event.status === "completed")

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">

        <div className="relative overflow-hidden rounded-2xl bg-blue-50 shadow-2xl border">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10"></div>
          <div className="relative p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">

              <div className="relative h-24 w-24 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-white text-4xl font-bold">
                {userData.avatar ? (
                  <img
                    src={userData.avatar}
                    alt={userData.fullName}
                    className="object-cover h-full w-full"
                    onError={(e) => (e.target.src = "/placeholder.svg")}
                  />
                ) : (
                  userData.name.charAt(0).toUpperCase()
                )}
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
                    <p className="text-lg text-gray-600">@ {userData.name}</p>
                  </div>
                  <div className="flex gap-2 md:ml-auto">
                    <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
                      <HiPencil className="w-4 h-4" />
                      Edit Profile
                    </button>
                    <button className="flex items-center gap-2 border border-gray-300 rounded px-3 py-1 text-sm text-gray-700 hover:bg-gray-100">
                      <HiCog className="w-4 h-4" />
                      Settings
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <span className="font-medium">Email:</span> {userData.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="font-medium">Member since:</span> {userData.createdAt.slice(0, 10)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <div className="p-6 flex items-center gap-4">
              <div className="p-3 bg-blue-500 rounded-full text-white">
                <HiCalendar className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-900">{registeredEvents.length}</p>
                <p className="text-sm text-blue-700">Total Events</p>
              </div>
            </div>
          </div>

          <div className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <div className="p-6 flex items-center gap-4">
              <div className="p-3 bg-green-500 rounded-full text-white">
                <HiClock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-green-900">{upcomingEvents.length}</p>
                <p className="text-sm text-green-700">Upcoming</p>
              </div>
            </div>
          </div>

          <div className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <div className="p-6 flex items-center gap-4">
              <div className="p-3 bg-purple-500 rounded-full text-white">
                <HiUsers className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-900">{completedEvents.length}</p>
                <p className="text-sm text-purple-700">Completed</p>
              </div>
            </div>
          </div>
        </div>

        {enrolledEvents.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900">Enrolled Events</h2>
              <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                {enrolledEvents?.length || 0}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {enrolledEvents.map((event) => (
                <div
                  key={event.id}
                  className="border-0 hover:shadow-3xl shadow-2xl transition-shadow duration-200 bg-white rounded-lg"
                >
                  <div className="p-6 pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1 flex-1">
                        <h3 className="text-xl text-gray-900 leading-tight font-semibold">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getStatusColor(
                            event.status
                          )}`}
                        >
                          {event.status}
                        </span>
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(
                            event.type  
                          )}`}
                        >
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pt-0 pb-6 space-y-3">
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <HiCalendar className="h-4 w-4" />
                        <span>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiClock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <HiLocationMarker className="h-4 w-4" />
                        <span>{event.location || "Not Specified"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <HiUsers className="h-4 w-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {completedEvents.length > 0 && (
          <div className="space-y-6">
            <hr className="border-gray-300" />

            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900">Completed Events</h2>
              <span className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-semibold">
                {completedEvents.length}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {completedEvents?.map((event) => (
                <div
                  key={event.id}
                  className="border-0 hover:shadow-3xl shadow-2xl bg-white opacity-90 rounded-lg"
                >
                  <div className="p-6 pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1 flex-1">
                        <h3 className="text-xl text-gray-700 leading-tight font-semibold">{event.title}</h3>
                        <p className="text-gray-500">{event.description}</p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getStatusColor(
                            event.status
                          )}`}
                        >
                          {event.status}
                        </span>
                        <span
                          className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getCategoryColor(
                            event.category
                          )}`}
                        >
                          {event.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pt-0 pb-6 space-y-3">
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <HiCalendar className="h-4 w-4" />
                        <span>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HiClock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <HiLocationMarker className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <HiUsers className="h-4 w-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  )
}
