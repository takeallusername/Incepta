"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // TODO: Implement actual waitlist submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            Incepta
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Link href="#waitlist">
              <Button className="shadow-md">Join Waitlist</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-block border-2 border-border bg-secondary px-4 py-2 text-sm font-medium shadow-sm">
            For US College Students
          </div>
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            Pass your exam with{" "}
            <span className="text-primary">just the essentials</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
            Upload your lecture PDF. Incepta compresses it into the exact
            concepts you need to score 70%+ in minutes.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="#waitlist">
              <Button size="lg" className="px-8 py-6 text-lg shadow-lg">
                Join the Waitlist
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg shadow-md"
              >
                See how it works
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="border-y-2 border-border bg-muted px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Sound familiar?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Every semester, millions of students face the same challenges
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-2 border-border shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 text-4xl">⏰</div>
                <h3 className="mb-2 text-xl font-bold">No Time Left</h3>
                <p className="text-muted-foreground">
                  Exam tomorrow, 200+ pages of notes untouched. You need answers
                  now, not a study plan.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 text-4xl">📚</div>
                <h3 className="mb-2 text-xl font-bold">Too Much Material</h3>
                <p className="text-muted-foreground">
                  Lectures, slides, textbooks, readings... Where do you even
                  start when everything seems important?
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 text-4xl">🎯</div>
                <h3 className="mb-2 text-xl font-bold">What to Focus On?</h3>
                <p className="text-muted-foreground">
                  Existing AI tools give summaries, not exam strategy. You need
                  to know what will actually be tested.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            How Incepta Works
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            From overwhelmed to exam-ready in 3 simple steps
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border-2 border-border bg-primary text-2xl font-bold text-primary-foreground shadow-md">
                1
              </div>
              <h3 className="mb-2 text-xl font-bold">Upload Your PDF</h3>
              <p className="text-muted-foreground">
                Drop your lecture slides, notes, or textbook chapters. We handle
                PDFs of any length.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border-2 border-border bg-secondary text-2xl font-bold shadow-md">
                2
              </div>
              <h3 className="mb-2 text-xl font-bold">AI Analyzes Content</h3>
              <p className="text-muted-foreground">
                Our AI identifies key concepts, extracts must-know information,
                and predicts likely exam questions.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center border-2 border-border bg-accent text-2xl font-bold text-accent-foreground shadow-md">
                3
              </div>
              <h3 className="mb-2 text-xl font-bold">Study & Pass</h3>
              <p className="text-muted-foreground">
                Get compressed notes and practice questions designed to hit 70%+
                with minimal study time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y-2 border-border bg-muted px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            What You Get
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Everything you need to pass, nothing you don&apos;t
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-border shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 inline-block border-2 border-primary bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  Core Feature
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Exam-Focused Summaries
                </h3>
                <p className="text-muted-foreground">
                  Not just a summary—a strategic compression of exactly what you
                  need to pass.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 inline-block border-2 border-accent bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  Smart Feature
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Predicted Exam Questions
                </h3>
                <p className="text-muted-foreground">
                  AI-generated practice questions based on your specific course
                  material.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 inline-block border-2 border-secondary bg-secondary/50 px-3 py-1 text-sm font-medium">
                  Bonus
                </div>
                <h3 className="mb-2 text-xl font-bold">Professor Style Match</h3>
                <p className="text-muted-foreground">
                  Analysis adapts to common testing patterns and professor
                  emphasis points.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Simple Pricing
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Start free, upgrade when you need more
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Free Plan */}
            <Card className="border-2 border-border shadow-md">
              <CardContent className="p-6">
                <div className="mb-2 text-sm font-medium text-muted-foreground">
                  Free
                </div>
                <div className="mb-1 text-5xl font-bold">$0</div>
                <p className="mb-6 text-sm text-muted-foreground">
                  Forever free
                </p>
                <ul className="mb-8 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-border bg-muted text-xs">
                      ✓
                    </span>
                    2 PDF uploads
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-border bg-muted text-xs">
                      ✓
                    </span>
                    2 exam compressions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-border bg-muted text-xs">
                      ✓
                    </span>
                    Key concepts view only
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-border text-xs">
                      ✕
                    </span>
                    Practice questions
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-border text-xs">
                      ✕
                    </span>
                    Cheat sheet
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-border text-xs">
                      ✕
                    </span>
                    Focus mode
                  </li>
                </ul>
                <Link href="#waitlist" className="block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full shadow-md"
                  >
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro Plan - Most Popular */}
            <Card className="relative border-4 border-primary shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 border-2 border-primary bg-primary px-4 py-1 text-sm font-bold text-primary-foreground shadow-md">
                MOST POPULAR
              </div>
              <CardContent className="p-6 pt-8">
                <div className="mb-2 text-sm font-medium text-muted-foreground">
                  Pro
                </div>
                <div className="mb-1 text-5xl font-bold">
                  $4<span className="text-2xl">.99</span>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">per month</p>
                <ul className="mb-8 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-primary bg-primary text-xs text-primary-foreground">
                      ✓
                    </span>
                    <strong>Unlimited</strong> PDF uploads
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-primary bg-primary text-xs text-primary-foreground">
                      ✓
                    </span>
                    <strong>Unlimited</strong> compressions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-primary bg-primary text-xs text-primary-foreground">
                      ✓
                    </span>
                    AI practice questions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-primary bg-primary text-xs text-primary-foreground">
                      ✓
                    </span>
                    1-page cheat sheet
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-primary bg-primary text-xs text-primary-foreground">
                      ✓
                    </span>
                    24-hour focus mode
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-border text-xs">
                      ✕
                    </span>
                    Priority processing
                  </li>
                </ul>
                <Link href="#waitlist" className="block">
                  <Button size="lg" className="w-full shadow-lg">
                    Get Pro
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Pro+ Plan */}
            <Card className="border-2 border-accent shadow-md">
              <CardContent className="p-6">
                <div className="mb-2 text-sm font-medium text-accent">
                  Pro+ Finals Pass
                </div>
                <div className="mb-1 text-5xl font-bold">
                  $9<span className="text-2xl">.99</span>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">per month</p>
                <ul className="mb-8 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-accent bg-accent text-xs text-accent-foreground">
                      ✓
                    </span>
                    Everything in Pro
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-accent bg-accent text-xs text-accent-foreground">
                      ✓
                    </span>
                    <strong>Priority</strong> processing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-accent bg-accent text-xs text-accent-foreground">
                      ✓
                    </span>
                    3-level difficulty questions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-accent bg-accent text-xs text-accent-foreground">
                      ✓
                    </span>
                    Multi-subject summaries
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-accent bg-accent text-xs text-accent-foreground">
                      ✓
                    </span>
                    Downloadable PDF notes
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center border-2 border-accent bg-accent text-xs text-accent-foreground">
                      ✓
                    </span>
                    Unlimited focus mode
                  </li>
                </ul>
                <Link href="#waitlist" className="block">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-accent text-accent shadow-md hover:bg-accent hover:text-accent-foreground"
                  >
                    Get Pro+
                  </Button>
                </Link>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Go from A- to A
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            All plans include a 14-day money-back guarantee. Payments processed
            securely via Paddle.
          </p>
        </div>
      </section>

      {/* Waitlist Form */}
      <section
        id="waitlist"
        className="border-y-2 border-border bg-muted px-6 py-24"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Join the Waitlist
          </h2>
          <p className="mb-8 text-muted-foreground">
            Be the first to know when Incepta launches. Early access users get
            priority support and special pricing.
          </p>
          {isSubmitted ? (
            <Card className="border-4 border-primary shadow-xl">
              <CardContent className="p-8">
                <div className="mb-4 text-5xl">🎉</div>
                <h3 className="mb-2 text-2xl font-bold">You&apos;re on the list!</h3>
                <p className="text-muted-foreground">
                  We&apos;ll notify you as soon as Incepta is ready. Check your inbox
                  for a confirmation email.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-2 border-border shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your .edu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 border-2 text-lg shadow-sm"
                    required
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full py-6 text-lg shadow-md"
                    disabled={isLoading}
                  >
                    {isLoading ? "Joining..." : "Join the Waitlist"}
                  </Button>
                </form>
                <p className="mt-4 text-sm text-muted-foreground">
                  We recommend using your university email (.edu) for priority
                  access
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card className="border-2 border-border shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold">
                  How is this different from ChatGPT?
                </h3>
                <p className="text-muted-foreground">
                  ChatGPT gives general summaries. Incepta is specifically
                  designed for exam performance—we identify what&apos;s most likely
                  to be tested and compress content to maximize your score with
                  minimal study time.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold">
                  What subjects does it work for?
                </h3>
                <p className="text-muted-foreground">
                  Incepta works for any text-based course material—sciences,
                  humanities, business, engineering, and more. If it&apos;s in a PDF,
                  we can process it.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold">
                  Is my data secure?
                </h3>
                <p className="text-muted-foreground">
                  Yes. Your uploaded materials are encrypted and never shared.
                  We delete your files after processing unless you choose to
                  save them.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-border shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold">
                  What&apos;s your refund policy?
                </h3>
                <p className="text-muted-foreground">
                  If you purchase an exam pass and don&apos;t use it within 24 hours,
                  you can request a full refund. Once you generate study
                  materials, the purchase is final.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-border bg-muted px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <Link href="/" className="text-2xl font-bold text-primary">
                Incepta
              </Link>
              <p className="mt-2 text-sm text-muted-foreground">
                Pass your exams with just the essentials.
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="mailto:support@incepta.app"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t-2 border-border pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Incepta. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
