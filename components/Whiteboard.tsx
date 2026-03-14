"use client"

import { useRef, useState, useEffect } from "react"

export default function Whiteboard() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [drawing, setDrawing] = useState(false)
  const [color, setColor] = useState("#000000")
  const [brushSize, setBrushSize] = useState(4)
  const [isErasing, setIsErasing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight - 120

    ctx.lineCap = "round"
    ctx.lineJoin = "round"
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()

    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })

    draw(e)
  }

  const getMousePos = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }

    const rect = canvas.getBoundingClientRect()

    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    }
  }

  const getContext = () => {
    const canvas = canvasRef.current
    if (!canvas) return null
    return canvas.getContext("2d")
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const ctx = getContext()
    if (!ctx) return

    const { x, y } = getMousePos(e)

    ctx.beginPath()
    ctx.moveTo(x, y)

    ctx.strokeStyle = isErasing ? "#ffffff" : color
    ctx.lineWidth = brushSize

    setDrawing(true)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing) return

    const ctx = getContext()
    if (!ctx) return

    const { x, y } = getMousePos(e)

    ctx.lineTo(x, y)

    ctx.stroke()
  }

  const stopDrawing = () => {
    setDrawing(false)
  }

  const clearBoard = () => {
    const canvas = canvasRef.current
    const ctx = getContext()

    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const downloadImage = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = "whiteboard.png"
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <div className="flex flex-col gap-4 p-4">

      {/* Toolbar */}
      <div className="flex flex-wrap gap-4 items-center">

        {/* Color */}
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value)
            setIsErasing(false)
          }}
        />

        {/* Brush Size */}
        <input
          type="range"
          min="1"
          max="30"
          value={brushSize}
          onChange={(e) => setBrushSize(Number(e.target.value))}
        />

        <span>Size: {brushSize}</span>

        {/* Eraser */}
        <button
          onClick={() => setIsErasing(true)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Eraser
        </button>

        {/* Draw */}
        <button
          onClick={() => setIsErasing(false)}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Draw
        </button>

        {/* Clear */}
        <button
          onClick={clearBoard}
          className="px-3 py-1 bg-red-400 text-white rounded"
        >
          Clear
        </button>

        {/* Download */}
        <button
          onClick={downloadImage}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Download
        </button>

      </div>

      {/* Canvas */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          className="border w-full bg-white cursor-none"
          onMouseDown={startDrawing}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            left: cursor.x - brushSize / 2,
            top: cursor.y - brushSize / 2,
            width: brushSize,
            height: brushSize,
            borderRadius: "50%",
            border: "2px solid black",
          }}
        />
      </div>
      
    </div>
  )
}